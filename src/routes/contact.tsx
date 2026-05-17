import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowRight,
  Clock,
  Wifi,
  Globe,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Teddy Mathabatha" },
      {
        name: "description",
        content: "Get in touch with Teddy Mathabatha for data analysis opportunities.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "teddymathabatha3@gmail.com",
    href: "mailto:teddymathabatha3@gmail.com",
    color: "#22d3ee",
    description: "Fastest way to reach me — I respond within a day.",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+27 72 235 1747",
    href: "tel:+27722351747",
    color: "#34d399",
    description: "Available during SA business hours.",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/TeddyDataHub",
    href: "https://github.com/TeddyDataHub",
    color: "#a78bfa",
    description: "See my projects, notebooks, and dashboards.",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "teddy-mathabatha",
    href: "https://www.linkedin.com/in/teddy-mathabatha-3ba205223/",
    color: "#f472b6",
    description: "Professional profile and endorsements.",
  },
];

const statusRows = [
  { icon: Wifi, label: "Status", value: "Open to Opportunities", color: "#34d399" },
  { icon: Clock, label: "Response Time", value: "< 24 hours", color: "#22d3ee" },
  { icon: MapPin, label: "Location", value: "Johannesburg, South Africa", color: "#a78bfa" },
  { icon: Globe, label: "Timezone", value: "SAST — UTC+2", color: "#fbbf24" },
];

