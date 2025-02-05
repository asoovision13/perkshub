import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/reusables/header";
import { GeistSans } from 'geist/font/sans';
import { Montserrat } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/reusables/Footer";
import { prefix } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',  // <--------- 👈
})


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Perkshub",
  description: "generate your game coins now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <head>
      <link rel="icon" href={`${prefix}/logo1.svg`} />
      </head>
      <body
         className={`${montserrat.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
