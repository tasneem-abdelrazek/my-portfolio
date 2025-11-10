import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

// fonts
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tasneem's Portfolio",
  description: "Created with Next.js 16",
  other: {
    "google-site-verification": "sTT9l0Fz0VJOj7NP6nQsfIPJqPfSyj0xXcPGoM8OUI8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${tajawal.className} antialiased bg-[#e964c1ff] text-white`}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
