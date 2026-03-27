import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Software Development Company | App Development | Cubix",
  description:
    "Cubix is a digital transformation company that provides software development, mobile app development, product development, and game development services.",
  openGraph: {
    title: "Software Development Company | App Development | Cubix",
    description:
      "Cubix is a digital transformation company that provides software development, mobile app development, product development, and game development services.",
    url: "https://www.cubix.co/",
    siteName: "Cubix",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Software Development Company | App Development | Cubix",
    description:
      "Cubix is a digital transformation company that provides software development, mobile app development, product development, and game development services.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-[Manrope,sans-serif] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
