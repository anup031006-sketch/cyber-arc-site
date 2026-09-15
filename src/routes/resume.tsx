import { BriefcaseBusiness, Download, GraduationCap, Sparkles } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { currentSkills, education, learningSkills, profile, projects, socials } from "@/data/portfolio";

const title = "Resume — Anupam Gope, AI/ML Student";
const description = "Resume of Anupam Gope, a BTech Artificial Intelligence and Machine Learning student at Sanskriti University.";

export const Route = createFileRoute("/resume")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "profile" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-surface-0">
      <div className="print:hidden"><Navbar /></div>
      <main className="resume-page mx-auto w-full max-w-5xl px-5 pb-24 pt-28 sm:px-8 print:max-w-none print:p-0">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
          <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-primary">← Back to portfolio</Link>
          <button type="button" onClick={() => window.print()} className="hud-button hud-button-primary"><Download className="size-4" /> Save as PDF</button>
        </div>

        <article className="border border-border bg-card/60 p-6 sm:p-10 print:border-0 print:bg-transparent print:p-0">
          <header className="border-b border-border pb-8">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">BTech AI/ML Student</p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{profile.name}</h1>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{profile.about}</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a href="mailto:anup031006@gmail.com" className="text-primary">anup031006@gmail.com</a>
              <a href={socials.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">github.com/anup031006-sketch</a>
            </div>
          </header>

          <div className="mt-8 grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-9">
              <ResumeSection icon={<Sparkles className="size-4" />} title="Skills">
                <ul className="space-y-3">{currentSkills.map((skill) => <li key={skill.name}><strong className="block text-sm font-medium">{skill.name}</strong><span className="text-xs text-muted-foreground">{skill.note}</span></li>)}</ul>
              </ResumeSection>
              <ResumeSection icon={<Sparkles className="size-4" />} title="Currently Learning">
                <ul className="flex flex-wrap gap-2">{learningSkills.map((skill) => <li key={skill} className="border border-border px-3 py-1.5 text-xs text-muted-foreground">{skill}</li>)}</ul>
              </ResumeSection>
            </div>

            <div className="space-y-9">
              <ResumeSection icon={<GraduationCap className="size-4" />} title="Education">
                <div className="space-y-5">{education.map((item) => <div key={item.place}><p className="text-sm font-semibold">{item.place}</p><p className="mt-1 text-sm text-muted-foreground">{item.title}</p><p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">{item.status}</p></div>)}</div>
              </ResumeSection>
              <ResumeSection icon={<BriefcaseBusiness className="size-4" />} title="Projects">
                <div className="space-y-5">{projects.map((project) => <div key={project.title}><a href={project.url} target="_blank" rel="noreferrer" className="text-sm font-semibold hover:text-primary">{project.title}</a><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p><p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-primary/80">{project.tags.join(" · ")}</p></div>)}</div>
              </ResumeSection>
            </div>
          </div>
        </article>
      </main>
      <div className="print:hidden"><Footer /></div>
    </div>
  );
}

function ResumeSection({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return <section><div className="mb-4 flex items-center gap-2 text-primary">{icon}<h2 className="font-mono text-xs font-medium uppercase tracking-[0.18em]">{title}</h2></div>{children}</section>;
}