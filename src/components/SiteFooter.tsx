import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer
      className="mt-20"
      style={{ borderTop: "1px solid rgba(34,211,238,0.08)" }}
    >
      <div
        style={{ background: "rgba(8,10,28,0.6)", backdropFilter: "blur(16px)" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="h-8 w-8 rounded-lg grid place-items-center font-bold text-sm"
                style={{
                  background: "linear-gradient(135deg, #22d3ee, #7c3aed)",
                  color: "#fff",
                  fontFamily: "'Orbitron', sans-serif",
                  boxShadow: "0 0 16px rgba(34,211,238,0.25)",
                }}
              >
                T
              </span>
              <span
                className="text-base font-semibold"
                style={{ fontFamily: "'Poppins', sans-serif", color: "#e2e8f0" }}
              >
                Teddy<span style={{ color: "#22d3ee" }}>.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}>
              Data analyst turning messy datasets into decisions. Based in Johannesburg, open to global remote opportunities.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: "#22d3ee" }}>Contact</p>
            <div className="space-y-3">
              <a
                href="mailto:teddymathabatha3@gmail.com"
                className="flex items-center gap-2.5 text-sm transition-all duration-200 hover:-translate-y-0.5 group break-all"
                style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#22d3ee"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#64748b"}
              >
                <Mail className="size-4 shrink-0" style={{ color: "#22d3ee" }} />
                teddymathabatha3@gmail.com
              </a>
              <a
                href="tel:+27722351747"
                className="flex items-center gap-2.5 text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#34d399"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#64748b"}
              >
                <Phone className="size-4 shrink-0" style={{ color: "#34d399" }} />
                072 235 1747
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] mb-4" style={{ color: "#a78bfa" }}>Elsewhere</p>
            <div className="space-y-3">
              <a
                href="https://github.com/TeddyDataHub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#a78bfa"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#64748b"}
              >
                <Github className="size-4 shrink-0" style={{ color: "#a78bfa" }} />
                github.com/TeddyDataHub
              </a>
              <a
                href="https://www.linkedin.com/in/teddy-mathabatha-3ba205223/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ color: "#64748b", fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#f472b6"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#64748b"}
              >
                <Linkedin className="size-4 shrink-0" style={{ color: "#f472b6" }} />
                linkedin.com/in/teddy-mathabatha
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-5 text-center"
          style={{ borderTop: "1px solid rgba(34,211,238,0.06)" }}
        >
          <p className="text-xs" style={{ color: "#334155", fontFamily: "'Inter', sans-serif" }}>
            © {new Date().getFullYear()} Teddy Mathabatha ·{" "}
            <span style={{ color: "#22d3ee" }}>Data Analyst</span> ·{" "}
            Johannesburg, South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
