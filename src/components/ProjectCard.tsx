import Link from "next/link";
import type { Project } from "@/content/projects";
import { ImpactTable } from "./ImpactTable";

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
      <div className="mt-6">
        <ImpactTable rows={project.impact} />
      </div>
    </article>
  );
}
