import type { Metadata } from "next";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About Klaria — Built around the people we care for",
  description: "Founded by patients who'd had enough of forgetting healthcare is about humans. Six small promises behind every visit.",
  openGraph: {
    title: "About Klaria — Built around the people we care for",
    description: "Founded by patients who'd had enough of forgetting healthcare is about humans.",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}