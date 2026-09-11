import { Cpu, Sparkles } from "lucide-react";
import { currentSkills, learningSkills } from "@/data/portfolio";
import { Reveal, Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="03 — Abilities"
      title="Skills & Learning"
      subtitle="An honest snapshot of what I can do today and what I'm working on next."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass-card h-full p-7">
            <div className="flex items-center gap-2.5">
              <Cpu className="size-4 text-primary" />
              <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Current Skills
              </h3>
            </div>
            <ul className="mt-6 space-y-4">
              {currentSkills.map((s) => (
                <li key={s.name} className="rounded-xl border border-border/70 bg-secondary/25 p-4">
                  <p className="text-sm font-medium text-foreground">{s.name}</p>
                  {s.note && <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass-card h-full p-7">
            <div className="flex items-center gap-2.5">
              <Sparkles className="size-4 text-primary" />
              <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Currently Learning
              </h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {learningSkills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-primary/60"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              This list grows as I learn. New skills get added here first, then move to current
              skills once I can build with them confidently.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
