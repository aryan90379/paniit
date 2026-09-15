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
  title: "PAN IIT Andhra Pradesh Summit 2026 | India's Flagship AI Summit",
  description:
    "The PanIIT Andhra Pradesh Summit in collaboration with the Government of Andhra Pradesh is a premier gathering of the global IIT ecosystem — 500,000+ alumni across 23 IITs shaping technology, business, and policy worldwide.",
  openGraph: {
    title: "PAN IIT Andhra Pradesh Summit 2026 | India's Flagship AI Summit",
    description:
      "The PanIIT Andhra Pradesh Summit in collaboration with the Government of Andhra Pradesh is a premier gathering of the global IIT ecosystem.",
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
