import { Instagram, Github, Linkedin } from "lucide-react";
import { socials } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-xs text-muted-foreground">© 2026 Anupam Gope. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Instagram className="size-4" />
          </a>
          {socials.github ? (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Github className="size-4" />
            </a>
          ) : (
            <span
              title="GitHub — coming soon"
              className="rounded-full border border-dashed border-border p-2.5 text-muted-foreground/50"
            >
              <Github className="size-4" />
            </span>
          )}
          {socials.linkedin ? (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Linkedin className="size-4" />
            </a>
          ) : (
            <span
              title="LinkedIn — coming soon"
              className="rounded-full border border-dashed border-border p-2.5 text-muted-foreground/50"
            >
              <Linkedin className="size-4" />
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}
