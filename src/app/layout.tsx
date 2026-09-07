import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Auto Uranium | An Auto Detailing Studio & Car Restoration | Prayagraj",
  description:
    "Auto Uranium (Viraj Trading - Est. 2006). Prayagraj's premier auto detailing, PPF, ceramic coating, paint restoration, and glass tinting studio. Experience showroom finish perfection.",
  keywords: [
    "Auto Uranium",
    "Auto Detailing Studio Prayagraj",
    "Car Modification Prayagraj",
    "PPF Paint Protection Film Allahabad",
    "Ceramic Coating Prayagraj",
    "Car Restoration Civil Lines",
    "AutoUranium Viraj Trading",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#06080c] text-gray-100 min-h-screen selection:bg-[#ff3847] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
