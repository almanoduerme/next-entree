import { SiteConfig } from "@/types"
import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Next Entree",
  author: "almanoduerme",
  description: "Next.js 14+ starter template with app router, shadcn/ui, typesafe env, icons, configs setup and framer motion.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://www.gomeznahuel.com.ar",
  },
  links: {
    github: "https://github.com/almanoduerme/next-entree",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
