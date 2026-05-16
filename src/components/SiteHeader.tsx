import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Download, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "rgba(8, 10, 28, 0.75)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(34, 211, 238, 0.1)",
        boxShadow: "0 1px 0 rgba(34,211,238,0.05)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <span
            className="h-8 w-8 rounded-lg grid place-items-center font-bold text-sm transition-all duration-300 group-hover:scale-110"
            style={{
              background: "linear-gradient(135deg, #22d3ee, #7c3aed)",
              color: "#fff",
              fontFamily: "'Orbitron', sans-serif",
              boxShadow: "0 0 20px rgba(34,211,238,0.3)",
            }}
          >
            T
          </span>
          <span
            className="text-lg tracking-tight font-semibold"
            style={{ fontFamily: "'Poppins', sans-serif", color: "#e2e8f0" }}
          >
            Teddy
            <span style={{ color: "#22d3ee" }}>.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
              style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}
              activeProps={{
                style: {
                  color: "#22d3ee",
                  background: "rgba(34,211,238,0.08)",
                  fontFamily: "'Inter', sans-serif",
                },
                className: "px-4 py-2 text-sm font-medium rounded-lg",
              }}
              activeOptions={{ exact: l.to === "/" }}
              onMouseEnter={e => { if (!(e.currentTarget as HTMLElement).dataset.active) (e.currentTarget as HTMLElement).style.color = "#e2e8f0"; }}
              onMouseLeave={e => { if (!(e.currentTarget as HTMLElement).dataset.active) (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/teddy-mathabatha-cv.pdf"
            download
            className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-2 text-sm rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{
              border: "1px solid rgba(34,211,238,0.2)",
              color: "#94a3b8",
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#22d3ee";
              el.style.color = "#22d3ee";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(34,211,238,0.2)";
              el.style.color = "#94a3b8";
            }}
          >
            <Download className="size-3.5" /> CV
          </a>
          <a
            href="mailto:teddymathabatha3@gmail.com"
            className="ml-1 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #22d3ee, #7c3aed)",
              color: "#fff",
              fontFamily: "'Inter', sans-serif",
              boxShadow: "0 0 16px rgba(34,211,238,0.2)",
            }}
          >
            Hire me
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Menu"
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: "#94a3b8" }}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: "1px solid rgba(34,211,238,0.1)",
            background: "rgba(8,10,28,0.95)",
            backdropFilter: "blur(20px)",
          }}
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                style={{ color: "#e2e8f0", fontFamily: "'Inter', sans-serif" }}
                activeProps={{ style: { color: "#22d3ee", background: "rgba(34,211,238,0.08)", fontFamily: "'Inter', sans-serif" } }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="/teddy-mathabatha-cv.pdf"
              download
              className="mt-2 px-4 py-3 rounded-lg border text-center inline-flex items-center justify-center gap-2 text-sm font-medium"
              style={{ borderColor: "rgba(34,211,238,0.2)", color: "#94a3b8" }}
            >
              <Download className="size-4" /> Download CV
            </a>
            <a
              href="mailto:teddymathabatha3@gmail.com"
              className="px-4 py-3 rounded-lg text-center font-semibold text-sm"
              style={{ background: "linear-gradient(135deg, #22d3ee, #7c3aed)", color: "#fff" }}
            >
              Hire me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
