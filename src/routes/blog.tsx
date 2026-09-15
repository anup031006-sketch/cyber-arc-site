import { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { blogPosts } from "@/data/portfolio";

const title = "AI/ML Learning Blog — Anupam Gope";
const description = "Notes from Anupam Gope's AI/ML learning journey, projects and experiments.";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: BlogPage,
});

function BlogPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const post = selected === null ? null : blogPosts[selected];

  return (
    <div className="min-h-screen overflow-x-hidden bg-surface-0">
      <Navbar />
      <main className="mx-auto min-h-[calc(100vh-5rem)] w-full max-w-6xl px-5 pb-24 pt-32 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary/80">Learning log</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl md:text-6xl">AI/ML Journey & Project Notes</h1>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">Honest notes about what I am learning, what I am building and how each project helps me grow.</p>

        {post ? (
          <article className="mt-14 max-w-3xl">
            <button type="button" onClick={() => setSelected(null)} className="inline-flex items-center gap-2 text-sm text-primary transition-colors hover:text-foreground">
              <ArrowLeft className="size-4" /> All posts
            </button>
            <div className="mt-8 border-l border-primary/40 pl-5 sm:pl-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary/80">{post.category} · {post.date} · {post.readTime}</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{post.title}</h2>
              <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground">
                {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </article>
        ) : (
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {blogPosts.map((item, index) => (
              <article key={item.title} className="project-card flex h-full flex-col p-6 sm:p-8">
                <BookOpen className="size-5 text-primary" />
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-primary/75">{item.category} · {item.date}</p>
                <h2 className="mt-3 text-2xl font-semibold">{item.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
                <button type="button" onClick={() => setSelected(index)} className="mt-7 inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-[0.12em] text-primary transition-colors hover:text-foreground">
                  Read article <ArrowRight className="size-4" />
                </button>
              </article>
            ))}
          </div>
        )}
        <Link to="/" hash="projects" className="mt-14 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"><ArrowLeft className="size-4" /> Back to portfolio</Link>
      </main>
      <Footer />
    </div>
  );
}