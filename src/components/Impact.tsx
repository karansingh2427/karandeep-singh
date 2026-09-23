import { profile } from "@/content/profile";

export function Impact() {
  return (
    <section id="work" className="section-band-alt section-pad py-20 md:py-28">
      <div className="shell">
        <p className="font-display text-sm tracking-[0.18em] text-sage uppercase">
          Selected impact
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl tracking-tight text-ink md:text-4xl">
          What changes for the department
        </h2>
        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {profile.impact.map((item) => (
            <li key={item.label} className="border-t border-line pt-6">
              <p className="font-display text-4xl tracking-tight text-sage-deep md:text-5xl">
                {item.metric}
              </p>
              <p className="mt-2 text-sm font-medium tracking-wide text-ink uppercase">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
