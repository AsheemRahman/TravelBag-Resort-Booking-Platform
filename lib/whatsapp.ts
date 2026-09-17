export const TRAVELBAG_WHATSAPP_NUMBER = "918075389443";

type WhatsAppIntent =
  | { type: "general" }
  | { type: "destination"; destination: string }
  | { type: "package"; packageName: string; destination?: string }
  | { type: "stay"; stayName: string; location?: string }
  | { type: "quote"; destination?: string }
  | { type: "custom"; message: string };

export function buildWhatsAppMessage(intent: WhatsAppIntent): string {
  switch (intent.type) {
    case "destination":
      return `Hi TravelBag! I'm interested in visiting ${intent.destination}. Please help me plan my trip.`;
    case "package":
      return `Hi TravelBag! I'd like to know more about the "${intent.packageName}" package${
        intent.destination ? ` in ${intent.destination}` : ""
      }. Could you share availability and pricing?`;
    case "stay":
      return `Hi TravelBag! I'm interested in booking ${intent.stayName}${
        intent.location ? ` in ${intent.location}` : ""
      }. Please share availability and rates.`;
    case "quote":
      return `Hi TravelBag! Please help me get a custom quote for a trip${
        intent.destination ? ` to ${intent.destination}` : ""
      }.`;
    case "custom":
      return intent.message;
    case "general":
    default:
      return "Hi TravelBag! I'd like some help planning my trip.";
  }
}

export function getWhatsAppLink(intent: WhatsAppIntent = { type: "general" }): string {
  const message = buildWhatsAppMessage(intent);
  return `https://wa.me/${TRAVELBAG_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
