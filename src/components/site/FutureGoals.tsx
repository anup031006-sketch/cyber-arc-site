import { ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal, Section } from "./Section";

const steps = ["Learning", "Building", "Improving"];

export function FutureGoals() {
  return (
    <Section id="whats-next" eyebrow="05 — Ahead" title="What's Next?">
      <Reveal>
        <div className="glass-card p-8 sm:p-10">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {profile.whatsNext}
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            {steps.map((s, i) => (
              <div key={s} className="flex flex-1 items-center gap-4">
                <div
                  className="flex-1 rounded-xl border border-primary/25 bg-primary/10 px-5 py-4 text-center text-sm tracking-wide text-foreground"
                  style={{ animation: `float-y 5s ease-in-out ${i * 0.6}s infinite` }}
                >
                  {s}
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden size-4 shrink-0 text-primary sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
