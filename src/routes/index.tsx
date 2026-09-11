import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Skills } from "@/components/site/Skills";
import { Education } from "@/components/site/Education";
import { FutureGoals } from "@/components/site/FutureGoals";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Anupam Gope — BTech AI/ML Student & Developer";
const description =
  "Portfolio of Anupam Gope, a BTech Artificial Intelligence & Machine Learning student at Sanskriti University exploring AI, coding and web development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-surface-0">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <FutureGoals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
