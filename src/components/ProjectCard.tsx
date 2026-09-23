import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group border-t border-line py-10 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-copper uppercase">
            {project.category}
            <span className="mx-2 text-line">·</span>
            <span className="text-ink-soft/70 normal-case tracking-normal">
              {project.status}
            </span>
          </p>
          <h3 className="mt-3 font-display text-2xl tracking-tight text-ink transition-colors group-hover:text-sage-deep md:text-3xl">
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="text-sm font-medium text-sage-deep transition hover:text-copper"
        >
          Read more
        </Link>
      </div>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
        {project.tagline}
      </p>
      <dl className="mt-8 grid gap-6 sm:grid-cols-3">
        <div>
          <dt className="text-xs font-medium tracking-wide text-ink/50 uppercase">
            Problem
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
            {project.problem}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium tracking-wide text-ink/50 uppercase">
            Value
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
            {project.value}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-medium tracking-wide text-ink/50 uppercase">
            Deployment
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
            {project.deployment}
          </dd>
        </div>
      </dl>
      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
        {project.metrics.map((m) => (
          <li key={m.label} className="text-sm text-ink-soft">
            <span className="font-display text-lg text-sage-deep">
              {m.value}
            </span>{" "}
            <span className="text-ink/45">{m.label}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
