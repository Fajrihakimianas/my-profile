import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fajri Hakimi Anas - Full Stack Developer",
  description:
    "Passionate developer with 5+ years of experience creating beautiful, functional web applications. Portfolio showcasing modern web development projects.",
  keywords: "Full Stack Developer, React, Next.js, Portfolio, Web Development",
  authors: [{ name: "Fajri Hakimi Anas" }],
  creator: "Fajri Hakimi Anas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fajrihakimianas.dev",
    title: "Fajri Hakimi Anas - Full Stack Developer",
    description:
      "Passionate developer creating beautiful, functional web applications",
    siteName: "Fajri Hakimi Anas Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fajri Hakimi Anas - Full Stack Developer",
    description:
      "Passionate developer creating beautiful, functional web applications",
    creator: "@fajrihakimianas",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
