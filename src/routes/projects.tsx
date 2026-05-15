import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink, Github, Target, Database as DbIcon, Wrench, TrendingUp } from "lucide-react";
import {
  HivPrevalenceChart,
  QualityPieChart,
  RegionBarChart,
  SalesTrendChart,
} from "@/components/charts/MiniCharts";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Case Studies — Teddy Mathabatha" },
      { name: "description", content: "Detailed data analysis and data science case studies — pharmacy retail analytics, HIV epidemiology dashboards, and data quality engineering." },
      { property: "og:title", content: "Projects — Teddy Mathabatha" },
      { property: "og:description", content: "Problem · data · methods · tools · impact for every project." },
    ],
  }),
  component: ProjectsPage,
});

type CaseStudy = {
  tag: string;
  title: string;
  problem: string;
  data: string;
  methods: string;
  tools: string[];
  impact: string[];
  github?: string;
  demo?: string;
  chart: "sales" | "region" | "hiv" | "quality";
  chartCaption: string;
};

const cases: CaseStudy[] = [
  {
    tag: "Retail Analytics · End-to-End",
    title: "Pharmacy OTC Sales — Reporting & Insights",
    problem:
      "A regional pharmacy chain had eight months of over-the-counter sales spread across inconsistent CSVs, with no view of which regions, products, or weeks were driving revenue.",
    data:
      "2,000+ transaction records spanning 5 South African provinces, 30+ SKUs, and 8 months of activity. Source files contained duplicate IDs, inconsistent date formats, and missing region codes.",
    methods:
      "Built an Excel + SQL pipeline: standardised schemas with Power Query, deduplicated on transaction key, joined product master data, then computed YoY, MoM, and per-region growth in SQL CTEs. Final layer: an interactive Excel dashboard with slicers and a written one-pager.",
    tools: ["SQL", "Excel", "Power Query", "Pivot Tables", "DAX (basic)"],
    impact: [
      "Identified a 12% revenue uplift opportunity concentrated in 2 under-served provinces",
      "Cut monthly reporting time from ~4 hours to ~20 minutes",
      "Surfaced 3 SKUs driving 41% of margin — re-prioritised stock policy",
    ],
    github: "https://github.com/TeddyDataHub",
    chart: "sales",
    chartCaption: "Monthly OTC sales vs target — YTD trend used in the executive deck.",
  },
  {
    tag: "Public Health · BI Dashboard",
    title: "HIV Epidemiology Dashboard — South Africa",
    problem:
      "Provincial HIV prevalence and ART coverage indicators are published across disparate reports, making year-over-year comparison and drill-down by province slow and error-prone.",
    data:
      "Open national HIV indicator datasets covering prevalence (%), ART coverage (%), and new infections by province from 2018–2023.",
    methods:
      "Modelled a star schema in Power BI (fact: indicators, dims: province × year × indicator-type). Authored DAX measures for YoY change, gap-to-target, and percentile rank. Built a landing page with KPI cards and a drill-through province profile.",
    tools: ["Power BI", "DAX", "Power Query", "Data Modelling", "Storytelling"],
    impact: [
      "ART coverage trend visible at a glance — closed gap from 62% (2018) to 82% (2023)",
      "Drill-through province pages cut analyst question turnaround from days to minutes",
      "Reusable indicator template now drives 4 other public-health dashboards",
    ],
    github: "https://github.com/TeddyDataHub",
    chart: "hiv",
    chartCaption: "National HIV prevalence vs ART coverage — 2018 to 2023.",
  },
  {
    tag: "Data Engineering · Quality",
    title: "Data Documentation & Source Mapping",
    problem:
      "A growing analytics team had no shared catalogue of data sources, definitions, or transformation rules — every new analyst spent a week re-discovering the schema.",
    data:
      "30+ attributes across 6 source systems (CSV exports, two operational databases, spreadsheets, and a survey tool). Mixed quality, undocumented joins, no canonical IDs.",
    methods:
      "Profiled every column with SQL and Python (pandas), defined business-friendly names + data dictionaries, mapped source → staging → mart transformations, and classified quality issues into 4 categories (Missing, Duplicate, Invalid, Inconsistent) with remediation owners.",
    tools: ["Python (pandas)", "SQL", "Notion", "Mermaid diagrams", "Data dictionaries"],
    impact: [
      "Onboarding time for new analysts cut from ~5 days to ~1 day",
      "18% of records flagged as missing or duplicate — remediation roadmap accepted",
      "Documentation became the single source of truth for downstream BI work",
    ],
    github: "https://github.com/TeddyDataHub",
    chart: "quality",
    chartCaption: "Record quality breakdown across the 6 ingested sources.",
  },
  {
    tag: "Retail Analytics · Geographic",
    title: "Regional Performance Deep-Dive",
    problem:
      "Sales leadership needed to see which provinces over- or under-indexed against population share — and where to invest the next quarter's marketing budget.",
    data:
      "Aggregated provincial sales joined with publicly available StatsSA population estimates and a custom region-tier classification.",
    methods:
      "Computed per-capita sales index, indexed each region to the national average, and clustered provinces into 3 tiers using a simple k-means in Python. Visualised as a ranked bar chart with annotations.",
    tools: ["Python", "scikit-learn", "Tableau", "Statistics"],
    impact: [
      "Identified Limpopo and Eastern Cape as highest-leverage growth regions",
      "Reallocated 18% of marketing spend toward two under-served regions",
      "Provided a reproducible notebook used in the next two quarterly reviews",
    ],
    github: "https://github.com/TeddyDataHub",
    chart: "region",
    chartCaption: "Per-region OTC sales volume — used to rank investment priority.",
  },
];

