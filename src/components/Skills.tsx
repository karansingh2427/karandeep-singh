import { profile } from "@/content/profile";

export function Skills() {
  return (
    <section id="skills" className="section-band-alt section-pad py-20 md:py-28">
      <div className="shell">
        <p className="font-display text-sm tracking-[0.18em] text-sage uppercase">
          Skills
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl tracking-tight text-ink md:text-4xl">
          What I am accountable for
        </h2>
        <ul className="mt-12 space-y-0">
          {profile.featuredSkills.map((skill, i) => (
            <li
              key={skill.name}
              className="grid gap-2 border-t border-line py-6 md:grid-cols-[minmax(0,280px)_1fr] md:gap-10"
            >
              <p className="font-display text-xl text-ink">
                <span className="mr-3 text-sm text-copper">{i + 1}</span>
                {skill.name}
              </p>
              <p className="text-sm leading-relaxed text-ink-soft md:pt-1">
                {skill.proof}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {profile.capabilities.map((cap) => (
            <div key={cap.title}>
              <h3 className="font-display text-lg text-ink">{cap.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                {cap.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
