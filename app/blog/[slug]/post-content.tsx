"use client";
import Image from "next/image";
import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { PageShell, Reveal } from "@/components/site/PageShell";
import { POSTS } from "./posts-data";

export default function PostContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = POSTS[slug];

  if (!post) {
    notFound();
    return null;
  }
  
  return (
    <PageShell>
      <article className="max-w-3xl mx-auto px-5 sm:px-8 py-10">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="w-4 h-4" /> All articles
        </Link>
        <Reveal className="space-y-5">
          <div className="flex items-center gap-3 text-xs">
            <span className="rounded-full bg-primary-soft text-primary px-3 py-1 font-semibold">{post.cat}</span>
            <span className="text-muted-foreground">{post.date}</span>
            <span className="text-muted-foreground inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {post.read}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-foreground text-balance leading-[1]">{post.title}</h1>
        </Reveal>
        <Reveal delay={0.1} className="my-10">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-float">
            <Image src={post.img.src} alt={post.title} fill className="object-cover" />
          </div>
        </Reveal>
        <div className="space-y-6 text-lg text-foreground/85 leading-relaxed">
          {post.body.map((para: string, i: number) => (
            <Reveal key={i} delay={i * 0.05}><p>{para}</p></Reveal>
          ))}
        </div>
      </article>
    </PageShell>
  );
}
