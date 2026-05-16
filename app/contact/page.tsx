import type { Metadata } from "next";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
  title: "Contact & Booking — Klaria Health",
  description: "Book a consultation, ask a question, or message us on WhatsApp. We respond within two minutes during opening hours.",
  openGraph: {
    title: "Book with Klaria",
    description: "A consultation in under a minute. WhatsApp reply in under two.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}