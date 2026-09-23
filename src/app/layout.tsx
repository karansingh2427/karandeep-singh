import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
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
      "Karandeep Singh — Global Project & Program Lead · Agentic AI in Life Sciences",
    template: "%s · Karandeep Singh",
  },
  description:
    "Global Project & Program Lead and Product Owner — agentic AI delivery and enablement in regulatory life sciences. Production workflows, platforms, and project write-ups.",
  openGraph: {
    title:
      "Karandeep Singh — Global Project & Program Lead · Agentic AI in Life Sciences",
    description:
      "Agentic AI systems in production for R&D and regulatory sciences — hours of manual work to minutes of extraction plus QC.",
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
      </body>
    </html>
  );
}
