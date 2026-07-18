import "../styles/globals.css";
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import BackgroundFX from "@/components/BackgroundFX";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Mohamed Alaa — Instructional Designer",
  description:
    "Interactive e-learning, instructional design and gamified learning experiences by Mohamed Alaa.",
  openGraph: {
    title: "Mohamed Alaa | Instructional Designer & E-learning Specialist",
    description:
      "Interactive e-learning, instructional design and gamified learning experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="bg-void text-ink font-body">
        <BackgroundFX />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
