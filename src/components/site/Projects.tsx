import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import quantumScreenshot from "@/assets/quantum-vibe-check.png.asset.json";
import travelScreenshot from "@/assets/travel-with-anup.jpg";
import { Reveal, Section } from "./Section";

export function Projects() {
  const screenshots: Record<string, string | undefined> = {
    "Quantum Vibe Check": quantumScreenshot.url,
    "Travel with Anup": travelScreenshot,
  };

  return (
    <Section
      id="projects"
      eyebrow="02 — Work"
      title="Featured Projects"
      subtitle="Things I've built while learning and experimenting with technology."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100} className="h-full">
            <article className="project-card group flex h-full flex-col overflow-hidden">
              <div className={`project-preview project-preview-${p.visual}`}>
                {screenshots[p.title] ? (
                  <img
                    src={screenshots[p.title]}
                    alt={`${p.title} website preview`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                ) : p.visual === "campus" ? (
                  <>
                    <div className="project-grid" aria-hidden />
                    <div className="campus-chart campus-chart-a" />
                    <div className="campus-chart campus-chart-b" />
                    <div className="campus-chart campus-chart-c" />
                    <div className="campus-panel">
                      <span>Campus overview</span>
                      <strong>DATA / 01</strong>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="project-grid" aria-hidden />
                    <div className="quantum-ring quantum-ring-a" />
                    <div className="quantum-ring quantum-ring-b" />
                    <div className="quantum-core" />
                    <span className="quantum-label">VIBE / SIGNAL</span>
                  </>
                )}
                <span className="project-index" aria-hidden>0{i + 1}</span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold sm:text-2xl">{p.title}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary/65">Live project</span>
                </div>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-border bg-secondary/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hud-button hud-button-primary group/link px-4 py-2.5 text-xs"
                    >
                      View Project
                      <ArrowUpRight className="size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  ) : (
                    <span className="rounded-full border border-dashed border-border px-4 py-2 text-xs text-muted-foreground">
                      Link coming soon
                    </span>
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
