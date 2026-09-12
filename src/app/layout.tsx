import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saptaparni Saha - AI & Machine Learning Engineer",
  description: "Editorial Luxury Portfolio of Saptaparni Saha, AI Engineer & Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-[#25332B] text-[#F5FAF7] antialiased min-h-screen selection:bg-[#95C7A4]/30 selection:text-[#F5FAF7]">
        {children}
      </body>
    </html>
  );
}
