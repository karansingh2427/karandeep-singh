import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Karandeep Singh — Life sciences, regulatory digital transformation",
    template: "%s · Karandeep Singh",
  },
  description:
    "Global Project & Program Lead at Bayer. AI systems deployed into life sciences regulatory workflows, and the label and registration programmes around them.",
  openGraph: {
    title:
      "Karandeep Singh — Life sciences, regulatory digital transformation",
    description:
      "AI systems in life sciences regulatory work, plus the label-data platform and AgriGuide.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
