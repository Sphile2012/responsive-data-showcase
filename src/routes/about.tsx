import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Award, Download, GraduationCap, Trophy, Sparkles,
  Code2, BarChart3, Database, Brain,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Teddy Mathabatha" },
      { name: "description", content: "Results-driven Data Analyst and aspiring Data Scientist from Johannesburg." },
    ],
  }),
  component: AboutPage,
});

/* ── Data ── */
const certs = [
  { year: "2026", title: "Data Analysis Essentials",          issuer: "Cisco Networking Academy", color: "#22d3ee" },
  { year: "2026", title: "Introduction to AI & Data Science", issuer: "Absa ReadytoWork",         color: "#a78bfa" },
];

const achievements = [
  { year: "2025", title: "Built end-to-end retail analytics pipeline",  body: "Designed an Excel + SQL workflow processing 2,000+ records and identified a 12% revenue uplift opportunity.", color: "#22d3ee" },
  { year: "2025", title: "Open-source HIV indicator dashboard",         body: "Published a Power BI indicator dashboard using national open data — picked up by two community health study groups.", color: "#a78bfa" },
  { year: "2024", title: "Self-taught the modern data stack",           body: "Worked through 200+ hours of structured study across SQL, Python (pandas), Power BI, and statistics.", color: "#34d399" },
];

const skillCategories = [
  {
    icon: Code2,
    label: "Languages & Libraries",
    color: "#22d3ee",
    skills: [
      { name: "SQL (CTEs, Window Functions, Joins)", level: 90 },
      { name: "Python — pandas, numpy",              level: 82 },
      { name: "Python — scikit-learn (ML basics)",   level: 65 },
      { name: "DAX (Power BI measures)",             level: 78 },
    ],
  },
  {
    icon: BarChart3,
    label: "BI & Visualisation",
    color: "#a78bfa",
    skills: [
      { name: "Power BI (dashboards, data modelling)", level: 88 },
      { name: "Tableau",                               level: 75 },
      { name: "Excel — Pivot Tables, Slicers, Charts", level: 92 },
      { name: "Data Storytelling & Presentation",      level: 85 },
    ],
  },
  {
    icon: Database,
    label: "Data Engineering",
    color: "#34d399",
    skills: [
      { name: "Power Query (ETL & data shaping)", level: 83 },
      { name: "Data Cleaning & Quality Profiling", level: 87 },
      { name: "Star Schema & Data Modelling",      level: 78 },
      { name: "Data Documentation & Cataloguing",  level: 80 },
    ],
  },
  {
    icon: Brain,
    label: "Analytical & Soft Skills",
    color: "#f472b6",
    skills: [
      { name: "Statistics & Hypothesis Testing",    level: 80 },
      { name: "Analytical & Critical Thinking",     level: 90 },
      { name: "Stakeholder Communication",          level: 88 },
      { name: "Problem Solving & Root Cause Analysis", level: 85 },
    ],
  },
];

