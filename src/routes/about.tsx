import { createFileRoute } from "@tanstack/react-router";
import { Award, Download, GraduationCap, Trophy } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Teddy Mathabatha" },
      { name: "description", content: "Self-taught data analyst with a quantitative foundation in Applied Mathematics and Statistics, pursuing a career in data science." },
      { property: "og:title", content: "About Teddy Mathabatha" },
      { property: "og:description", content: "Background, education, certifications, and achievements." },
    ],
  }),
  component: AboutPage,
});

const certs = [
  { year: "2026", title: "Data Analysis Essentials", issuer: "Cisco Networking Academy" },
  { year: "2026", title: "Introduction to AI & Data Science", issuer: "Absa ReadytoWork" },
];

const achievements = [
  { year: "2025", title: "Built end-to-end retail analytics pipeline", body: "Designed an Excel + SQL workflow processing 2,000+ records and identified a 12% revenue uplift opportunity." },
  { year: "2025", title: "Open-source HIV indicator dashboard", body: "Published a Power BI indicator dashboard using national open data — picked up by two community health study groups." },
  { year: "2024", title: "Self-taught the modern data stack", body: "Worked through 200+ hours of structured study across SQL, Python (pandas), Power BI, and statistics." },
];

const competencies = [
  "Python (pandas, numpy)",
  "SQL: Joins, CTEs, Window Functions",
  "Power BI · DAX · Power Query",
  "Tableau",
  "Excel Dashboards (Pivot · Slicers)",
  "Statistics & Hypothesis Testing",
  "Machine Learning fundamentals",
  "Data Cleaning & ETL",
  "Data Storytelling & Visualisation",
  "Production Documentation",
  "Stakeholder Communication",
  "Conceptual & Analytical Thinking",
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20">
      <p className="text-xs uppercase tracking-widest text-primary mb-3">About</p>
      <h1 className="font-display text-5xl md:text-6xl mb-8">
        Self-taught analyst with a <em className="text-gradient not-italic">quantitative spine</em>.
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
        I'm a detail-oriented data analyst building a quantitative foundation in Applied Mathematics
        and Statistics at UNISA. I collect, analyse, and summarise data into clear, actionable
        recommendations — communicating findings through tables, dashboards, and presentations that
        speak to both technical and non-technical stakeholders. My long-term focus is data science:
        pairing rigorous statistics with machine learning to solve real-world problems.
      </p>

      <div className="mt-8">
        <a
          href="/teddy-mathabatha-cv.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
        >
          <Download className="size-4" /> Download CV (PDF)
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-16">
        <div className="p-8 rounded-2xl border border-border bg-surface/60">
          <GraduationCap className="size-7 text-primary mb-4" />
          <h2 className="font-display text-2xl mb-2">Education</h2>
          <p className="font-medium">BSc Applied Mathematics & Statistics</p>
          <p className="text-sm text-muted-foreground mt-1">University of South Africa (UNISA) · In Progress</p>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            Coursework spans statistical analysis, mathematical modelling, quantitative methods, and
            probability theory.
          </p>
        </div>
        <div className="p-8 rounded-2xl border border-border bg-surface/60">
          <Award className="size-7 text-primary mb-4" />
          <h2 className="font-display text-2xl mb-2">Certifications</h2>
          <ul className="space-y-3 mt-3">
            {certs.map((c) => (
              <li key={c.title} className="flex gap-4">
                <span className="font-mono text-xs text-primary mt-1">{c.year}</span>
                <div>
                  <p className="font-medium">{c.title}</p>
                  <p className="text-sm text-muted-foreground">{c.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Achievements */}
      <div className="mt-16">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="size-6 text-primary" />
          <h2 className="font-display text-3xl">Achievements</h2>
        </div>
        <div className="space-y-4">
          {achievements.map((a) => (
            <div key={a.title} className="grid md:grid-cols-12 gap-4 p-6 rounded-xl border border-border bg-surface/60">
              <div className="md:col-span-2 font-mono text-sm text-primary">{a.year}</div>
              <div className="md:col-span-10">
                <h3 className="font-display text-lg mb-1">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-3xl mb-6">Core competencies</h2>
        <div className="flex flex-wrap gap-2">
          {competencies.map((c) => (
            <span
              key={c}
              className="px-4 py-2 rounded-full border border-border bg-surface/60 text-sm hover:border-primary hover:text-primary transition"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
