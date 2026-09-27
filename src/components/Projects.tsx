import { projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

const programmes = projects.filter(
  (project) => project.category === "Programme" || project.category === "Platform",
);
const agents = projects.filter(
  (project) => project.category === "AI agent" || project.category === "AI",
);

export function Projects() {
  return (
    <section id="projects">
      <div className="section-band section-pad py-20 md:py-28">
        <div className="shell">
          <p className="font-display text-sm tracking-[0.18em] text-sage uppercase">
            Programme and product
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl tracking-tight text-ink md:text-4xl">
            The work I lead
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
            The global digital label programme, the label-data platform, and
            the Pharma programme from the previous role.
          </p>
          <div className="mt-14">
            {programmes.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
      <div className="section-band-sage section-pad py-20 md:py-28">
        <div className="shell">
          <p className="font-display text-sm tracking-[0.18em] text-sage uppercase">
            Agentic AI
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl tracking-tight text-ink md:text-4xl">
            What I have put into production
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
            Two agents in regulatory workflows, and the checklist I run before
            the next one ships.
          </p>
          <div className="mt-14">
            {agents.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