/* ── Animated progress bar ── */
function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm" style={{ color: "#cbd5e1", fontFamily: "'Inter', sans-serif" }}>{name}</span>
        <span
          className="font-orbitron text-xs font-bold tabular-nums"
          style={{ color }}
        >
          {inView ? `${level}%` : "0%"}
        </span>
      </div>
      {/* Track */}
      <div
        className="relative h-2 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.05)" }}
      >
        {/* Glow shadow layer */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full blur-sm"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{ background: color, opacity: 0.5 }}
        />
        {/* Solid fill layer */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{
            background: `linear-gradient(90deg, ${color}bb, ${color})`,
            boxShadow: `0 0 12px ${color}60`,
          }}
        />
        {/* Scanning shimmer */}
        <motion.div
          className="absolute inset-y-0 w-8 rounded-full"
          initial={{ left: "-2rem", opacity: 0 }}
          animate={inView ? { left: `${level}%`, opacity: [0, 0.8, 0] } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{ background: `linear-gradient(90deg, transparent, #fff, transparent)` }}
        />
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero banner */}
      <div className="relative border-b overflow-hidden" style={{ borderColor: "rgba(34,211,238,0.1)" }}>
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 right-1/3 w-72 h-72 rounded-full blur-[120px] opacity-12"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)" }} />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 relative">
          <motion.div initial={{ opacity: 1, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-mono text-xs uppercase tracking-[0.25em] mb-4 flex items-center gap-2" style={{ color: "#a78bfa" }}>
              <Sparkles className="size-3" /> About Me
            </p>
            <h1
              className="font-hero uppercase leading-none mb-6"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", background: "linear-gradient(135deg, #a78bfa, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Self-Taught.<br />Data-Driven.
            </h1>
            <p className="text-lg leading-relaxed max-w-3xl" style={{ color: "#94a3b8", fontFamily: "'Inter', sans-serif" }}>
              I'm a results-driven Data Analyst and aspiring Data Scientist from Johannesburg with a strong passion for transforming raw data into powerful business insights.
              I specialize in combining statistics, SQL, Python, and modern Business Intelligence tools to build intelligent dashboards, predictive models, and data-driven solutions
              that help organizations make smarter, faster decisions. With a sharp analytical mindset and a strong eye for storytelling, I turn complex datasets into clear,
              actionable strategies that drive growth, efficiency, and innovation.
              <br /><br />
              I am passionate about solving real-world problems through data, continuously learning emerging technologies, and creating impactful solutions that empower teams
              to act confidently on their information. My goal is to bring technical excellence, creativity, and measurable value to forward-thinking companies looking to
              unlock the full power of their data.
            </p>
            <div className="mt-8">
              <a
                href="/teddy-mathabatha-cv.pdf"
                download
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #a78bfa, #22d3ee)", color: "#fff", boxShadow: "0 0 24px rgba(167,139,250,0.3)" }}
              >
                <Download className="size-4" /> Download CV (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-16 space-y-20">

        {/* Education + Certifications */}
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 1, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            style={{ background: "rgba(12,16,36,0.75)", backdropFilter: "blur(20px)", border: "1px solid rgba(34,211,238,0.12)", boxShadow: "0 4px 32px rgba(0,0,0,0.3)" }}
          >
            <div className="size-12 rounded-xl grid place-items-center mb-5" style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.2)" }}>
              <GraduationCap className="size-6" style={{ color: "#22d3ee" }} />
            </div>
            <h2 className="font-poppins font-bold text-xl mb-1" style={{ color: "#f1f5f9" }}>Education</h2>
            <p className="font-semibold mt-3" style={{ color: "#e2e8f0", fontFamily: "'Inter', sans-serif" }}>BSc Applied Mathematics & Statistics</p>
            <p className="text-sm mt-1" style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}>University of South Africa (UNISA) · In Progress</p>
            <p className="text-sm mt-4 leading-relaxed" style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}>
              Coursework spans statistical analysis, mathematical modelling, quantitative methods, and probability theory.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}
            className="p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            style={{ background: "rgba(12,16,36,0.75)", backdropFilter: "blur(20px)", border: "1px solid rgba(167,139,250,0.12)", boxShadow: "0 4px 32px rgba(0,0,0,0.3)" }}
          >
            <div className="size-12 rounded-xl grid place-items-center mb-5" style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)" }}>
              <Award className="size-6" style={{ color: "#a78bfa" }} />
            </div>
            <h2 className="font-poppins font-bold text-xl mb-4" style={{ color: "#f1f5f9" }}>Certifications</h2>
            <ul className="space-y-4">
              {certs.map((c) => (
                <li key={c.title} className="flex gap-4 items-start">
                  <span className="font-mono text-xs px-2 py-1 rounded-md shrink-0 mt-0.5"
                    style={{ color: c.color, background: `${c.color}15`, border: `1px solid ${c.color}25` }}>
                    {c.year}
                  </span>
                  <div>
                    <p className="font-medium text-sm" style={{ color: "#e2e8f0", fontFamily: "'Inter', sans-serif" }}>{c.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}>{c.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Skills & Tools ── */}
        <div>
          <div className="mb-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: "#22d3ee" }}>Proficiency</p>
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl" style={{ color: "#f1f5f9" }}>Skills & Tools</h2>
            <p className="mt-2 text-sm" style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}>
              Self-assessed proficiency across the full data workflow — from raw ingestion to business-ready insight.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 1, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: ci * 0.08 }}
                className="p-7 rounded-2xl space-y-5 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(12,16,36,0.75)",
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${cat.color}14`,
                  boxShadow: "0 4px 32px rgba(0,0,0,0.3)",
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="size-10 rounded-xl grid place-items-center shrink-0"
                    style={{ background: `${cat.color}12`, border: `1px solid ${cat.color}25` }}
                  >
                    <cat.icon className="size-5" style={{ color: cat.color }} />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: cat.color }}>Category</p>
                    <h3 className="font-poppins font-semibold text-sm" style={{ color: "#f1f5f9" }}>{cat.label}</h3>
                  </div>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {cat.skills.map((sk) => (
                    <SkillBar key={sk.name} name={sk.name} level={sk.level} color={cat.color} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="size-10 rounded-xl grid place-items-center" style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.2)" }}>
              <Trophy className="size-5" style={{ color: "#fbbf24" }} />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "#fbbf24" }}>Track Record</p>
              <h2 className="font-montserrat font-bold text-2xl" style={{ color: "#f1f5f9" }}>Achievements</h2>
            </div>
          </div>
          <div className="space-y-4">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 1, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group grid md:grid-cols-12 gap-5 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "rgba(12,16,36,0.65)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.05)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.border = `1px solid ${a.color}25`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px ${a.color}08`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-3">
                  <span className="font-orbitron font-bold text-sm" style={{ color: a.color }}>{a.year}</span>
                  <div className="size-1.5 rounded-full hidden md:block mt-1" style={{ background: a.color, boxShadow: `0 0 8px ${a.color}` }} />
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-poppins font-semibold text-base mb-1.5" style={{ color: "#f1f5f9" }}>{a.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}>{a.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
