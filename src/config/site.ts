import type { SiteConfig } from "@/types/site-config";
import { env } from "@/env";

export const siteConfig: SiteConfig = {
  name: "Uroxi Admin Panel",
  description: "A modern admin panel built with Next.js, TypeScript, and Tailwind CSS.",
  url: env.NEXT_PUBLIC_SITE_URL,
  author: "",
  locale: "en",
  favicon: "/logo.svg",
  themeColor: "#33B4EA",
  keywords: ["nextjs", "typescript", "tailwindcss", "boilerplate", "starter"],
  social: {
    twitter: "",
    github: "",
    linkedin: ""
  },
  ogImage: "/og.jpg"
} as const;
