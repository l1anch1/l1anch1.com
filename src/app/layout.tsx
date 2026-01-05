import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MeshGradientBackground from "@/components/MeshGradientBackground";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Li Anchi | Portfolio",
  description: "HCI Researcher & AI Engineer - Portfolio with iOS VisionOS liquid glass aesthetic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          <MeshGradientBackground />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
