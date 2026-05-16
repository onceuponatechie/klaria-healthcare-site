import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { POSTS } from "./posts-data";
import PostContent from "./post-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];

  if (!post) {
    return {
      title: "Article not found — Klaria Journal",
    };
  }

  const description = post.body[0]?.slice(0, 160) ?? "A note from the Klaria Journal.";

  return {
    title: `${post.title} — Klaria Journal`,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "article",
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS[slug];

  if (!post) {
    notFound();
  }

  return <PostContent params={params} />;
}