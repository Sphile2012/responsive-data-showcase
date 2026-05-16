import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Teddy Mathabatha" },
      { name: "description", content: "Get in touch with Teddy Mathabatha for data analysis opportunities." },
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

function ContactPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Page header */}
      <div className="relative border-b overflow-hidden" style={{ borderColor: "rgba(34,211,238,0.1)" }}>
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute bottom-0 left-1/2 w-96 h-48 blur-[100px] opacity-15 -translate-x-1/2"
          style={{ background: "radial-gradient(ellipse, #22d3ee, transparent 70%)" }} />
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20 relative">
          <motion.div initial={{ opacity: 1, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-mono text-xs uppercase tracking-[0.25em] mb-4" style={{ color: "#22d3ee" }}>
              Get In Touch
            </p>
            <h1
              className="font-hero uppercase leading-none mb-5"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", background: "linear-gradient(135deg, #00e5ff, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Let's Talk Data.
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "#94a3b8", fontFamily: "'Inter', sans-serif" }}>
              Whether it's a dashboard, a quick query, or a longer engagement — I'd love to hear what you're working on.
            </p>
            <p className="flex items-center gap-2 mt-4 text-sm" style={{ color: "#64748b" }}>
              <MapPin className="size-4" style={{ color: "#22d3ee" }} />
              <span style={{ fontFamily: "'Inter', sans-serif" }}>Johannesburg, Gauteng, South Africa</span>
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-10 py-16 space-y-10">

        {/* Contact channels */}
        <div className="grid sm:grid-cols-2 gap-4">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group block p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1.5"
              style={{
                background: "rgba(12,16,36,0.75)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.border = `1px solid ${c.color}30`;
                el.style.boxShadow = `0 0 32px ${c.color}10, 0 8px 40px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={e => {
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
              <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: "#64748b" }}>{c.label}</p>
              <p
                className="font-semibold text-sm break-all mb-2 transition-colors duration-200"
                style={{ color: "#e2e8f0", fontFamily: "'Inter', sans-serif" }}
              >
                {c.value}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}>{c.description}</p>
            </motion.a>
          ))}
        </div>

        {/* CTA email block */}
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-10 md:p-14 rounded-3xl text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(14,18,42,0.95), rgba(20,10,40,0.95))",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(34,211,238,0.12)",
            boxShadow: "0 0 60px rgba(34,211,238,0.05)",
          }}
        >
          <div className="absolute inset-0 grid-bg opacity-15" />
          <div className="absolute top-0 left-0 w-48 h-48 rounded-tl-3xl"
            style={{ background: "radial-gradient(circle at top left, rgba(34,211,238,0.12), transparent 60%)" }} />
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-br-3xl"
            style={{ background: "radial-gradient(circle at bottom right, rgba(167,139,250,0.12), transparent 60%)" }} />
          <div className="relative">
            <div
              className="size-14 rounded-2xl grid place-items-center mx-auto mb-5"
              style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.2)" }}
            >
              <Send className="size-6" style={{ color: "#22d3ee" }} />
            </div>
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl mb-3" style={{ color: "#f1f5f9" }}>
              Prefer Email?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              Fastest way to reach me. I respond within a business day with a clear plan of action.
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
              <Mail className="size-4" /> Send an Email
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
