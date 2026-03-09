export interface SocialLinks {
  twitter: string;
  github: string;
  linkedin: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: string;
  favicon: string;
  locale: string;
  themeColor: string;
  keywords: string[];
  social: SocialLinks;
  ogImage: string;
}
