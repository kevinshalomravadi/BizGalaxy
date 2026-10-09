import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BIZGALAXY — AI Employees for Every Business",
  description:
    "One intelligent platform to manage, grow and automate your business. BizGalaxy gives every business a digital employee that understands operations, helps manage customers, creates marketing, and finds new opportunities to grow.",
  keywords: [
    "BizGalaxy",
    "AI Employee",
    "Veyra",
    "business management system",
    "AI for salons",
    "AI for restaurants",
    "AI for bakeries",
    "local business automation",
    "POS software",
    "customer retention AI"
  ],
  authors: [{ name: "BizGalaxy Team" }],
  creator: "BizGalaxy",
  publisher: "BizGalaxy Inc.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bizgalaxy.io",
    title: "BIZGALAXY — AI Employees for Every Business",
    description:
      "One intelligent platform to manage, grow and automate your business. Give your business an AI employee.",
    siteName: "BizGalaxy",
  },
  twitter: {
    card: "summary_large_image",
    title: "BIZGALAXY — AI Employees for Every Business",
    description:
      "One intelligent platform to manage, grow and automate your business. Give your business an AI employee.",
    creator: "@bizgalaxy",
  },
};

export const viewport: Viewport = {
  themeColor: "#06050b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌌</text></svg>" />
      </head>
      <body className="min-h-screen bg-[#06050b] text-[#f8fafc] antialiased selection:bg-purple-600 selection:text-white relative">
        {children}
      </body>
    </html>
  );
}
