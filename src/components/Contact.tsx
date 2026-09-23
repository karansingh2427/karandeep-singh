import { profile } from "@/content/profile";

export function Contact() {
  return (
    <section id="contact" className="section-band section-pad py-20 md:py-28">
      <div className="shell">
        <p className="font-display text-sm tracking-[0.18em] text-sage uppercase">
          Contact
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl tracking-tight text-ink md:text-4xl">
          Let&apos;s talk about agentic AI delivery in regulated life sciences.
        </h2>
        <div className="mt-12 flex flex-col gap-4 text-base text-ink-soft md:text-lg">
          <a className="prose-link w-fit" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="prose-link w-fit" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            {profile.phone}
          </a>
          <a
            className="prose-link w-fit"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="prose-link w-fit"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
