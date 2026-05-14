import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Teddy Mathabatha" },
      { name: "description", content: "Data analysis projects: pharmacy sales analytics, data documentation, Power BI dashboards." },
      { property: "og:title", content: "Projects — Teddy Mathabatha" },
      { property: "og:description", content: "Hand-picked data analysis case studies." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    tag: "End-to-End Analysis",
    title: "Pharmacy OTC Sales — Reporting & Insights",
    summary:
      "Cleaned 2,000+ pharmacy sales records across 5 regions, surfaced peak periods and top performers, and packaged it as an interactive Excel dashboard with SQL-backed ad-hoc analysis.",
    stack: ["Excel", "SQL", "Pivot Tables", "Documentation"],
    href: "https://github.com/TeddyDataHub",
  },
  {
    tag: "Data Quality",
    title: "Data Documentation & Source Mapping",
    summary:
      "Catalogued 30+ attributes across disparate sources, defined transformation rules, and surfaced 4 categories of quality issues with concrete remediation recommendations.",
    stack: ["Documentation", "Data Quality", "Mapping"],
    href: "https://github.com/TeddyDataHub",
  },
  {
    tag: "In Progress · 2026",
    title: "Power BI Dashboard Suite",
    summary:
      "Rebuilding Excel reports as self-refreshing Power BI dashboards — exercising data modeling, DAX measures, and Power Query transformations.",
    stack: ["Power BI", "DAX", "Power Query"],
    href: "https://github.com/TeddyDataHub",
  },
];

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
      <div className="max-w-2xl mb-16">
        <p className="text-xs uppercase tracking-widest text-primary mb-3">Selected work</p>
        <h1 className="font-display text-5xl md:text-6xl mb-6">Projects</h1>
        <p className="text-muted-foreground text-lg">
          Each project ships with documentation, queries, and a dashboard or summary. Source on GitHub.
        </p>
      </div>

      <div className="grid gap-6 md:gap-8">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="group relative grid md:grid-cols-12 gap-6 p-6 md:p-10 rounded-2xl border border-border bg-surface/60 hover:bg-surface hover:border-primary/40 transition-all"
          >
            <div className="md:col-span-2 font-mono text-sm text-muted-foreground">
              0{i + 1}
              <div className="mt-2 text-xs uppercase tracking-widest text-primary">{p.tag}</div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h2 className="font-display text-2xl md:text-3xl group-hover:text-gradient transition">
                {p.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{p.summary}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full border border-border bg-background/60 text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-3 flex md:justify-end items-start">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:border-primary hover:text-primary transition text-sm"
              >
                <Github className="size-4" /> View
                <ExternalLink className="size-3" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
