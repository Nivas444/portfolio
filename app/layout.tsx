import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nivas M | AI Engineer & Edge AI Specialist",
  description:
    "Portfolio of Nivas M — AI Engineer specializing in computer vision, edge AI (NVIDIA Jetson, Raspberry Pi), YOLOv8, AI agents, and production SaaS platforms.",
  keywords: ["Nivas M", "AI Engineer", "Computer Vision", "Edge AI", "YOLOv8", "NVIDIA Jetson", "FastAPI", "AI Agents", "SaaS", "Portfolio"],
  authors: [{ name: "Nivas M", url: "https://github.com/Nivas7" }],
  creator: "Nivas M",
  openGraph: {
    type: "website",
    title: "Nivas M | AI Engineer & Edge AI Specialist",
    description: "AI engineer building real-world computer vision, edge AI, and B2B SaaS solutions.",
    siteName: "Nivas M Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nivas M | AI Engineer",
    description: "AI engineer · Computer Vision · Edge AI",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