function ContactPage() {
  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ── */}
      <div
        className="relative border-b overflow-hidden"
        style={{ borderColor: "rgba(34,211,238,0.1)" }}
      >
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[120px] opacity-10"
          style={{ background: "radial-gradient(circle, #22d3ee, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] opacity-10"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)" }}
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: copy */}
            <motion.div
              className="lg:col-span-6 space-y-6"
              initial={{ opacity: 1, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="font-mono text-xs uppercase tracking-[0.25em]"
                style={{ color: "#22d3ee" }}
              >
                Get In Touch
              </p>
              <h1
                className="font-hero uppercase leading-none"
                style={{
                  fontSize: "clamp(2.8rem, 8vw, 6rem)",
                  background: "linear-gradient(135deg, #00e5ff, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Let's Talk Data.
              </h1>
              <p
                className="text-base lg:text-lg leading-relaxed"
                style={{ color: "#94a3b8", fontFamily: "'Inter', sans-serif" }}
              >
                Whether it's a dashboard, a quick query, or a longer engagement — I'd love to hear
                what you're working on and how data can unlock the answers.
              </p>
              <p className="flex items-center gap-2 text-sm" style={{ color: "#64748b" }}>
                <MapPin className="size-4" style={{ color: "#22d3ee" }} />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>
                  Johannesburg, Gauteng, South Africa
                </span>
              </p>
              <a
                href="mailto:teddymathabatha3@gmail.com"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #22d3ee, #7c3aed)",
                  color: "#fff",
                  boxShadow: "0 0 28px rgba(34,211,238,0.3)",
                }}
              >
                <Mail className="size-4" /> Send an Email
              </a>
            </motion.div>

            {/* Right: availability status card */}
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 1, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{
                  background: "rgba(10,13,32,0.85)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(34,211,238,0.2)",
                  boxShadow:
                    "0 0 0 1px rgba(34,211,238,0.06), 0 8px 64px rgba(0,0,0,0.6), 0 0 60px rgba(34,211,238,0.06)",
                }}
              >
                {/* Card header */}
                <div
                  className="flex items-center gap-2 mb-6 pb-5"
                  style={{ borderBottom: "1px solid rgba(34,211,238,0.1)" }}
                >
                  <div className="flex gap-1.5">
                    <span className="size-3 rounded-full" style={{ background: "#ff5f57" }} />
                    <span className="size-3 rounded-full" style={{ background: "#febc2e" }} />
                    <span className="size-3 rounded-full" style={{ background: "#28c840" }} />
                  </div>
                  <span
                    className="ml-2 font-mono text-[10px] uppercase tracking-widest"
                    style={{ color: "#64748b" }}
                  >
                    availability_status.json
                  </span>
                </div>

                {/* Status banner */}
                <div
                  className="flex items-center gap-3 p-4 rounded-xl mb-6"
                  style={{
                    background: "rgba(52,211,153,0.08)",
                    border: "1px solid rgba(52,211,153,0.2)",
                  }}
                >
                  <span
                    className="size-2.5 rounded-full animate-pulse"
                    style={{ background: "#34d399", boxShadow: "0 0 10px #34d399" }}
                  />
                  <div>
                    <p className="font-poppins font-semibold text-sm" style={{ color: "#34d399" }}>
                      Available for New Opportunities
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}
                    >
                      Open to Data Analyst & Data Science roles
                    </p>
                  </div>
                </div>

                {/* Status rows */}
                <div className="space-y-1">
                  {statusRows.map((r) => (
                    <div
                      key={r.label}
                      className="flex items-center gap-3 py-3 px-2 rounded-lg transition-colors hover:bg-white/[0.02]"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                    >
                      <div
                        className="size-8 rounded-lg grid place-items-center shrink-0"
                        style={{ background: `${r.color}10`, border: `1px solid ${r.color}20` }}
                      >
                        <r.icon className="size-4" style={{ color: r.color }} />
                      </div>
                      <div className="flex-1">
                        <p
                          className="font-mono text-[9px] uppercase tracking-widest"
                          style={{ color: "#475569" }}
                        >
                          {r.label}
                        </p>
                        <p
                          className="text-sm font-medium mt-0.5"
                          style={{ color: "#cbd5e1", fontFamily: "'Inter', sans-serif" }}
                        >
                          {r.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick links */}
                <div
                  className="grid grid-cols-2 gap-2 mt-5 pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <a
                    href="https://github.com/TeddyDataHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "rgba(167,139,250,0.08)",
                      border: "1px solid rgba(167,139,250,0.2)",
                      color: "#a78bfa",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <Github className="size-4" /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/teddy-mathabatha-3ba205223/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "rgba(244,114,182,0.08)",
                      border: "1px solid rgba(244,114,182,0.2)",
                      color: "#f472b6",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <Linkedin className="size-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Contact channels ── */}
      <div className="mx-auto max-w-4xl px-6 lg:px-10 py-16 space-y-10">
        <div className="grid sm:grid-cols-2 gap-4">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 1, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group block p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1.5"
              style={{
                background: "rgba(12,16,36,0.75)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = `1px solid ${c.color}30`;
                el.style.boxShadow = `0 0 32px ${c.color}10, 0 8px 40px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = "1px solid rgba(255,255,255,0.06)";
                el.style.boxShadow = "none";
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="size-11 rounded-xl grid place-items-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${c.color}15`, border: `1px solid ${c.color}25` }}
                >
                  <c.icon className="size-5" style={{ color: c.color }} />
                </div>
                <ArrowRight
                  className="size-4 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  style={{ color: c.color }}
                />
              </div>
              <p
                className="font-mono text-[10px] uppercase tracking-widest mb-1"
                style={{ color: "#64748b" }}
              >
                {c.label}
              </p>
              <p
                className="font-semibold text-sm break-all mb-2"
                style={{ color: "#e2e8f0", fontFamily: "'Inter', sans-serif" }}
              >
                {c.value}
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}
              >
                {c.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-10 md:p-14 rounded-3xl text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(14,18,42,0.95), rgba(20,10,40,0.95))",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(34,211,238,0.12)",
          }}
        >
          <div className="absolute inset-0 grid-bg opacity-15" />
          <div
            className="absolute top-0 left-0 w-48 h-48"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(34,211,238,0.12), transparent 60%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-48 h-48"
            style={{
              background:
                "radial-gradient(circle at bottom right, rgba(167,139,250,0.12), transparent 60%)",
            }}
          />
          <div className="relative">
            <div
              className="size-14 rounded-2xl grid place-items-center mx-auto mb-5"
              style={{
                background: "rgba(34,211,238,0.1)",
                border: "1px solid rgba(34,211,238,0.2)",
              }}
            >
              <Send className="size-6" style={{ color: "#22d3ee" }} />
            </div>
            <h2
              className="font-montserrat font-bold text-2xl md:text-3xl mb-3"
              style={{ color: "#f1f5f9" }}
            >
              Have a Dataset That Needs Answers?
            </h2>
            <p
              className="text-muted-foreground mb-8 max-w-sm mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              I take raw spreadsheets, messy exports, and tangled questions — and return the chart,
              the number, and the recommendation.
            </p>
            <a
              href="mailto:teddymathabatha3@gmail.com"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #00e5ff, #7c3aed)",
                color: "#fff",
                boxShadow: "0 0 32px rgba(34,211,238,0.25)",
              }}
            >
              <Mail className="size-4" /> Start a Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
