import { useState } from "react";
import { Instagram, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { z } from "zod";
import { contact, socials } from "@/data/portfolio";
import { Reveal, Section } from "./Section";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(1000, "Message is too long"),
});

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const configured = Boolean(contact.formEndpoint);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    if (!configured) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-border bg-secondary/25 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60";

  return (
    <Section
      id="contact"
      eyebrow="06 — Contact"
      title="Let's Connect"
      subtitle="Have an idea, project or opportunity? I'd love to connect."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <form onSubmit={onSubmit} noValidate className="glass-card space-y-4 p-7">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                className={field}
                value={values.name}
                maxLength={100}
                placeholder="Your name"
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
              {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                className={field}
                value={values.email}
                maxLength={255}
                placeholder="you@example.com"
                onChange={(e) => setValues({ ...values, email: e.target.value })}
              />
              {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className={field + " resize-y"}
                value={values.message}
                maxLength={1000}
                placeholder="Tell me about your idea..."
                onChange={(e) => setValues({ ...values, message: e.target.value })}
              />
              {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_35px_-8px_var(--glow)] disabled:opacity-60"
            >
              {status === "sending" ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Send className="size-4" />
              )}
              Send Message
            </button>

            {status === "sent" && (
              <p className="text-xs text-primary">Thanks — your message was sent.</p>
            )}
            {status === "error" && !configured && (
              <p className="text-xs text-muted-foreground">
                Your details are valid, but message sending isn&apos;t connected yet. Add a form
                endpoint (Formspree, EmailJS or similar) to start receiving messages.
                {contact.email && (
                  <>
                    {" "}
                    In the meantime, email{" "}
                    <a className="text-primary underline" href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                    .
                  </>
                )}
              </p>
            )}
            {status === "error" && configured && (
              <p className="text-xs text-destructive">
                Something went wrong sending your message. Please try again.
              </p>
            )}
          </form>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass-card h-full p-7">
            <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Elsewhere
            </h3>
            <div className="mt-6 space-y-3">
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border/70 bg-secondary/25 px-4 py-3.5 text-sm transition-colors hover:border-primary/60"
              >
                <Instagram className="size-4 text-primary" />
                <span>@natty.anup_03</span>
              </a>

              {socials.github ? (
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border/70 bg-secondary/25 px-4 py-3.5 text-sm transition-colors hover:border-primary/60"
                >
                  <Github className="size-4 text-primary" />
                  <span>GitHub</span>
                </a>
              ) : (
                <div className="flex items-center gap-3 rounded-xl border border-dashed border-border px-4 py-3.5 text-sm text-muted-foreground">
                  <Github className="size-4" />
                  <span>GitHub — coming soon</span>
                </div>
              )}

              {socials.linkedin ? (
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border/70 bg-secondary/25 px-4 py-3.5 text-sm transition-colors hover:border-primary/60"
                >
                  <Linkedin className="size-4 text-primary" />
                  <span>LinkedIn</span>
                </a>
              ) : (
                <div className="flex items-center gap-3 rounded-xl border border-dashed border-border px-4 py-3.5 text-sm text-muted-foreground">
                  <Linkedin className="size-4" />
                  <span>LinkedIn — coming soon</span>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