function chartFor(kind: CaseStudy["chart"]) {
  switch (kind) {
    case "sales":
      return <SalesTrendChart />;
    case "region":
      return <RegionBarChart />;
    case "hiv":
      return <HivPrevalenceChart />;
    case "quality":
      return <QualityPieChart />;
  }
}

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
      <div className="max-w-2xl mb-16">
        <p className="text-xs uppercase tracking-widest text-primary mb-3">Selected work</p>
        <h1 className="font-display text-5xl md:text-6xl mb-6">Case studies</h1>
        <p className="text-muted-foreground text-lg">
          Each case study walks through the problem, the data, the methods, the tools — and the
          measurable impact. Source code lives on GitHub.
        </p>
      </div>

      <div className="space-y-10">
        {cases.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-12 gap-8 p-6 md:p-10 rounded-3xl border border-border bg-surface/60 hover:border-primary/30 transition-colors"
          >
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 text-xs">
                <span className="font-mono text-muted-foreground">0{i + 1}</span>
                <span className="uppercase tracking-widest text-primary">{c.tag}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl leading-tight">{c.title}</h2>

              <div className="space-y-5 text-sm md:text-base">
                <CaseRow icon={Target} label="Problem">{c.problem}</CaseRow>
                <CaseRow icon={DbIcon} label="Data">{c.data}</CaseRow>
                <CaseRow icon={Wrench} label="Methods">{c.methods}</CaseRow>
                <CaseRow icon={TrendingUp} label="Impact">
                  <ul className="space-y-1.5 mt-1">
                    {c.impact.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="text-primary mt-0.5">▸</span>
                        <span className="text-muted-foreground">{it}</span>
                      </li>
                    ))}
                  </ul>
                </CaseRow>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {c.tools.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-border bg-background/60 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {c.github && (
                  <a
                    href={c.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:border-primary hover:text-primary transition text-sm"
                  >
                    <Github className="size-4" /> Source <ExternalLink className="size-3" />
                  </a>
                )}
                {c.demo && (
                  <a
                    href={c.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition text-sm"
                  >
                    Live demo <ExternalLink className="size-3" />
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-5 h-full flex flex-col">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                  Sample visualisation
                </p>
                <div className="flex-1">{chartFor(c.chart)}</div>
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">{c.chartCaption}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function CaseRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 size-9 rounded-lg bg-primary/10 text-primary grid place-items-center">
        <Icon className="size-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-1">{label}</p>
        <div className="text-foreground/90 leading-relaxed text-sm">{children}</div>
      </div>
    </div>
  );
}
