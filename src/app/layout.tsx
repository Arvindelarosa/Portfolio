import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arvin M. Dela Rosa | Full-Stack Developer",
  description: "Professional portfolio of Arvin M. Dela Rosa showcasing web development projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${geist.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
