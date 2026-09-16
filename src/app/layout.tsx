import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andhra's Resilient DeepTech Decade: Anchored by PanIIT",
  description:
    "Andhra's DeepTech Decade. Join us in shaping the future of innovation, investment, and talent.",
  openGraph: {
    title: "Andhra's Resilient DeepTech Decade: Anchored by PanIIT",
    description:
      "Andhra's DeepTech Decade. Join us in shaping the future of innovation, investment, and talent.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
