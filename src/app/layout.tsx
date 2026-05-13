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
  metadataBase: new URL("https://immicrm.samiracloud.com"),

  title: {
    default: "ImmiCRM | Immigration Consultancy CRM",
    template: "%s | ImmiCRM",
  },

  description:
    "ImmiCRM by Samira Cloud is a modern immigration consultancy CRM system for managing leads, clients, visa information, appointments, payments, follow-ups, and staff operations.",

  keywords: [
    "Immigration CRM",
    "Visa Consultancy CRM",
    "Immigration Consultancy Software",
    "CRM for Visa Agency",
    "Visa Office Management System",
    "Immigration Software Qatar",
    "Lead Management CRM",
    "Consultancy CRM",
    "ImmiCRM",
    "Samira Cloud",
  ],

  authors: [{ name: "Samira Cloud" }],
  creator: "Samira Cloud",
  publisher: "Samira Cloud",

  openGraph: {
    title: "ImmiCRM | Immigration Consultancy CRM",
    description:
      "Modern CRM platform for immigration and visa consultancy offices.",
    url: "https://immicrm.samiracloud.com",
    siteName: "ImmiCRM",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ImmiCRM | Immigration Consultancy CRM",
    description:
      "CRM system for immigration consultancy offices by Samira Cloud.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}