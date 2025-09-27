import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohamed Alaa | Portfolio",
  description: "E-learning & Instructional Design Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-white">{children}</body>
    </html>
  );
}
