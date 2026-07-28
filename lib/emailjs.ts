import emailjs from "@emailjs/browser";

// Fill these in from your EmailJS dashboard (https://dashboard.emailjs.com).
// They are safe to expose on the client — EmailJS is designed for
// frontend-only form submission and enforces its own domain/rate limits.
export const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "YOUR_SERVICE_ID";
export const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "YOUR_TEMPLATE_ID";
export const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "YOUR_PUBLIC_KEY";

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  destination?: string;
  travelDate?: string;
  guests?: string;
  preferredStay?: string;
  message?: string;
}

export async function sendInquiryEmail(data: InquiryFormData) {
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      full_name: data.fullName,
      phone: data.phone,
      email: data.email,
      destination: data.destination ?? "Not specified",
      travel_date: data.travelDate ?? "Not specified",
      guests: data.guests ?? "Not specified",
      preferred_stay: data.preferredStay ?? "Not specified",
      message: data.message ?? "",
    },
    { publicKey: EMAILJS_PUBLIC_KEY }
  );
}
