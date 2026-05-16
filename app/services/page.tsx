import type { Metadata } from "next";
import ServicesContent from "./services-content";

export const metadata: Metadata = {
  title: "Services — Klaria Health",
  description: "Dentistry, Optometry, Physiotherapy, Pediatrics, Cardiology, Family Medicine. Every specialty under one calm roof in Brooklyn.",
  openGraph: {
    title: "Services — Klaria Health",
    description: "Six in-house teams that share notes, not handoffs. Book in under a minute.",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}