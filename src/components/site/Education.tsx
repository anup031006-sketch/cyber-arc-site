import { education } from "@/data/portfolio";
import { Reveal, Section } from "./Section";

export function Education() {
  return (
    <Section id="education" eyebrow="04 — Background" title="Education">
      <ol className="relative ml-3 border-l border-border pl-8">
        {education.map((e, i) => (
          <li key={e.place} className="pb-10 last:pb-0">
            <Reveal delay={i * 120}>
              <span
                className={
                  "absolute -left-[7px] mt-2 block size-3.5 rounded-full border " +
                  (e.active
                    ? "border-primary bg-primary shadow-[0_0_20px_var(--glow)]"
                    : "border-border bg-secondary")
                }
                aria-hidden
              />
              <div className="glass-card p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary/85">
                  {e.status}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold">{e.place}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{e.title}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
