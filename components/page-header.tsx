"use client"

import { motion } from "framer-motion"
import { AnimatedText } from "@/components/animated-text"

interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="space-y-6 text-center">
      <AnimatedText text={title} className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl" delay={0.1} />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
      >
        {description}
      </motion.p>
    </div>
  )
}

