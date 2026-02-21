import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Villa Interior Fit-Out + Site Supervision in Dubai | Shahin Khosravi",
    template: "%s | Shahin Khosravi",
  },
  description:
    "Architect & interior designer in Dubai. Villa interior fit-out + site supervision with clean detailing, joinery and lighting execution.",
  metadataBase: new URL("https://shahinkhosravi.com"),
  openGraph: {
    title:
      "Villa Interior Fit-Out + Site Supervision in Dubai | Shahin Khosravi",
    description:
      "Architect & interior designer in Dubai. Villa interior fit-out + site supervision with clean detailing, joinery and lighting execution.",
    url: "https://shahinkhosravi.com",
    siteName: "Shahin Khosravi",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Villa Interior Fit-Out + Site Supervision in Dubai | Shahin Khosravi",
    description:
      "Architect & interior designer in Dubai. Villa interior fit-out + site supervision with clean detailing, joinery and lighting execution.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Plausible Analytics — uncomment and add domain when ready */}
        {/* <script defer data-domain="shahinkhosravi.com" src="https://plausible.io/js/script.js" /> */}

        {/* GA4 — uncomment and add measurement ID when ready */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" /> */}
        {/* <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');` }} /> */}
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
