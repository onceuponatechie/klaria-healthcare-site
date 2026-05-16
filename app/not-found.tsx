import Link from "next/link";
import { ArrowLeft, HeartPulse } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-5 sm:px-8 pt-24 sm:pt-28 pb-16">
      <div className="max-w-xl text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-soft text-primary mx-auto">
          <HeartPulse className="w-7 h-7" />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Page not found
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
            This page took a sick day.
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            The link you followed may be broken, or the page may have been moved. Let&apos;s get you somewhere useful.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold shadow-glass hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-card text-foreground px-5 py-3 text-sm font-semibold hover:bg-secondary transition-colors"
          >
            Book a consultation
          </Link>
        </div>
      </div>
    </main>
  );
}