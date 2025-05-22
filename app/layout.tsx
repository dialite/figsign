import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Script from "next/script"; // Import next/script
import "./globals.css";
import { Room } from "./Room"; // Keep the Room component

const workSans = Work_Sans({ 
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"]
});

export const metadata: Metadata = {
  title: "Figsign",
  description: "A simple Figma clone that uses liveblocks for real-time collaboration and Fabrics.js for canvas functionality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Web Analytics Tracking Script */}
        <Script
          defer
          data-domain="figsign-2kej7opft-dialites-projects.vercel.app"
          src="https://web-analytics-gray.vercel.app/tracking-script.js"
          strategy="afterInteractive" // Ensures script loads after page content is rendered
        />
      </head>
      <body className={`${workSans.className} bg-primary-grey-200`}>
        <Room>
          {children}
        </Room>        
      </body>
    </html>
  );
}
