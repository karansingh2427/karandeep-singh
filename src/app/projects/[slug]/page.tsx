import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getProject, projects } from "@/content/projects";
import { ImpactTable } from "@/components/ImpactTable";

type Props = {
  params: Promise<{ slug: string }>;
};

function linkify(text: string) {
  const parts = text.split(/(agriguide\.eu)/g);
  return parts.map((part, index) =>
    part === "agriguide.eu" ? (
      <a
        key={index}
        href="https://www.agriguide.eu/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-line underline-offset-4 transition hover:text-sage-deep"
      >
        agriguide.eu
      </a>
    ) : (
      part
    ),
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <article className="section-band section-pad pb-24 pt-28 md:pt-36">
          <div className="shell">
            <Link
              href="/#projects"
              className="text-sm text-ink-soft transition hover:text-sage-deep"
            >
              ← All projects
            </Link>
            <p className="mt-10 text-xs font-medium tracking-[0.16em] text-copper uppercase">
              {project.category}
              <span className="mx-2 text-line">·</span>
              <span className="text-ink-soft/70 normal-case tracking-normal">
                {project.status}
              </span>
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl tracking-tight text-ink md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {project.tagline}
            </p>

            <div className="mt-12">
              <ImpactTable rows={project.impact} />
            </div>

            {(project.mission || project.vision) && (
              <div className="mt-14 grid gap-12 md:grid-cols-2">
                {project.mission && (
                  <section>
                    <h2 className="font-display text-2xl text-ink">Mission</h2>
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
                      {project.mission}
                    </p>
                  </section>
                )}
                {project.vision && (
                  <section>
                    <h2 className="font-display text-2xl text-ink">Vision</h2>
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
                      {project.vision}
                    </p>
                  </section>
                )}
              </div>
            )}

            {project.valueEnablers && project.valueEnablers.length > 0 && (
              <section className="mt-14">
                <h2 className="font-display text-2xl text-ink">Value enablers</h2>
                <dl className="mt-6 divide-y divide-line border-t border-line">
                  {project.valueEnablers.map((item) => (
                    <div key={item.title} className="grid gap-2 py-5 md:grid-cols-[16rem_1fr] md:gap-8">
                      <dt className="font-medium text-ink">{item.title}</dt>
                      <dd className="text-sm leading-relaxed text-ink-soft md:text-base">
                        {item.detail}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            <div className="mt-14 grid gap-12 md:grid-cols-2">
              <section>
                <h2 className="font-display text-2xl text-ink">Problem</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
                  {project.problem}
                </p>
              </section>
              <section>
                <h2 className="font-display text-2xl text-ink">Value</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
                  {project.value}
                </p>
              </section>
              <section>
                <h2 className="font-display text-2xl text-ink">How I built it</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
                  {project.solution}
                </p>
              </section>
              <section>
                <h2 className="font-display text-2xl text-ink">Deployment</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
                  {linkify(project.deployment)}
                </p>
              </section>
            </div>

            <section className="mt-14">
              <h2 className="font-display text-2xl text-ink">Stack</h2>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink-soft">
                {project.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>

            {project.links.length > 0 && (
              <section className="mt-10 flex flex-wrap gap-4">
                {project.links.map((link) => {
                  const external = /^https?:\/\//i.test(link.href);
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-sage hover:text-sage-deep"
                    >
                      {link.label}
                    </a>
                  );
                })}
              </section>
            )}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
