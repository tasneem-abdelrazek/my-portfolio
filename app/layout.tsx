import type { Metadata } from "next";
import { Inter, Tajawal, Cairo } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

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

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tasneem's Portfolio",
  description: "Created with Next.js 16",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* #0d0d1f */}
      {/* #e964c1ff */}
      {/* #ab488eff */}
      <body className={`${inter.className} ${tajawal.className} antialiased 
      bg-[#e964c1ff] text-white`}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
