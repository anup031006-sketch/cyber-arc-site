import { profile } from "@/data/portfolio";
import { Reveal, Section } from "./Section";

function NetworkVisual() {
  const nodes = [
    [20, 30],
    [20, 70],
    [50, 20],
    [50, 50],
    [50, 80],
    [80, 35],
    [80, 65],
  ] as const;
  const edges = [
    [0, 2],
    [0, 3],
    [1, 3],
    [1, 4],
    [2, 5],
    [3, 5],
    [3, 6],
    [4, 6],
  ] as const;

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-label="Abstract neural network graphic">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="currentColor"
          strokeWidth="0.4"
          className="text-primary"
          style={{ animation: `pulse-line 3.2s ease-in-out ${i * 0.25}s infinite` }}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="2.2"
          className="fill-primary"
          style={{ animation: `float-y 6s ease-in-out ${i * 0.4}s infinite` }}
        />
      ))}
    </svg>
  );
}

export function About() {
  return (
    <Section id="about" eyebrow="01 — Profile" title="About Me">
      <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.about}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="glass-card mx-auto aspect-square w-full max-w-xs p-8">
            <NetworkVisual />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
