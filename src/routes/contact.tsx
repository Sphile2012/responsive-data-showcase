import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Teddy Mathabatha" },
      { name: "description", content: "Get in touch with Teddy Mathabatha for data analysis opportunities." },
      { property: "og:title", content: "Contact Teddy Mathabatha" },
      { property: "og:description", content: "Email, phone, GitHub, and LinkedIn." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Mail, label: "Email", value: "teddymathabatha3@gmail.com", href: "mailto:teddymathabatha3@gmail.com" },
  { icon: Phone, label: "Phone", value: "+27 72 235 1747", href: "tel:+27722351747" },
  { icon: Github, label: "GitHub", value: "TeddyDataHub", href: "https://github.com/TeddyDataHub" },
  { icon: Linkedin, label: "LinkedIn", value: "teddy-mathabatha", href: "https://www.linkedin.com/in/teddy-mathabatha-3ba205223/" },
];

function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20">
      <p className="text-xs uppercase tracking-widest text-primary mb-3">Contact</p>
      <h1 className="font-display text-5xl md:text-6xl mb-6">Let's talk data.</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mb-4">
        Whether it's a dashboard, a quick query, or a longer engagement — I'd love to hear what
        you're working on.
      </p>
      <p className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
        <MapPin className="size-4 text-primary" /> Johannesburg, Gauteng, South Africa
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group p-6 rounded-xl border border-border bg-surface/60 hover:bg-surface hover:border-primary/40 transition-all hover:-translate-y-0.5"
          >
            <c.icon className="size-6 text-primary mb-3" />
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
            <p className="font-medium mt-1 group-hover:text-primary transition break-all">{c.value}</p>
          </a>
        ))}
      </div>

      <div className="mt-16 p-8 rounded-2xl border border-border bg-gradient-to-br from-surface to-background">
        <h2 className="font-display text-2xl mb-2">Prefer email?</h2>
        <p className="text-muted-foreground mb-5">Fastest way to reach me — I respond within a day.</p>
        <a
          href="mailto:teddymathabatha3@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
        >
          <Mail className="size-4" /> Send an email
        </a>
      </div>
    </div>
  );
}
