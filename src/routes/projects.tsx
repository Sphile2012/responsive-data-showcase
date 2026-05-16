import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink, Github, Target, Database as DbIcon, Wrench, TrendingUp, BarChart2, Users, Layers, Activity } from "lucide-react";
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
  toolColors: string[];
  impact: string[];
  github?: string;
  demo?: string;
  chart: "sales" | "region" | "hiv" | "quality";
  chartCaption: string;
  accentColor: string;
};

const cases: CaseStudy[] = [
  {
    tag: "Retail Analytics · End-to-End",
    title: "Pharmacy OTC Sales — Reporting & Insights",
    problem: "A regional pharmacy chain had eight months of over-the-counter sales spread across inconsistent CSVs, with no view of which regions, products, or weeks were driving revenue.",
    data: "2,000+ transaction records spanning 5 South African provinces, 30+ SKUs, and 8 months of activity. Source files contained duplicate IDs, inconsistent date formats, and missing region codes.",
    methods: "Built an Excel + SQL pipeline: standardised schemas with Power Query, deduplicated on transaction key, joined product master data, then computed YoY, MoM, and per-region growth in SQL CTEs.",
    tools: ["SQL", "Excel", "Power Query", "Pivot Tables", "DAX (basic)"],
    toolColors: ["#22d3ee", "#a78bfa", "#34d399", "#fbbf24", "#f472b6"],
    impact: [
      "Identified a 12% revenue uplift opportunity concentrated in 2 under-served provinces",
      "Cut monthly reporting time from ~4 hours to ~20 minutes",
      "Surfaced 3 SKUs driving 41% of margin — re-prioritised stock policy",
    ],
    github: "https://github.com/TeddyDataHub",
    chart: "sales",
    chartCaption: "Monthly OTC sales vs target — YTD trend used in the executive deck.",
    accentColor: "#22d3ee",
  },
  {
    tag: "Public Health · BI Dashboard",
    title: "HIV Epidemiology Dashboard — South Africa",
    problem: "Provincial HIV prevalence and ART coverage indicators are published across disparate reports, making year-over-year comparison and drill-down by province slow and error-prone.",
    data: "Open national HIV indicator datasets covering prevalence (%), ART coverage (%), and new infections by province from 2018–2023.",
    methods: "Modelled a star schema in Power BI (fact: indicators, dims: province × year × indicator-type). Authored DAX measures for YoY change, gap-to-target, and percentile rank.",
    tools: ["Power BI", "DAX", "Power Query", "Data Modelling", "Storytelling"],
    toolColors: ["#a78bfa", "#22d3ee", "#f472b6", "#34d399", "#fbbf24"],
    impact: [
      "ART coverage trend visible at a glance — closed gap from 62% (2018) to 82% (2023)",
      "Drill-through province pages cut analyst question turnaround from days to minutes",
      "Reusable indicator template now drives 4 other public-health dashboards",
    ],
    github: "https://github.com/TeddyDataHub",
    chart: "hiv",
    chartCaption: "National HIV prevalence vs ART coverage — 2018 to 2023.",
    accentColor: "#a78bfa",
  },
  {
    tag: "Data Engineering · Quality",
    title: "Data Documentation & Source Mapping",
    problem: "A growing analytics team had no shared catalogue of data sources, definitions, or transformation rules — every new analyst spent a week re-discovering the schema.",
    data: "30+ attributes across 6 source systems (CSV exports, two operational databases, spreadsheets, and a survey tool). Mixed quality, undocumented joins, no canonical IDs.",
    methods: "Profiled every column with SQL and Python (pandas), defined business-friendly names + data dictionaries, mapped source → staging → mart transformations, and classified quality issues.",
    tools: ["Python (pandas)", "SQL", "Notion", "Mermaid diagrams", "Data dictionaries"],
    toolColors: ["#34d399", "#22d3ee", "#a78bfa", "#fbbf24", "#f472b6"],
    impact: [
      "Onboarding time for new analysts cut from ~5 days to ~1 day",
      "18% of records flagged as missing or duplicate — remediation roadmap accepted",
      "Documentation became the single source of truth for downstream BI work",
    ],
    github: "https://github.com/TeddyDataHub",
    chart: "quality",
    chartCaption: "Record quality breakdown across the 6 ingested sources.",
    accentColor: "#34d399",
  },
  {
    tag: "Retail Analytics · Geographic",
    title: "Regional Performance Deep-Dive",
    problem: "Sales leadership needed to see which provinces over- or under-indexed against population share — and where to invest the next quarter's marketing budget.",
    data: "Aggregated provincial sales joined with publicly available StatsSA population estimates and a custom region-tier classification.",
    methods: "Computed per-capita sales index, indexed each region to the national average, and clustered provinces into 3 tiers using k-means in Python. Visualised as a ranked bar chart with annotations.",
    tools: ["Python", "scikit-learn", "Tableau", "Statistics"],
    toolColors: ["#fbbf24", "#22d3ee", "#f472b6", "#a78bfa"],
    impact: [
      "Identified Limpopo and Eastern Cape as highest-leverage growth regions",
      "Reallocated 18% of marketing spend toward two under-served regions",
      "Provided a reproducible notebook used in the next two quarterly reviews",
    ],
    github: "https://github.com/TeddyDataHub",
    chart: "region",
    chartCaption: "Per-region OTC sales volume — used to rank investment priority.",
    accentColor: "#fbbf24",
  },
];

