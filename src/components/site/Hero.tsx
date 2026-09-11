import { ArrowRight, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Section";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden />
      <div
        className="glow-orb left-[-10%] top-[8%] size-[46vw] max-w-[520px] bg-primary/25"
        aria-hidden
      />
      <div
        className="glow-orb right-[-12%] bottom-[0%] size-[40vw] max-w-[460px] bg-chart-2/20"
        style={{ animationDelay: "-6s" }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Sanskriti University · AI & ML
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 font-display text-[clamp(2.4rem,9vw,5.5rem)] font-semibold leading-[1.02]">
            ANUPAM
            <br />
            <span className="text-gradient">GOPE</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-5 font-mono text-sm uppercase tracking-[0.24em] text-primary/90 sm:text-base">
            {profile.role}
          </p>
          <p className="mt-2 text-lg text-foreground/90 sm:text-2xl">{profile.tagline}</p>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.heroDescription}
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_40px_-8px_var(--glow)]"
            >
              View My Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:bg-secondary/50"
            >
              Contact Me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
