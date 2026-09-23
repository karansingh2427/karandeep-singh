import { profile } from "@/content/profile";

export function Experience() {
  return (
    <section id="experience" className="section-band section-pad py-20 md:py-28">
      <div className="shell">
        <p className="font-display text-sm tracking-[0.18em] text-sage uppercase">
          Experience
        </p>
        <h2 className="mt-4 font-display text-3xl tracking-tight text-ink md:text-4xl">
          Path
        </h2>
        <ol className="mt-14 space-y-14">
          {profile.experience.map((job) => (
            <li
              key={`${job.org}-${job.period}`}
              className="grid gap-6 border-t border-line pt-8 md:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="text-sm text-ink-soft">{job.period}</p>
                <p className="mt-2 font-display text-xl text-ink">{job.org}</p>
                <p className="mt-1 text-sm text-ink-soft/70">{job.place}</p>
              </div>
              <div>
                <h3 className="text-base font-medium text-ink md:text-lg">
                  {job.role}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
                  {job.bullets.map((b) => (
                    <li key={b} className="pl-4 relative before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-sage">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl text-ink">Education</h3>
            <ul className="mt-4 space-y-4">
              {profile.education.map((ed) => (
                <li key={ed.title}>
                  <p className="font-medium text-ink">{ed.title}</p>
                  <p className="mt-1 text-sm text-ink-soft">{ed.detail}</p>
                </li>
              ))}
            </ul>
            <h3 className="mt-10 font-display text-xl text-ink">Publication</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {profile.publication}
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-ink">Training & certifications</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              {profile.training.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <h3 className="mt-10 font-display text-xl text-ink">Honors</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              {profile.honors.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
