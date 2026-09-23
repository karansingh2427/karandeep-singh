import Image from "next/image";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section className="hero-wash section-pad relative flex min-h-[100svh] items-center pb-16 pt-28 md:pb-20 md:pt-24">
      <div className="shell relative z-10 grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="font-display text-sm tracking-[0.18em] text-sage uppercase">
            Portfolio
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] tracking-tight text-ink">
            {profile.brand}
          </h1>
          <div className="accent-line mt-6 h-px w-24 bg-copper" />
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            {profile.headline}
          </p>
          <p className="mt-4 text-sm text-ink-soft">{profile.location}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="btn-primary rounded-full px-6 py-3 text-sm font-medium transition"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/25 bg-paper px-6 py-3 text-sm font-medium text-ink transition hover:border-sage hover:text-sage-deep"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
          <div
            aria-hidden
            className="drift absolute -inset-6 -z-10 rounded-full bg-sage/20 blur-3xl"
          />
          <Image
            src={profile.photo}
            alt={profile.name}
            width={800}
            height={800}
            priority
            className="aspect-square w-full object-cover object-top"
            sizes="(max-width: 1024px) 80vw, 420px"
          />
        </div>
      </div>
    </section>
  );
}
