import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans, JetBrains_Mono } from "next/font/google";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Mohamed Alaa — Instructional Designer",
  description:
    "I design learning people actually want to finish: learning games, scenario-based e-learning courses and storyboards. Instructional designer based in Cairo.",
  openGraph: {
    title: "Mohamed Alaa — Instructional Designer",
    description: "Learning games, interactive courses and storyboards you can actually play.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FBF5EA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} data-scroll-behavior="smooth">
      <body className="paper-dots font-body">
        <a href="#main" className="btn btn-dark btn-sm fixed left-4 top-3 z-[60] -translate-y-24 focus:translate-y-0">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
