import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rishabhjain.dev";

export const viewport: Viewport = {
  themeColor: "#090B12",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Rishabh Jain | CS Student, Cyber Security & AI Enthusiast",
  description:
    "Building secure, intelligent, and scalable software through real-world engineering projects while continuously learning Cyber Security, Artificial Intelligence, and Full Stack Development.",
  keywords: [
    "Rishabh Jain",
    "Computer Science Student",
    "Cyber Security Enthusiast",
    "AI Explorer",
    "Full Stack Developer",
    "Software Engineer Portfolio",
    "Security Engineering",
    "AI Tools",
    "Next.js Portfolio",
    "Web Developer India"
  ],
  authors: [{ name: "Rishabh Jain", url: siteUrl }],
  creator: "Rishabh Jain",
  publisher: "Rishabh Jain",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Rishabh Jain | CS Student, Cyber Security & AI Enthusiast",
    description:
      "Building secure, intelligent, and scalable software through real-world engineering projects while continuously learning Cyber Security, Artificial Intelligence, and Full Stack Development.",
    url: "./",
    siteName: "Rishabh Jain Portfolio OS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishabh Jain | CS Student, Cyber Security & AI Enthusiast",
    description:
      "Building secure, intelligent, and scalable software through real-world engineering projects while continuously learning Cyber Security, Artificial Intelligence, and Full Stack Development.",
    creator: "@rishabhjain",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="bg-bg-primary text-text-primary font-sans min-h-full flex flex-col">
        <ScrollProgress />
        <JsonLd />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
