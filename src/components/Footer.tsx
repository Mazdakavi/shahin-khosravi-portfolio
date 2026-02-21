import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/analytics";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border/40">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <p className="text-text font-semibold tracking-wide text-sm uppercase mb-4">
              Shahin Khosravi
            </p>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Architect &amp; interior designer in Dubai.
              Villa interior fit-out + site supervision.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-text-muted text-xs uppercase tracking-widest mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {[
                { label: "Work", href: "/work" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Resume", href: "/resume" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-text-muted text-sm hover:text-text transition-colors w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-text-muted text-xs uppercase tracking-widest mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover transition-colors w-fit"
              >
                +971 50 113 8078
              </a>
              <a
                href="mailto:mazdakavi@gmail.com"
                className="text-text-muted hover:text-text transition-colors w-fit"
              >
                mazdakavi@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/shahin-khosravi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text transition-colors w-fit"
              >
                LinkedIn
              </a>
              <p className="text-text-muted">Dubai, UAE</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-dark-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted/60 text-xs">
            &copy; {new Date().getFullYear()} Shahin Khosravi. All rights reserved.
          </p>
          <p className="text-text-muted/40 text-xs">
            Architect &middot; Interior Designer &middot; Visualization
          </p>
        </div>
      </div>
    </footer>
  );
}
