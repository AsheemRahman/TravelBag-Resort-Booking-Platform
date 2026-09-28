"use client";

import { useEffect, useRef, useState } from "react";
import { BotMessageSquare, X, Send, Sparkles, } from "lucide-react";


type ChatMessage = {
    id: number;
    role: "user" | "assistant";
    content: string;
};


type StreamEvent =
    | {
        type: "start";
        interactionId: string;
    } | {
        type: "text";
        text: string;
    } | {
        type: "done";
    } | {
        type: "error";
        error: string;
    };


export default function TravelAIChat() {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [interactionId, setInteractionId] =
        useState<string | null>(null);

    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: 1,
            role: "assistant",
            content: "👋 Hi! I'm TravelBag AI.\n\nI can help you plan trips, find destinations, create itineraries and more.\n\nWhere would you like to travel?",
        },
    ]);

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, loading]);

    const handleSend = async () => {
        const trimmedMessage = message.trim();

        if (!trimmedMessage || loading) {
            return;
        }

        const userMessage: ChatMessage = {
            id: Date.now(),
            role: "user",
            content: trimmedMessage,
        };

        setMessages((prev) => [...prev, userMessage,]);

        setMessage("");
        setLoading(true);

        const assistantMessageId = Date.now() + 1;

        // Add empty AI message
        setMessages((prev) => [
            ...prev,
            {
                id: assistantMessageId,
                role: "assistant",
                content: "",
            },
        ]);

        try {
            const response = await fetch("/api/chat",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify({
                        message: trimmedMessage,
                        previousInteractionId:
                            interactionId,
                    }),
                }
            );

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(
                    errorData?.error ||
                    "Failed to connect to AI."
                );
            }

            if (!response.body) {
                throw new Error(
                    "Streaming is not supported."
                );
            }
            const reader = response.body.getReader();

            const decoder = new TextDecoder();

            let buffer = "";

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                buffer += decoder.decode(value, { stream: true, });
                const events = buffer.split("\n\n");
                buffer = events.pop() || "";

                for (const event of events) {
                    const line = event.split("\n").find((line) => line.startsWith("data:"));
                    if (!line) continue;
                    const jsonString = line.replace(/^data:\s*/, "").trim();
                    if (!jsonString) continue;
                    let data: StreamEvent;

                    try {
                        data = JSON.parse(jsonString);
                    } catch {
                        continue;
                    }

                    if (data.type === "start") {
                        setInteractionId(data.interactionId);
                    }

                    if (data.type === "text") {
                        setMessages((prev) => prev.map((msg) => msg.id === assistantMessageId ? { ...msg, content: msg.content + data.text, } : msg));
                    }

                    if (data.type === "error") {
                        throw new Error(data.error);
                    }
                }
            }
        } catch (error) {
            console.error("TravelBag AI error:", error);
            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === assistantMessageId ? { ...msg, content: "Sorry, I couldn't connect to TravelBag AI. Please try again.", } : msg
                )
            );
        } finally {
            setLoading(false);
        }
    };

    const handleNewChat = () => {
        setInteractionId(null);
        setMessages([
            {
                id: Date.now(),
                role: "assistant",
                content: "👋 Hi! I'm TravelBag AI.\n\nWhere would you like to travel?",
            },
        ]);
    };

    return (
        <>
            {open && (
                <div
                    className="
                        fixed
                        bottom-24
                        right-6
                        z-[100]
                        flex
                        h-[500px]
                        w-[350px]
                        max-w-[calc(100vw-2rem)]
                        flex-col
                        overflow-hidden
                        rounded-2xl
                        bg-white
                        shadow-2xl
                        ring-1
                        ring-black/10
                    "
                >
                    {/* Header */}
                    <div className=" flex shrink-0 items-center justify-between bg-forest px-4 py-4 text-white">
                        <div className="flex items-center gap-3">
                            <div className=" flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ">
                                <BotMessageSquare className="h-5 w-5" />
                            </div>

                            <div>
                                <h3 className="font-display font-semibold text-white">
                                    TravelBag AI
                                </h3>

                                <p className="text-xs text-white/70">
                                    Your personal travel assistant
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-1">
                            <button type="button" onClick={handleNewChat}
                                className=" rounded-full px-2  py-1 text-xs text-white/80 transition hover:bg-white/15 hover:text-white">
                                New
                            </button>

                            <button type="button" onClick={() => setOpen(false)} aria-label="Close TravelBag AI"
                                className=" rounded-full p-1.5 transition hover:bg-white/15"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className=" flex-1 overflow-y-auto bg-mist p-4 ">
                        <div className="space-y-4">
                            {messages.map(
                                (msg) => (
                                    <div key={msg.id} className={` flex items-start gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                        {msg.role ===
                                            "assistant" && (
                                                <div
                                                    className="
                                                    flex
                                                    h-8
                                                    w-8
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    bg-forest
                                                    text-white
                                                "
                                                >
                                                    <Sparkles className="h-4 w-4" />
                                                </div>
                                            )}

                                        <div
                                            className={`
                                                max-w-[82%]
                                                whitespace-pre-line
                                                rounded-2xl
                                                p-3
                                                text-sm
                                                shadow-sm
                                                ${msg.role ===
                                                    "assistant"
                                                    ? "rounded-tl-none bg-white text-ink"
                                                    : "rounded-tr-none bg-forest text-white"
                                                }
                                            `}
                                        >
                                            {msg.content}

                                            {loading && msg.role === "assistant" && msg.id === messages[messages.length - 1]?.id && (
                                                <span className=" ml-1 inline-block h-4 w-1 animate-pulse rounded-sm bg-current align-middle" />
                                            )}
                                        </div>
                                    </div>
                                )
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>

                    {/* Input */}
                    <div className=" flex shrink-0 items-center gap-2 border-t bg-white p-3">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) =>
                                setMessage(
                                    e.target.value
                                )
                            }
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    handleSend();
                                }
                            }}
                            disabled={loading}
                            placeholder={loading ? "TravelBag AI is typing..." : "Ask about your trip..."}
                            className="
                                min-w-0
                                flex-1
                                rounded-full
                                border
                                border-gray-200
                                bg-gray-50
                                px-4
                                py-2.5
                                text-sm
                                text-ink
                                outline-none
                                transition
                                placeholder:text-gray-400
                                focus:border-forest
                                focus:bg-white
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                            "
                        />

                        <button
                            type="button"
                            onClick={handleSend}
                            disabled={
                                !message.trim() ||
                                loading
                            }
                            aria-label="Send message"
                            className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-forest
                                text-white
                                transition-all
                                hover:scale-105
                                hover:bg-forest/90
                                disabled:cursor-not-allowed
                                disabled:opacity-50
                            "
                        >
                            <Send className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            )}

            <div className=" fixed bottom-6 right-[6.5rem] z-[100]">
                <button type="button" onClick={() => setOpen((value) => !value)}
                    aria-label={open ? "Close TravelBag AI" : "Open TravelBag AI"}
                    className="
                        relative
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        bg-forest
                        text-white
                        shadow-lift
                        transition-all
                        duration-200
                        hover:scale-105
                        hover:shadow-xl
                    "
                >
                    {open ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <BotMessageSquare className="h-6 w-6" />
                    )}

                    {!open && (
                        <span className=" absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald text-white shadow-sm">
                            <Sparkles className="h-3 w-3" />
                        </span>
                    )}
                </button>
            </div>
        </>
    );
}
