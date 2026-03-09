import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import { seoConfig } from "@/config/seo";

import { Toaster } from "@/ui";
import { Providers } from "@/providers";

import "@/styles/globals.css";

const urbanistSans = Urbanist({
  variable: "--font-urbanist-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = seoConfig;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanistSans.variable} flex min-h-screen w-full flex-col antialiased`}>
        <Providers>
          <main className="flex-1">{children}</main>
          <Toaster richColors />
        </Providers>
      </body>
    </html>
  );
}
