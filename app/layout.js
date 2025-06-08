import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alex Johnson - Full Stack Developer & UI/UX Designer",
  description:
    "Passionate developer with 5+ years of experience creating beautiful, functional web applications. Portfolio showcasing modern web development projects.",
  keywords:
    "Full Stack Developer, UI/UX Designer, React, Next.js, Portfolio, Web Development",
  authors: [{ name: "Alex Johnson" }],
  creator: "Alex Johnson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexjohnson.dev",
    title: "Alex Johnson - Full Stack Developer & UI/UX Designer",
    description:
      "Passionate developer creating beautiful, functional web applications",
    siteName: "Alex Johnson Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Johnson - Full Stack Developer & UI/UX Designer",
    description:
      "Passionate developer creating beautiful, functional web applications",
    creator: "@alexjohnson",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