const portfolioMetrics = [
  { icon: Layers,    value: "4",      label: "Case Studies",       color: "#22d3ee" },
  { icon: DbIcon,    value: "2,000+", label: "Records Analysed",   color: "#a78bfa" },
  { icon: Users,     value: "5",      label: "Provinces Covered",  color: "#34d399" },
  { icon: BarChart2, value: "82%",    label: "ART Coverage Peak",  color: "#fbbf24" },
];

function chartFor(kind: CaseStudy["chart"]) {
  switch (kind) {
    case "sales":   return <SalesTrendChart />;
    case "region":  return <RegionBarChart />;
    case "hiv":     return <HivPrevalenceChart />;
    case "quality": return <QualityPieChart />;
  }
}

function ProjectsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ── */}
      <div className="relative border-b overflow-hidden" style={{ borderColor: "rgba(34,211,238,0.1)" }}>
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full blur-[120px] opacity-10"
          style={{ background: "radial-gradient(circle, #22d3ee, transparent 70%)" }} />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-10"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)" }} />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left: copy */}
            <motion.div
              className="lg:col-span-6 space-y-6"
              initial={{ opacity: 1, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.25em]" style={{ color: "#22d3ee" }}>Selected Work</p>
              <h1
                className="font-hero uppercase leading-none"
                style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", background: "linear-gradient(135deg, #00e5ff, #7c3aed, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Case Studies
              </h1>
              <p className="text-base lg:text-lg leading-relaxed" style={{ color: "#94a3b8", fontFamily: "'Inter', sans-serif" }}>
                Each case study walks through the problem, the data, the methods, the tools — and the measurable impact delivered. Source code lives on GitHub.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["SQL", "Python", "Power BI", "Tableau", "Excel"].map((tool, i) => {
                  const colors = ["#22d3ee", "#a78bfa", "#f472b6", "#34d399", "#fbbf24"];
                  return (
                    <span key={tool} className="font-mono text-xs px-3 py-1.5 rounded-full"
                      style={{ color: colors[i], background: `${colors[i]}10`, border: `1px solid ${colors[i]}25` }}>
                      {tool}
                    </span>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: portfolio metrics card */}
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 1, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{
                  background: "rgba(10,13,32,0.85)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(34,211,238,0.2)",
                  boxShadow: "0 0 0 1px rgba(34,211,238,0.06), 0 8px 64px rgba(0,0,0,0.6), 0 0 60px rgba(34,211,238,0.06)",
                }}
              >
                {/* Card header */}
                <div className="flex items-center gap-2 mb-6 pb-5" style={{ borderBottom: "1px solid rgba(34,211,238,0.1)" }}>
                  <div className="flex gap-1.5">
                    <span className="size-3 rounded-full" style={{ background: "#ff5f57" }} />
                    <span className="size-3 rounded-full" style={{ background: "#febc2e" }} />
                    <span className="size-3 rounded-full" style={{ background: "#28c840" }} />
                  </div>
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-widest" style={{ color: "#64748b" }}>portfolio_metrics.json</span>
                  <span className="ml-auto flex items-center gap-1.5 text-[10px] font-mono" style={{ color: "#34d399" }}>
                    <Activity className="size-3 animate-pulse" /> 4 projects
                  </span>
                </div>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {portfolioMetrics.map((m) => (
                    <div key={m.label}
                      className="p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                      style={{ background: `${m.color}08`, border: `1px solid ${m.color}18` }}
                    >
                      <m.icon className="size-4 mb-2" style={{ color: m.color }} />
                      <p className="font-orbitron font-bold text-lg" style={{ color: m.color }}>{m.value}</p>
                      <p className="text-xs mt-0.5" style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}>{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Project list */}
                <div className="space-y-2">
                  {cases.map((c, i) => (
                    <div key={c.title}
                      className="flex items-center gap-3 py-2.5 px-3 rounded-lg transition-colors"
                      style={{ background: "rgba(255,255,255,0.02)" }}
                    >
                      <span className="font-orbitron text-xs font-bold w-6" style={{ color: c.accentColor }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs flex-1 truncate" style={{ color: "#94a3b8", fontFamily: "'Inter', sans-serif" }}>{c.title}</span>
                      <span className="size-1.5 rounded-full shrink-0" style={{ background: c.accentColor, boxShadow: `0 0 6px ${c.accentColor}` }} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Case studies ── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 space-y-10">
        {cases.map((c, i) => (
          <motion.article
            key={c.title}
            initial={{ opacity: 1, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group grid lg:grid-cols-12 gap-8 p-7 md:p-10 rounded-3xl transition-all duration-300"
            style={{ background: "rgba(12,16,36,0.75)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.06)" }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.border = `1px solid ${c.accentColor}25`;
              el.style.boxShadow = `0 0 48px ${c.accentColor}08, 0 8px 48px rgba(0,0,0,0.5)`;
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.border = "1px solid rgba(255,255,255,0.06)";
              el.style.boxShadow = "none";
            }}
          >
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-orbitron text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ color: c.accentColor, background: `${c.accentColor}18`, border: `1px solid ${c.accentColor}30` }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{c.tag}</span>
              </div>
              <h2 className="font-montserrat font-bold text-2xl md:text-3xl leading-snug" style={{ color: "#f1f5f9" }}>{c.title}</h2>
              <div className="space-y-5">
                <CaseRow icon={Target}     label="Problem" accentColor={c.accentColor}>{c.problem}</CaseRow>
                <CaseRow icon={DbIcon}     label="Data"    accentColor={c.accentColor}>{c.data}</CaseRow>
                <CaseRow icon={Wrench}     label="Methods" accentColor={c.accentColor}>{c.methods}</CaseRow>
                <CaseRow icon={TrendingUp} label="Impact"  accentColor={c.accentColor}>
                  <ul className="space-y-2 mt-1">
                    {c.impact.map((it) => (
                      <li key={it} className="flex gap-2.5 items-start">
                        <span className="mt-1.5 size-1.5 rounded-full shrink-0" style={{ background: c.accentColor, boxShadow: `0 0 8px ${c.accentColor}` }} />
                        <span className="text-muted-foreground leading-relaxed">{it}</span>
                      </li>
                    ))}
                  </ul>
                </CaseRow>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {c.tools.map((t, ti) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full font-mono"
                    style={{ color: c.toolColors[ti] ?? "#94a3b8", background: `${c.toolColors[ti] ?? "#94a3b8"}12`, border: `1px solid ${c.toolColors[ti] ?? "#94a3b8"}25` }}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                {c.github && (
                  <a href={c.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                    style={{ border: `1px solid ${c.accentColor}25`, color: "#94a3b8", background: "rgba(14,18,42,0.5)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = c.accentColor; (e.currentTarget as HTMLElement).style.borderColor = `${c.accentColor}60`; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; (e.currentTarget as HTMLElement).style.borderColor = `${c.accentColor}25`; }}
                  >
                    <Github className="size-4" /> View on GitHub <ExternalLink className="size-3" />
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl p-5 h-full flex flex-col"
                style={{ background: "rgba(8,10,24,0.8)", border: `1px solid ${c.accentColor}18` }}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="size-2 rounded-full animate-pulse" style={{ background: c.accentColor, boxShadow: `0 0 8px ${c.accentColor}` }} />
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Sample visualisation</p>
                </div>
                <div className="flex-1">{chartFor(c.chart)}</div>
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed border-t pt-3" style={{ borderColor: `${c.accentColor}15` }}>
                  {c.chartCaption}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function CaseRow({ icon: Icon, label, accentColor, children }: {
  icon: React.ElementType; label: string; accentColor: string; children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 size-9 rounded-xl grid place-items-center"
        style={{ background: `${accentColor}15`, border: `1px solid ${accentColor}25` }}>
        <Icon className="size-4" style={{ color: accentColor }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{label}</p>
        <div className="text-foreground/85 leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{children}</div>
      </div>
    </div>
  );
}
