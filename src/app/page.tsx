'use client'

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <motion.div animate={{ y: -100 }} transition={{ delay: 1.2 }} className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Icons.logo className="h-16 w-16" />
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
        <div className="flex gap-4">
          <Link href={siteConfig.links.github} target="_blank" className={cn(buttonVariants({ size: "default" }))}>
            Get Started
          </Link>
          <ModeToggle />
        </div>
      </motion.div>
    </main>
  )
}

