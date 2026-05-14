import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-accent grid place-items-center font-display font-bold text-primary-foreground text-sm">
            T
          </span>
          <span className="font-display text-lg tracking-tight">Teddy<span className="text-primary">.</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
              activeProps={{ className: "px-4 py-2 text-sm text-foreground rounded-md bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:teddymathabatha3@gmail.com"
            className="ml-2 px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Hire me
          </a>
        </nav>
        <button
          aria-label="Menu"
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-foreground hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="mailto:teddymathabatha3@gmail.com"
              className="mt-2 px-3 py-3 rounded-md bg-primary text-primary-foreground text-center font-medium"
            >
              Hire me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
