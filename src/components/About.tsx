import { profile } from "@/content/profile";

export function About() {
  return (
    <section id="about" className="section-band section-pad py-20 md:py-28">
      <div className="shell grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <div>
          <p className="font-display text-sm tracking-[0.18em] text-sage uppercase">
            About
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-ink md:text-4xl">
            Regulatory work in life sciences
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-ink-soft md:text-lg">
          {profile.about.map((para) => (
            <p key={para}>{para}</p>
          ))}
          <p className="pt-2 text-sm text-ink-soft/80">
            Open to product and programme lead roles in regulatory digital
            transformation, across life sciences, pharma, medtech and R&amp;D.
          </p>
        </div>
      </div>
    </section>
  );
}
