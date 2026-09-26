import type { Metadata } from "next";
import { Fraunces, Bricolage_Grotesque, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-spline-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anchi Li | AI & Software Engineer",
  description:
    "李桉弛（Anchi Li）— AI and software engineer building evaluated LLM systems, coding agents, retrieval pipelines, and production-ready applications.",
  keywords: [
    "Anchi Li",
    "李桉弛",
    "AI Engineer",
    "Software Engineer",
    "LLM",
    "AI for Software Engineering",
    "RAG",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"; window.scrollTo(0, 0);`,
          }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${bricolage.variable} ${splineMono.variable} font-sans antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
