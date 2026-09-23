import { profile } from "@/content/profile";

export function Beyond() {
  const { beyond } = profile;
  return (
    <section id="beyond" className="section-band section-pad py-20 md:py-28">
      <div className="shell overflow-hidden rounded-[2rem] bg-sage-deep px-8 py-14 md:px-14 md:py-20">
        <p className="font-display text-sm tracking-[0.18em] text-sand/75 uppercase">
          Beyond work
        </p>
        <h2 className="mt-4 font-display text-3xl tracking-tight text-sand md:text-5xl">
          {beyond.title}
        </h2>
        <p className="mt-3 font-display text-xl text-[#e4c49a] md:text-2xl">
          {beyond.tagline}
        </p>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-sand-muted md:text-lg">
          {beyond.blurb}
        </p>
        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm tracking-wide text-sand/80">
          {beyond.offerings.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
        <a
          href={profile.karuna}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex rounded-full bg-sand px-6 py-3 text-sm font-medium text-sage-deep transition hover:bg-mist"
        >
          Visit karuna-space.com
        </a>
      </div>
    </section>
  );
}
