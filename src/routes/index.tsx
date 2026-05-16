import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BarChart3,
  Brain,
  Briefcase,
  Database,
  Download,
  FileSpreadsheet,
  Github,
  GraduationCap,
  LineChart,
  PieChart,
  Sparkles,
  Code2,
  TableProperties,
  Zap,
} from "lucide-react";
import hivBg from "@/assets/hiv-stats-bg.jpg";
import { HivPrevalenceChart, RegionBarChart, SalesTrendChart } from "@/components/charts/MiniCharts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Teddy Mathabatha — Data Analyst & Aspiring Data Scientist" },
      { name: "description", content: "Portfolio of Teddy Mathabatha — turning raw data into decisions with SQL, Python, Power BI, Tableau, and Excel. Public-health analytics & business dashboards." },
      { property: "og:title", content: "Teddy Mathabatha — Data Analyst Portfolio" },
      { property: "og:description", content: "Case studies in HIV epidemiology, retail analytics, and dashboard engineering." },
    ],
  }),
  component: Index,
});

const skills = [
  { icon: Code2, name: "Python", detail: "pandas · numpy · matplotlib · scikit-learn" },
  { icon: Database, name: "SQL", detail: "Joins · CTEs · window functions" },
  { icon: BarChart3, name: "Power BI & Tableau", detail: "DAX · Power Query · interactive dashboards" },
  { icon: FileSpreadsheet, name: "Advanced Excel", detail: "Pivot · Slicers · Power Pivot" },
  { icon: Brain, name: "Statistics & ML", detail: "Regression · clustering · hypothesis testing" },
  { icon: LineChart, name: "Data Storytelling", detail: "Narratives · visual hierarchy · recommendations" },
  { icon: TableProperties, name: "Big Data Tools", detail: "Spark fundamentals · cloud data warehousing" },
  { icon: PieChart, name: "Data Quality & ETL", detail: "Cleaning · documentation · source mapping" },
];

const stats = [
  { value: "2,000+", label: "Records analyzed" },
  { value: "5", label: "Provinces covered" },
  { value: "30+", label: "Data attributes mapped" },
  { value: "12%", label: "Uplift identified" },
];

const process = [
  { step: "01", title: "Define", body: "Understand the question behind the question. Align on the decision the data must support." },
  { step: "02", title: "Acquire & clean", body: "Pull from sources, validate schemas, and handle missing, duplicate, or invalid records." },
  { step: "03", title: "Analyse", body: "Explore distributions, surface trends and outliers, and test hypotheses with the right statistic." },
  { step: "04", title: "Communicate", body: "Translate findings into dashboards, charts, and a clear written recommendation." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${hivBg})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background" aria-hidden="true" />
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="lg:col-span-7 space-y-7"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur text-xs uppercase tracking-widest text-muted-foreground">
              <Sparkles className="size-3 text-primary" />
              <span>Open to data analyst & data science roles</span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-hero text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] uppercase text-foreground"
            >
              <span className="block text-shimmer text-glow">Turning Raw Data</span>
              <span className="block text-gradient text-glow">Into Decisions</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              I'm <span className="text-foreground font-medium">Teddy Mathabatha</span> — a data analyst and aspiring data scientist
              from Johannesburg. I work across public-health and retail datasets, applying statistics,
              SQL, Python, and BI tools to ship dashboards and insights that actually change how teams act.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-[var(--shadow-glow)]"
              >
                <span>Explore case studies</span>
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="/teddy-mathabatha-cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-card/60 backdrop-blur hover:bg-surface transition"
              >
                <Download className="size-4" /> Download CV
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md hover:text-primary transition"
              >
                Get in touch <ArrowRight className="size-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Live mini dashboard preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-border bg-card/90 backdrop-blur-xl p-5 shadow-[var(--shadow-soft)]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Live preview</p>
                  <p className="font-display text-lg">HIV indicators · South Africa</p>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-mono">2018–2023</span>
              </div>
              <HivPrevalenceChart />
              <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-border">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Prevalence</p>
                  <p className="font-display text-lg text-foreground">14.0%</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">ART coverage</p>
                  <p className="font-display text-lg text-foreground">82%</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">YoY Δ ART</p>
                  <p className="font-display text-lg text-primary">+3 pp</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="font-display text-3xl md:text-4xl text-gradient">{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-3">Toolkit</p>
            <h2 className="font-display text-4xl md:text-5xl">The full data science stack</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            From raw extracts and ETL pipelines through statistical modelling, machine learning, and the dashboards executives actually open.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="group p-6 rounded-xl border border-border bg-surface/60 hover:bg-surface hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <s.icon className="size-7 text-primary mb-5" />
              <h3 className="font-display text-xl mb-1">{s.name}</h3>
              <p className="text-sm text-muted-foreground">{s.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-widest text-primary mb-3">How I work</p>
              <h2 className="font-display text-4xl md:text-5xl mb-6">A repeatable analytics process</h2>
              <p className="text-muted-foreground">
                Every project follows the same four steps — so the work is auditable, the recommendations
                are defensible, and the dashboards stay alive after handover.
              </p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
              {process.map((p) => (
                <div key={p.step} className="p-6 rounded-xl border border-border bg-card/70">
                  <div className="font-mono text-xs text-primary mb-3">{p.step}</div>
                  <h3 className="font-display text-xl mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured project teaser */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-widest text-primary mb-3">Featured case study</p>
            <h2 className="font-display text-4xl md:text-5xl mb-5">Pharmacy OTC sales — from messy CSVs to a regional growth plan.</h2>
            <p className="text-muted-foreground mb-6">
              Cleaned 2,000+ transaction records, modelled them in SQL, and surfaced a 12% uplift opportunity
              concentrated in two underserved regions. Final deliverable: a self-refreshing dashboard plus a
              one-page recommendation.
            </p>
            <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
              Read the case study <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Monthly OTC sales (R '000s)</p>
                  <p className="font-display text-base">Sales vs target · YTD</p>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-accent/10 text-accent font-mono">+12% MoM peak</span>
              </div>
              <SalesTrendChart />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 pb-16">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-surface to-background p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl mb-4">Have a dataset that needs answers?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              I take raw spreadsheets, messy exports, and tangled questions — and return the chart, the number, and the recommendation.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
              >
                Start a conversation <ArrowRight className="size-4" />
              </Link>
              <a
                href="/teddy-mathabatha-cv.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-border hover:border-primary hover:text-primary transition"
              >
                <Download className="size-4" /> Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
