import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal, Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="02 — Work"
      title="Featured Projects"
      subtitle="Things I've built while learning and experimenting with technology."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <article className="glass-card group flex h-full flex-col overflow-hidden hover:-translate-y-1">
              <div className="relative h-44 overflow-hidden border-b border-border/60 bg-secondary/30 sm:h-52">
                <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
                <div
                  className="glow-orb left-1/3 top-1/3 size-40 bg-primary/30 transition-opacity duration-500 group-hover:opacity-70"
                  aria-hidden
                />
                <span className="absolute bottom-4 left-5 font-display text-xl text-foreground/70 sm:text-2xl">
                  {p.title}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_-8px_var(--glow)]"
                    >
                      View Project
                      <ArrowUpRight className="size-4" />
                    </a>
                  ) : (
                    <span className="rounded-full border border-dashed border-border px-4 py-2 text-xs text-muted-foreground">
                      Link coming soon
                    </span>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/60"
                    >
                      <Github className="size-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
