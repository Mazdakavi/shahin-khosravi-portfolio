"use client";

import Button from "./Button";
import { WHATSAPP_URL, trackEvent } from "@/lib/analytics";

type Props = {
  dark?: boolean;
};

export default function CTABox({ dark = true }: Props) {
  return (
    <div
      className={`rounded-sm p-8 md:p-12 text-center ${
        dark
          ? "bg-dark-card border border-dark-border/40"
          : "bg-light-soft border border-light-text/10"
      }`}
    >
      <h3
        className={`text-xl md:text-2xl font-light tracking-wide mb-3 ${
          dark ? "text-text" : "text-light-text"
        }`}
      >
        Ready to start your project?
      </h3>
      <p
        className={`text-sm mb-8 max-w-md mx-auto ${
          dark ? "text-text-muted" : "text-light-text/60"
        }`}
      >
        Get in touch to discuss your villa interior fit-out, design package, or
        site supervision needs.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          href={WHATSAPP_URL}
          variant="primary"
          external
          onClick={() => trackEvent("whatsapp_click", { location: "cta_box" })}
        >
          WhatsApp
        </Button>
        <Button
          href="/contact"
          variant={dark ? "secondary" : "outline"}
          onClick={() => trackEvent("book_call_click", { location: "cta_box" })}
        >
          Book a 15-minute call
        </Button>
        <a
          href="mailto:mazdakavi@gmail.com"
          onClick={() => trackEvent("email_click", { location: "cta_box" })}
          className={`text-sm tracking-wide hover:underline underline-offset-4 ${
            dark ? "text-text-muted hover:text-text" : "text-light-text/60 hover:text-light-text"
          }`}
        >
          mazdakavi@gmail.com
        </a>
      </div>
    </div>
  );
}
