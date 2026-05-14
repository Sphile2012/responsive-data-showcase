import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Database, FileSpreadsheet, LineChart, Sparkles } from "lucide-react";
import heroImg from "@/assets/teddy-portrait.jpg";
import dataBg from "@/assets/data-bg.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const skills = [
  { icon: FileSpreadsheet, name: "Advanced Excel", detail: "Pivot Tables · VLOOKUP · Dashboards" },
  { icon: BarChart3, name: "Power BI", detail: "DAX · Power Query · Data Modeling" },
  { icon: Database, name: "SQL", detail: "Joins · Aggregations · Subqueries" },
  { icon: LineChart, name: "Trend Analysis", detail: "Patterns · Outliers · Forecasting" },
];

const stats = [
  { value: "2,000+", label: "Records analyzed" },
  { value: "5", label: "Regions covered" },
  { value: "30+", label: "Data attributes mapped" },
  { value: "4", label: "Quality categories solved" },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${dataBg})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" aria-hidden="true" />
        <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/50 text-xs uppercase tracking-widest text-muted-foreground">
              <Sparkles className="size-3 text-primary" /> Available for opportunities
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
              Data, made <em className="text-gradient not-italic">decision-ready</em>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              I'm Teddy Mathabatha — a data analyst from Johannesburg. I clean, query, and visualize
              data so teams can act on it. Excel, Power BI, and SQL are my daily tools.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-[var(--shadow-glow)]"
              >
                See my work <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border hover:bg-surface transition"
              >
                Get in touch
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl opacity-50" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-soft)] aspect-[4/5] max-w-md mx-auto">
              <img
                src={heroImg}
                alt="Portrait of Teddy Mathabatha, data analyst"
                width={900}
                height={1125}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl md:text-4xl text-gradient">{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-3">Toolkit</p>
            <h2 className="font-display text-4xl md:text-5xl">What I work with</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A focused stack for collecting, modeling, and communicating data — sharpened on real projects, not slideware.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <div
              key={s.name}
              className="group p-6 rounded-xl border border-border bg-surface/60 hover:bg-surface hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <s.icon className="size-7 text-primary mb-5" />
              <h3 className="font-display text-xl mb-1">{s.name}</h3>
              <p className="text-sm text-muted-foreground">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 pb-8">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-surface to-background p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl mb-4">Have a dataset that needs answers?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              I take raw spreadsheets, messy exports, and tangled questions — and return the chart, the number, and the recommendation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
            >
              Start a conversation <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
