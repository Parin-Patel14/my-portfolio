import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { Interactive3DHero } from "@/components/ui/interactive-3d-hero";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parin Patel | Portfolio",
  description: "Personal portfolio showcasing my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="fixed inset-0 -z-10">
          <Interactive3DHero 
            className="absolute inset-0"
            title="Parin Patel"
            splineUrl="https://my.spline.design/nexbotrobotcharacterconcept-bff4bda5b563ed7cc7735ff3fe12a5c3/"
          />
        </div>
        <FloatingNavbar />
        {children}
      </body>
    </html>
  );
}
