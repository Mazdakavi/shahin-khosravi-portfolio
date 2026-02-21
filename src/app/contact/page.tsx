import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";
import { WHATSAPP_URL } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Shahin Khosravi for villa interior fit-out, design packages, or site supervision in Dubai.",
  openGraph: {
    title: "Contact | Shahin Khosravi",
    description:
      "Get in touch with Shahin Khosravi for villa interior fit-out, design packages, or site supervision in Dubai.",
  },
};

export default function ContactPage() {
  return (
    <>
      <SectionWrapper className="pt-32 md:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left column — info */}
          <div>
            <p className="text-accent text-xs uppercase tracking-[0.2em] mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-text tracking-tight mb-4">
              Let&apos;s talk
            </h1>
            <p className="text-text-muted text-sm leading-relaxed mb-10 max-w-md">
              Whether you&apos;re planning a villa fit-out, need a drawing
              package, or want site supervision for an ongoing project — reach
              out. I respond within 24 hours.
            </p>

            {/* WhatsApp — dominant */}
            <div className="mb-10">
              <p className="text-text-muted text-xs uppercase tracking-widest mb-3">
                Preferred
              </p>
              <Button href={WHATSAPP_URL} variant="primary" size="lg" external>
                WhatsApp — +971 50 113 8078
              </Button>
            </div>

            {/* Other methods */}
            <div className="space-y-6">
              <div>
                <p className="text-text-muted text-xs uppercase tracking-widest mb-2">
                  Email
                </p>
                <a
                  href="mailto:mazdakavi@gmail.com"
                  className="text-text text-sm hover:text-accent transition-colors"
                >
                  mazdakavi@gmail.com
                </a>
              </div>

              <div>
                <p className="text-text-muted text-xs uppercase tracking-widest mb-2">
                  Phone
                </p>
                <a
                  href="tel:+971501138078"
                  className="text-text text-sm hover:text-accent transition-colors"
                >
                  +971 50 113 8078
                </a>
              </div>

              <div>
                <p className="text-text-muted text-xs uppercase tracking-widest mb-2">
                  LinkedIn
                </p>
                <a
                  href="https://linkedin.com/in/shahin-khosravi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text text-sm hover:text-accent transition-colors"
                >
                  linkedin.com/in/shahin-khosravi
                </a>
              </div>

              <div>
                <p className="text-text-muted text-xs uppercase tracking-widest mb-2">
                  Location
                </p>
                <p className="text-text text-sm">Dubai, UAE</p>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div>
            <p className="text-text-muted text-xs uppercase tracking-widest mb-4">
              Or send a message
            </p>
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
