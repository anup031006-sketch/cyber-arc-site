import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";
import portraitAsset from "@/assets/anupam-portrait.jpg.asset.json";
import { Reveal } from "./Section";

function AiCore() {
  const nodes = [
    [50, 12], [74, 22], [88, 46], [79, 72], [53, 88], [27, 78], [12, 54], [21, 27],
    [50, 31], [68, 47], [58, 67], [36, 65], [30, 43], [50, 50],
  ] as const;
  const links = [
    [0, 8], [1, 8], [1, 9], [2, 9], [3, 9], [3, 10], [4, 10], [5, 10], [5, 11],
    [6, 11], [6, 12], [7, 12], [7, 8], [8, 13], [9, 13], [10, 13], [11, 13], [12, 13],
  ] as const;

  return (
    <div className="ai-core" aria-hidden="true">
      <div className="ai-core-ring ai-core-ring-outer" />
      <div className="ai-core-ring ai-core-ring-inner" />
      <svg viewBox="0 0 100 100" className="absolute inset-[10%] size-[80%] overflow-visible">
        {links.map(([a, b], index) => (
          <line
            key={`${a}-${b}`}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            className="ai-link"
            style={{ animationDelay: `${index * -0.18}s` }}
          />
        ))}
        {nodes.map(([x, y], index) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={index === nodes.length - 1 ? 3.4 : 1.5}
            className="ai-node"
          />
        ))}
      </svg>
      <div className="ai-core-center" />
      <span className="ai-coordinate left-0 top-8">01 / NEURAL</span>
      <span className="ai-coordinate bottom-8 right-0">ML / ACTIVE</span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[min(900px,100svh)] items-center overflow-hidden border-b border-border/60">
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden />
      <div className="hero-scanline" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-24 pt-28 sm:px-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(330px,0.92fr)] lg:gap-8 lg:pt-24">
        <div className="relative min-w-0 border-l border-primary/25 pl-5 sm:pl-8">
          <span className="absolute -left-px top-0 h-20 w-px bg-primary" aria-hidden />
          <Reveal>
            <span className="inline-flex max-w-full items-center gap-2 border border-border bg-secondary/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs sm:tracking-[0.18em]">
              <Sparkles className="size-3.5 shrink-0 text-primary" />
              Sanskriti University · AI & ML
            </span>
          </Reveal>

          <Reveal delay={70}>
            <div className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary/80 sm:text-xs">
              <span className="status-dot" aria-hidden />
              Currently learning AI / ML
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-5 font-display text-[clamp(2.7rem,7vw,4.6rem)] font-bold leading-[0.98]">
              ANUPAM
              <br />
              <span className="text-gradient">GOPE</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-primary/90 sm:text-sm sm:tracking-[0.24em]">
              {profile.role}
            </p>
            <p className="mt-2 text-lg text-foreground/90 sm:text-xl">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {profile.heroDescription}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-col gap-3 min-[430px]:flex-row">
              <a href="#projects" className="hud-button hud-button-primary group">
                View Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="hud-button hud-button-secondary">Contact Me</a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180} className="mx-auto w-full max-w-[430px] lg:max-w-none">
          <AiCore />
        </Reveal>
      </div>

      <a href="#about" className="scroll-cue">
        <span>Scroll to explore</span>
        <ArrowDown className="size-3.5" />
      </a>
    </section>
  );
}
