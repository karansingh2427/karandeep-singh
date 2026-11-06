import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Chiku",
  description: "Chiku is Karandeep Singh's personal AI agent. It is private and serves only him.",
  robots: { index: false, follow: false },
};

export default function ChikuPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <article className="section-band section-pad pb-24 pt-28 md:pt-36">
          <div className="shell max-w-2xl">
            <p className="text-xs font-medium tracking-[0.16em] text-copper uppercase">Personal project</p>
            <h1 className="mt-4 font-display text-4xl tracking-tight text-ink md:text-5xl">Chiku</h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Chiku is my personal AI agent. I built it myself, it runs on my own machine, and it works only for me. It
                is not a public service: no one else can sign up for it or use it.
              </p>
              <p>
                I talk to it on Telegram. It keeps my notes, sends me a morning brief, tracks my training, and reads my
                own Gmail accounts, read-only, to tell me what needs my attention.
              </p>
              <p>
                <Link href="/chiku/privacy" className="prose-link">
                  Privacy policy
                </Link>
                <span className="mx-2 text-line">·</span>
                Contact:{" "}
                <a href={`mailto:${profile.email}`} className="prose-link">
                  {profile.email}
                </a>
              </p>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
