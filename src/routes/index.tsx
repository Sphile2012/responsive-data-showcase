import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  TrendingUp,
  Activity,
  Globe,
} from "lucide-react";
import hivBg from "@/assets/hiv-stats-bg.jpg";
import {
  HivPrevalenceChart,
  RegionBarChart,
  SalesTrendChart,
  QualityPieChart,
} from "@/components/charts/MiniCharts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Teddy Mathabatha — Data Analyst & Aspiring Data Scientist" },
      { name: "description", content: "Portfolio of Teddy Mathabatha — turning raw data into decisions with SQL, Python, Power BI, Tableau, and Excel." },
    ],
  }),
  component: Index,
});

/* ── Typing effect hook ── */
function useTypingEffect(words: string[], speed = 80, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx <= word.length) {
      timeout = setTimeout(() => {
        setDisplay(word.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setCharIdx((c) => c - 1);
        setDisplay(word.slice(0, charIdx - 1));
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* ── Animated counter ── */
function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const step = end / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, end);
      setCount(Math.floor(current));
      if (current >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Data ── */
const typingWords = ["Data Analyst", "BI Engineer", "ML Practitioner", "Data Storyteller", "SQL Architect"];

const skills = [
  { icon: Code2,           name: "Python",              detail: "pandas · numpy · matplotlib · scikit-learn", color: "#22d3ee" },
  { icon: Database,        name: "SQL",                 detail: "Joins · CTEs · window functions",             color: "#a78bfa" },
  { icon: BarChart3,       name: "Power BI & Tableau",  detail: "DAX · Power Query · interactive dashboards",  color: "#f472b6" },
  { icon: FileSpreadsheet, name: "Advanced Excel",      detail: "Pivot · Slicers · Power Pivot",               color: "#34d399" },
  { icon: Brain,           name: "Statistics & ML",     detail: "Regression · clustering · hypothesis testing", color: "#fbbf24" },
  { icon: LineChart,       name: "Data Storytelling",   detail: "Narratives · visual hierarchy · recs",        color: "#22d3ee" },
  { icon: TableProperties, name: "Big Data Tools",      detail: "Spark fundamentals · cloud warehousing",      color: "#a78bfa" },
  { icon: PieChart,        name: "Data Quality & ETL",  detail: "Cleaning · documentation · source mapping",   color: "#f472b6" },
];

const stats = [
  { value: 2000, suffix: "+", label: "Records analyzed",     icon: Database },
  { value: 5,    suffix: "",  label: "Provinces covered",    icon: Globe },
  { value: 30,   suffix: "+", label: "Data attributes mapped", icon: TableProperties },
  { value: 12,   suffix: "%", label: "Uplift identified",    icon: TrendingUp },
];

const process = [
  { step: "01", title: "Define",          body: "Understand the question behind the question. Align on the decision the data must support." },
  { step: "02", title: "Acquire & Clean", body: "Pull from sources, validate schemas, and handle missing, duplicate, or invalid records." },
  { step: "03", title: "Analyse",         body: "Explore distributions, surface trends and outliers, and test hypotheses with the right statistic." },
  { step: "04", title: "Communicate",     body: "Translate findings into dashboards, charts, and a clear written recommendation." },
];

const certifications = [
  { title: "Data Analytics Professional", issuer: "Google · Coursera",  year: "2024", color: "#22d3ee" },
  { title: "SQL for Data Science",        issuer: "IBM · Coursera",     year: "2024", color: "#a78bfa" },
  { title: "Power BI Data Analyst (PL-300)", issuer: "Microsoft Learn", year: "2024", color: "#34d399" },
  { title: "Python for Data Science",     issuer: "DataCamp",           year: "2023", color: "#fbbf24" },
];

const experience = [
  {
    role: "Data Analyst (Freelance)",
    org: "Independent projects · Johannesburg",
    period: "2024 — Present",
    bullets: [
      "Built self-refreshing Power BI dashboards for a regional pharmacy chain (2,000+ records).",
      "Identified a 12% sales uplift opportunity across two underserved provinces.",
      "Authored data dictionaries and ETL documentation hand-overs for non-technical stakeholders.",
    ],
  },
  {
    role: "Public-Health Data Volunteer",
    org: "Community HIV epidemiology initiative",
    period: "2023 — 2024",
    bullets: [
      "Cleaned and modelled HIV prevalence + ART coverage data across 5 South African provinces.",
      "Designed an interactive Tableau dashboard for clinic-level decision-making.",
      "Translated statistical findings into one-page briefs for non-clinical leads.",
    ],
  },
  {
    role: "BSc Information Systems (in progress)",
    org: "University of South Africa (UNISA)",
    period: "2022 — Present",
    bullets: [
      "Coursework in statistics, databases, programming, and information modelling.",
      "Self-directed study in machine learning, SQL window functions, and BI engineering.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = { show: { transition: { staggerChildren: 0.09 } } };

/* ── Component ── */
function Index() {
  const typedText = useTypingEffect(typingWords);

  return (
    <div className="overflow-x-hidden">

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden border-b border-border">
        {/* Background layers */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hivBg})`, opacity: 0.18 }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" aria-hidden="true" />
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />

        {/* Ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
          style={{ background: "radial-gradient(circle, #22d3ee, transparent 70%)" }} aria-hidden="true" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-15"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)" }} aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-28 w-full grid lg:grid-cols-12 gap-14 items-center">

          {/* Left: copy */}
          <motion.div
            initial="hidden" animate="show" variants={stagger}
            className="lg:col-span-7 space-y-8"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur text-xs font-mono uppercase tracking-widest text-primary">
                <Activity className="size-3 animate-pulse" />
                Open to data analyst &amp; data science roles
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div variants={fadeUp} className="space-y-2">
              <h1
                className="font-hero leading-[0.88] uppercase"
                style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
              >
                <span className="block text-shimmer">Turning Data</span>
                <span className="block text-gradient-hero text-glow">Into Decisions</span>
              </h1>
            </motion.div>

            {/* Typing line */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">I am a</span>
              <span
                className="font-orbitron text-sm sm:text-base font-semibold text-glow-sm"
                style={{ color: "#22d3ee", minWidth: "16ch", display: "inline-block" }}
              >
                {typedText}
                <span className="animate-blink" style={{ color: "#a78bfa" }}>|</span>
              </span>
            </motion.div>

            {/* Paragraph */}
            <motion.p variants={fadeUp} className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              I'm{" "}
              <span className="font-semibold" style={{ color: "#e2e8f0" }}>Teddy Mathabatha</span>
              {" "}— a data analyst from Johannesburg blending SQL, Python, and BI tools to ship dashboards, models, and stories that change how teams act on their data.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 animate-pulse-glow"
                style={{
                  background: "linear-gradient(135deg, #00e5ff, #7c3aed, #f472b6)",
                  backgroundSize: "200% 200%",
                  color: "#fff",
                  boxShadow: "0 0 32px rgba(34,211,238,0.35)",
                }}
              >
                <Zap className="size-4" />
                Explore Case Studies
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/teddy-mathabatha-cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border text-sm font-medium transition-all hover:-translate-y-0.5"
                style={{ borderColor: "oklch(0.78 0.18 200 / 0.3)", background: "rgba(20,25,50,0.5)", backdropFilter: "blur(12px)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#22d3ee"; (e.currentTarget as HTMLElement).style.color = "#22d3ee"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.18 200 / 0.3)"; (e.currentTarget as HTMLElement).style.color = ""; }}
              >
                <Download className="size-4" /> Download CV
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border text-sm font-medium transition-all hover:-translate-y-0.5"
                style={{ borderColor: "oklch(0.78 0.18 200 / 0.3)", background: "rgba(20,25,50,0.5)", backdropFilter: "blur(12px)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#a78bfa"; (e.currentTarget as HTMLElement).style.color = "#a78bfa"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.18 200 / 0.3)"; (e.currentTarget as HTMLElement).style.color = ""; }}
              >
                <Github className="size-4" /> GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Right: live dashboard card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 animate-float"
          >
            <div
              className="rounded-2xl p-5 relative overflow-hidden"
              style={{
                background: "rgba(12, 16, 36, 0.75)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(34,211,238,0.2)",
                boxShadow: "0 0 0 1px rgba(34,211,238,0.08), 0 8px 64px -8px rgba(0,0,0,0.7), 0 0 60px rgba(34,211,238,0.08)",
              }}
            >
              {/* Card top bar */}
              <div className="flex items-center gap-1.5 mb-4">
                <span className="size-3 rounded-full" style={{ background: "#ff5f57" }} />
                <span className="size-3 rounded-full" style={{ background: "#febc2e" }} />
                <span className="size-3 rounded-full" style={{ background: "#28c840" }} />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-widest" style={{ color: "#64748b" }}>live_dashboard.py</span>
                <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full font-mono" style={{ background: "rgba(34,211,238,0.1)", color: "#22d3ee", border: "1px solid rgba(34,211,238,0.2)" }}>● LIVE</span>
              </div>
              <div className="flex items-center justify-between mb-1">
                <div>
                  <p className="text-[10px] uppercase tracking-widest" style={{ color: "#64748b" }}>HIV Indicators · South Africa</p>
                  <p className="font-poppins font-semibold text-base text-foreground">Prevalence &amp; ART Coverage</p>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full font-mono" style={{ background: "rgba(167,139,250,0.1)", color: "#a78bfa", border: "1px solid rgba(167,139,250,0.2)" }}>2018–2023</span>
              </div>
              <HivPrevalenceChart />
              <div className="grid grid-cols-3 gap-3 mt-4 pt-4" style={{ borderTop: "1px solid rgba(34,211,238,0.1)" }}>
                {[
                  { label: "Prevalence", value: "14.0%", color: "#22d3ee" },
                  { label: "ART coverage", value: "82%", color: "#a78bfa" },
                  { label: "YoY Δ ART", value: "+3 pp", color: "#34d399" },
                ].map(m => (
                  <div key={m.label}>
                    <p className="text-[9px] uppercase tracking-widest mb-1" style={{ color: "#64748b" }}>{m.label}</p>
                    <p className="font-orbitron font-bold text-base" style={{ color: m.color }}>{m.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8"
            style={{ background: "linear-gradient(to bottom, #22d3ee, transparent)" }}
          />
        </div>
      </section>

      {/* ══ STATS STRIP ══ */}
      <section style={{ borderBottom: "1px solid rgba(34,211,238,0.1)", background: "rgba(12,16,36,0.5)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="group flex items-center gap-4"
            >
              <div
                className="shrink-0 size-10 rounded-xl grid place-items-center transition-all group-hover:scale-110"
                style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.2)" }}
              >
                <s.icon className="size-4" style={{ color: "#22d3ee" }} />
              </div>
              <div>
                <div className="font-orbitron font-bold text-2xl md:text-3xl text-gradient">
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ SKILLS ══ */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] mb-4" style={{ color: "#22d3ee" }}>Technical Arsenal</p>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
            The Full{" "}
            <span className="text-gradient-hero">Data Science</span>
            {" "}Stack
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From raw extracts and ETL pipelines through statistical modelling, machine learning, and the dashboards executives actually open.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className="group relative p-6 rounded-2xl cursor-default transition-all duration-300 hover:-translate-y-2"
              style={{
                background: "rgba(14, 18, 42, 0.65)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = `1px solid ${s.color}40`;
                el.style.boxShadow = `0 0 32px ${s.color}18, 0 8px 32px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = "1px solid rgba(255,255,255,0.06)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Glow corner */}
              <div
                className="absolute top-0 right-0 w-20 h-20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at top right, ${s.color}20, transparent 70%)` }}
              />
              <div
                className="size-12 rounded-xl grid place-items-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
              >
                <s.icon className="size-6" style={{ color: s.color }} />
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-1.5 text-foreground">{s.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${s.color}60, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ LIVE CHARTS DASHBOARD ══ */}
      <section style={{ borderTop: "1px solid rgba(34,211,238,0.08)", borderBottom: "1px solid rgba(34,211,238,0.08)", background: "rgba(8,10,28,0.6)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] mb-4" style={{ color: "#a78bfa" }}>Interactive Analytics</p>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
              Data{" "}
              <span className="text-gradient">Visualisations</span>
              {" "}Live
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Real datasets from public-health and retail work — rendered interactively across every device.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Chart card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300"
              style={{
                background: "rgba(12,16,36,0.8)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(34,211,238,0.12)",
                boxShadow: "0 4px 40px rgba(0,0,0,0.4)",
              }}
            >
              <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">OTC Sales (R '000s)</p>
                  <p className="font-poppins font-semibold text-base text-foreground mt-0.5">Sales vs Target · YTD</p>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full font-mono" style={{ background: "rgba(244,114,182,0.12)", color: "#f472b6", border: "1px solid rgba(244,114,182,0.25)" }}>+12% MoM peak</span>
              </div>
              <SalesTrendChart />
            </motion.div>

            {/* Chart card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300"
              style={{
                background: "rgba(12,16,36,0.8)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(167,139,250,0.12)",
                boxShadow: "0 4px 40px rgba(0,0,0,0.4)",
              }}
            >
              <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Regional throughput</p>
                  <p className="font-poppins font-semibold text-base text-foreground mt-0.5">Records by Province</p>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full font-mono" style={{ background: "rgba(167,139,250,0.12)", color: "#a78bfa", border: "1px solid rgba(167,139,250,0.25)" }}>Sample dataset</span>
              </div>
              <RegionBarChart />
            </motion.div>

            {/* Chart card 3 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300"
              style={{
                background: "rgba(12,16,36,0.8)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(52,211,153,0.12)",
                boxShadow: "0 4px 40px rgba(0,0,0,0.4)",
              }}
            >
              <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Data quality audit</p>
                  <p className="font-poppins font-semibold text-base text-foreground mt-0.5">Record Quality Breakdown</p>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full font-mono" style={{ background: "rgba(52,211,153,0.12)", color: "#34d399", border: "1px solid rgba(52,211,153,0.25)" }}>ETL output</span>
              </div>
              <QualityPieChart />
            </motion.div>

            {/* Chart card 4 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300"
              style={{
                background: "rgba(12,16,36,0.8)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(34,211,238,0.12)",
                boxShadow: "0 4px 40px rgba(0,0,0,0.4)",
              }}
            >
              <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Public health · South Africa</p>
                  <p className="font-poppins font-semibold text-base text-foreground mt-0.5">HIV Prevalence &amp; ART Coverage</p>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full font-mono" style={{ background: "rgba(34,211,238,0.1)", color: "#22d3ee", border: "1px solid rgba(34,211,238,0.2)" }}>2018–2023</span>
              </div>
              <HivPrevalenceChart />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-24"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] mb-4" style={{ color: "#22d3ee" }}>How I Work</p>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-5">
              A Repeatable <span className="text-gradient">Analytics</span> Process
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every project follows the same four steps — so the work is auditable, the recommendations are defensible, and the dashboards stay alive after handover.
            </p>
          </motion.div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(14,18,42,0.7)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.border = "1px solid rgba(34,211,238,0.25)";
                  el.style.boxShadow = "0 0 24px rgba(34,211,238,0.08), 0 8px 32px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.border = "1px solid rgba(255,255,255,0.06)";
                  el.style.boxShadow = "none";
                }}
              >
                <div className="font-orbitron text-4xl font-bold mb-4 opacity-20 group-hover:opacity-40 transition-opacity" style={{ color: "#22d3ee" }}>{p.step}</div>
                <h3 className="font-poppins font-semibold text-xl mb-3 text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EXPERIENCE ══ */}
      <section style={{ borderTop: "1px solid rgba(34,211,238,0.08)", background: "rgba(8,10,28,0.5)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] mb-4 flex items-center justify-center gap-2" style={{ color: "#22d3ee" }}>
              <Briefcase className="size-3.5" /> Experience
            </p>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl">
              Where I've Been <span className="text-gradient">Sharpening</span> the Craft
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(34,211,238,0.4) 20%, rgba(167,139,250,0.4) 80%, transparent)" }}
            />
            <div className="space-y-12">
              {experience.map((e, i) => (
                <motion.div
                  key={e.role}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-start ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-4 md:left-1/2 top-4 -translate-x-1/2 size-3.5 rounded-full"
                    style={{ background: "#22d3ee", boxShadow: "0 0 16px #22d3ee, 0 0 32px rgba(34,211,238,0.5)" }}
                  />
                  {/* Left */}
                  <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
                    <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "#22d3ee" }}>{e.period}</p>
                    <h3 className="font-poppins font-semibold text-xl text-foreground">{e.role}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{e.org}</p>
                  </div>
                  {/* Right */}
                  <div className="pl-12 md:pl-12">
                    <ul className="space-y-3">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                          <span
                            className="mt-2 size-1.5 rounded-full shrink-0"
                            style={{ background: "#22d3ee", boxShadow: "0 0 8px #22d3ee" }}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CERTIFICATIONS ══ */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] mb-4 flex items-center justify-center gap-2" style={{ color: "#fbbf24" }}>
            <Award className="size-3.5" /> Certifications
          </p>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl">
            Always Shipping, <span className="text-gradient-hero">Always Learning</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative p-7 rounded-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              style={{
                background: "rgba(14,18,42,0.7)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = `1px solid ${c.color}35`;
                el.style.boxShadow = `0 0 32px ${c.color}12, 0 8px 40px rgba(0,0,0,0.5)`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = "1px solid rgba(255,255,255,0.06)";
                el.style.boxShadow = "none";
              }}
            >
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-2xl"
                style={{ background: `radial-gradient(circle at top right, ${c.color}20, transparent 70%)` }}
              />
              <div className="relative">
                <div
                  className="size-12 rounded-xl grid place-items-center mb-5"
                  style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}
                >
                  <GraduationCap className="size-6" style={{ color: c.color }} />
                </div>
                <h3 className="font-poppins font-semibold text-base leading-snug mb-2 text-foreground">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.issuer}</p>
                <p className="font-mono text-xs mt-3" style={{ color: c.color }}>{c.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-12 md:p-20 text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(14,18,42,0.9) 0%, rgba(20,10,40,0.9) 100%)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(34,211,238,0.15)",
            boxShadow: "0 0 80px rgba(34,211,238,0.06), 0 0 160px rgba(167,139,250,0.04)",
          }}
        >
          <div className="absolute inset-0 grid-bg opacity-20" />
          {/* Corner glows */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-tl-3xl opacity-30" style={{ background: "radial-gradient(circle at top left, rgba(34,211,238,0.2), transparent 60%)" }} />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-br-3xl opacity-30" style={{ background: "radial-gradient(circle at bottom right, rgba(167,139,250,0.2), transparent 60%)" }} />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.25em] mb-4" style={{ color: "#22d3ee" }}>Let's Work Together</p>
            <h2 className="font-montserrat font-bold text-3xl md:text-5xl mb-5">
              Have a Dataset That <span className="text-gradient-hero">Needs Answers?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
              I take raw spreadsheets, messy exports, and tangled questions — and return the chart, the number, and the recommendation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(135deg, #00e5ff, #7c3aed)",
                  color: "#fff",
                  boxShadow: "0 0 32px rgba(34,211,238,0.3)",
                }}
              >
                Start a Conversation <ArrowRight className="size-4" />
              </Link>
              <a
                href="/teddy-mathabatha-cv.pdf"
                download
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: "1px solid rgba(34,211,238,0.25)",
                  background: "rgba(14,18,42,0.5)",
                  backdropFilter: "blur(12px)",
                  color: "#e2e8f0",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#22d3ee"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.25)"; }}
              >
                <Download className="size-4" /> Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
