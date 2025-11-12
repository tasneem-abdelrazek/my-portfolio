import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

// Optimized fonts with display: swap
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "Tasneem Abdelrazek | Frontend Developer",
  description: "Frontend Developer passionate about crafting dynamic, responsive, and visually appealing websites using React and modern design frameworks.",
  keywords: ["Frontend Developer", "React Developer", "Web Developer", "UI/UX", "Next.js", "TypeScript"],
  authors: [{ name: "Tasneem Abdelrazek" }],
  creator: "Tasneem Abdelrazek",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://my-portfolio-nu-snowy-64.vercel.app/",
    title: "Tasneem Abdelrazek | Frontend Developer",
    description: "Frontend Developer passionate about crafting dynamic, responsive, and visually appealing websites.",
    siteName: "Tasneem's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tasneem Abdelrazek | Frontend Developer",
    description: "Frontend Developer passionate about crafting dynamic, responsive, and visually appealing websites.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "sTT9l0Fz0VJOj7NP6nQsfIPJqPfSyj0xXcPGoM8OUI8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${tajawal.variable}`}>
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Theme color */}
        {/* <meta name="theme-color" content="#e964c1" /> */}
      </head>
      <body className={`${inter.className} ${tajawal.className} antialiased bg-[#e964c1ff] text-white`}>
        <ResponsiveNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
