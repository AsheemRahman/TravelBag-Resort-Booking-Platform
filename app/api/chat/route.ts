import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY, });


const SYSTEM_INSTRUCTION = `
You are TravelBag AI, a friendly and helpful travel assistant.

Help users with:
- Trip planning
- Destinations
- Itineraries
- Activities
- Hotels
- Transportation
- Travel budgets
- Packing lists
- Travel tips

Keep responses concise and useful.

For itineraries:
- Organize by day.
- Keep the schedule realistic.
- Consider travel time.
- Don't overload the day.

Important:
- Never claim you booked anything.
- Don't invent live prices or availability.
- If live information is unavailable, say so.
- Ask a short follow-up question when important information is missing.
`;

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const message = body?.message;
        const previousInteractionId =
            body?.previousInteractionId;

        if (typeof message !== "string" || !message.trim()) {
            return new Response(
                JSON.stringify({ error: "Message is required.", }),
                { status: 400, headers: { "Content-Type": "application/json", }, }
            );
        }

        const stream = await ai.interactions.create({
            model: "gemini-3.5-flash-lite",

            input: message.trim(),

            stream: true,

            system_instruction: SYSTEM_INSTRUCTION,

            ...(previousInteractionId ? { previous_interaction_id: previousInteractionId, } : {}),
        });

        const encoder = new TextEncoder();

        const readableStream =
            new ReadableStream({
                async start(controller) {
                    try {
                        for await (const event of stream) {
                            if (event.event_type === "interaction.created") {
                                const interactionId = event.interaction?.id;

                                if (interactionId) {
                                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "start", interactionId, })}\n\n`));
                                }
                            }

                            if (event.event_type === "step.delta") {
                                const delta = event.delta;

                                if (delta?.type === "text" && delta.text) {
                                    controller.enqueue(
                                        encoder.encode(`data: ${JSON.stringify({ type: "text", text: delta.text, })}\n\n`)
                                    );
                                }
                            }

                            if (event.event_type === "interaction.completed") {
                                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "done" })}\n\n`));
                            }

                            if (event.event_type === "error") {
                                controller.enqueue(
                                    encoder.encode(`data: ${JSON.stringify({ type: "error", error: event.error ?? "AI response failed.", })}\n\n`)
                                );
                            }
                        }

                        controller.close();
                    } catch (error) {
                        console.error("Gemini streaming error:", error);
                        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "error", error: "AI response failed.", })}\n\n`));
                        controller.close();
                    }
                },
            });

        return new Response(
            readableStream, {
            headers: {
                "Content-Type": "text/event-stream; charset=utf-8",
                "Cache-Control": "no-cache, no-transform",
                Connection: "keep-alive",
                "X-Accel-Buffering": "no",
            },
        }
        );
    } catch (error) {
        console.error("TravelBag AI API error:", error);

        return new Response(
            JSON.stringify({ error: "Unable to connect to TravelBag AI.", }), { status: 500, headers: { "Content-Type": "application/json", }, }
        );
    }
}
