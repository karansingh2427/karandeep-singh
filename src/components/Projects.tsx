import { projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="section-band section-pad py-20 md:py-28">
      <div className="shell">
        <p className="font-display text-sm tracking-[0.18em] text-sage uppercase">
          Projects
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl tracking-tight text-ink md:text-4xl">
          Agentic systems shipped — and used
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
          Recent work is production agentic AI in R&amp;D and regulatory
          sciences: extract → QC → adopt — plus platforms and programmes behind
          the delivery.
        </p>
        <div className="mt-14">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
