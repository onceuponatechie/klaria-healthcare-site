import type { Metadata } from "next";
import BlogContent from "./blog-content";

export const metadata: Metadata = {
  title: "Journal — Klaria Health",
  description: "Notes on modern healthcare, calm living, and the small habits that compound into a healthier life. Quiet, useful writing from our specialists.",
  openGraph: {
    title: "The Klaria Journal",
    description: "Modern healthcare, calmly written. No hype, no listicles.",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}