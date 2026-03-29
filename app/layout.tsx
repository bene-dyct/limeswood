import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import "./home.css";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import WhatsAppBubble from "./components/WhatsAppBubble";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", // optional CSS variable
});

export const metadata: Metadata = {
  title: "Limeswood International",
  description: "Engineering Excellence in Industrial Solutions",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },

  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ScrollToTop />
        <Navbar />
        <main className="bg-slate-50">{children}</main>
        <WhatsAppBubble />
        <Footer/>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
