"use client";

import { useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";

const AUDIENCES = [
  "Villa owner",
  "Developer / contractor",
  "Fit-out company / studio",
  "Other",
];

const TIMELINES = [
  "Immediately",
  "Within 1 month",
  "1–3 months",
  "Just exploring",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    trackEvent("form_submit");

    // Simulate form submission — replace with actual endpoint
    setTimeout(() => {
      setStatus("sent");
    }, 1200);
  }

  if (status === "sent") {
    return (
      <div className="bg-dark-card border border-dark-border/40 rounded-sm p-8 md:p-12 text-center">
        <p className="text-accent text-lg mb-2">Message sent.</p>
        <p className="text-text-muted text-sm">
          I&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-dark-card border border-dark-border/40 rounded-sm p-6 md:p-8 space-y-5"
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-text-muted text-xs uppercase tracking-widest mb-2">
          Name <span className="text-accent">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full bg-dark border border-dark-border/60 rounded-sm px-4 py-3 text-text text-sm placeholder:text-text-muted/40 focus:border-accent focus:outline-none transition-colors"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-text-muted text-xs uppercase tracking-widest mb-2">
          Email <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full bg-dark border border-dark-border/60 rounded-sm px-4 py-3 text-text text-sm placeholder:text-text-muted/40 focus:border-accent focus:outline-none transition-colors"
          placeholder="you@example.com"
        />
      </div>

      {/* Phone (optional) */}
      <div>
        <label htmlFor="phone" className="block text-text-muted text-xs uppercase tracking-widest mb-2">
          Phone <span className="text-text-muted/40">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full bg-dark border border-dark-border/60 rounded-sm px-4 py-3 text-text text-sm placeholder:text-text-muted/40 focus:border-accent focus:outline-none transition-colors"
          placeholder="+971 ..."
        />
      </div>

      {/* Audience */}
      <div>
        <label htmlFor="audience" className="block text-text-muted text-xs uppercase tracking-widest mb-2">
          I am a...
        </label>
        <select
          id="audience"
          name="audience"
          className="w-full bg-dark border border-dark-border/60 rounded-sm px-4 py-3 text-text text-sm focus:border-accent focus:outline-none transition-colors appearance-none"
        >
          <option value="">Select one</option>
          {AUDIENCES.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="timeline" className="block text-text-muted text-xs uppercase tracking-widest mb-2">
          Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          className="w-full bg-dark border border-dark-border/60 rounded-sm px-4 py-3 text-text text-sm focus:border-accent focus:outline-none transition-colors appearance-none"
        >
          <option value="">Select timeline</option>
          {TIMELINES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-text-muted text-xs uppercase tracking-widest mb-2">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full bg-dark border border-dark-border/60 rounded-sm px-4 py-3 text-text text-sm placeholder:text-text-muted/40 focus:border-accent focus:outline-none transition-colors resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-accent text-dark font-medium text-sm tracking-wide py-3 rounded-sm hover:bg-accent-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
