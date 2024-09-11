import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MIA empathetic ai counselor",
  description: "Chat with MIA, an empathetic AI counselor trained to help you through tough times.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
          <body className={`bg-[#F9F5EF]${inter.className} flex flex-col h-full`}>
          <main>{children}</main>
          <Toaster />
          </body>
      </html>
  );
}
