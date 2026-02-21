"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { WHATSAPP_URL, trackEvent } from "@/lib/analytics";

const NAV_ITEMS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-md border-b border-dark-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="text-text font-semibold tracking-wide text-sm uppercase hover:text-accent transition-colors"
        >
          Shahin Khosravi
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-text-muted text-sm tracking-wide hover:text-text transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "header" })}
            className="bg-accent text-dark text-xs font-medium tracking-wide px-5 py-2.5 rounded-sm hover:bg-accent-hover transition-colors"
          >
            WhatsApp
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-5 h-px bg-text transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-text transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-16 bg-dark/98 backdrop-blur-md transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-start px-8 pt-12 gap-8" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-text text-2xl font-light tracking-wide hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("whatsapp_click", { location: "mobile_menu" });
              setMobileOpen(false);
            }}
            className="bg-accent text-dark text-sm font-medium tracking-wide px-6 py-3 rounded-sm mt-4"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
