import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Touhidul Islam Chayan - Portfolio",
  description: "Software Engineer specializing in front-end development, UI/UX design, and machine learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-light dark:bg-dark text-primary dark:text-secondary`}
      >
        <Navbar />
        <div className="pt-16 min-h-screen">
          {children}
        </div>
        <ThemeToggle />
        <Footer />
      </body>
    </html>
  );
}
