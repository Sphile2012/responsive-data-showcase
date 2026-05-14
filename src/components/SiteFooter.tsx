import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl">Teddy Mathabatha</h3>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs">
            Data analyst turning messy datasets into decisions. Based in Johannesburg.
          </p>
        </div>
        <div className="text-sm space-y-2">
          <p className="text-muted-foreground uppercase tracking-widest text-xs mb-3">Contact</p>
          <a href="mailto:teddymathabatha3@gmail.com" className="flex items-center gap-2 hover:text-primary transition break-all">
            <Mail className="size-4 shrink-0" />
            <span>teddymathabatha3@gmail.com</span>
          </a>
          <a href="tel:+27722351747" className="flex items-center gap-2 hover:text-primary transition">
            <Phone className="size-4 shrink-0" />
            <span>072 235 1747</span>
          </a>
        </div>
        <div className="text-sm space-y-2">
          <p className="text-muted-foreground uppercase tracking-widest text-xs mb-3">Elsewhere</p>
          <a href="https://github.com/TeddyDataHub" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition">
            <Github className="size-4" />
            <span>github.com/TeddyDataHub</span>
          </a>
          <a href="https://www.linkedin.com/in/teddy-mathabatha-3ba205223/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition">
            <Linkedin className="size-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Teddy Mathabatha. Built with care.
      </div>
    </footer>
  );
}
