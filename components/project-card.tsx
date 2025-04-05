"use client"

import Link from "next/link"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
  external?: boolean
}

export function ProjectCard({ title, description, tags, image, link, external = false }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }} className="h-full">
      <Link
        href={link}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : ""}
        className="group relative flex h-full flex-col overflow-hidden rounded-lg border"
      >
        <div className="aspect-video overflow-hidden">
          <motion.img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap gap-2 pb-4">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="rounded-full bg-muted px-3 py-1 text-xs">+{tags.length - 3} more</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">{title}</h3>
            {external && <ExternalLink className="h-4 w-4 text-muted-foreground" />}
          </div>
          <p className="mt-2 flex-1 text-muted-foreground line-clamp-3">{description}</p>
          <div className="mt-4 flex items-center text-sm font-medium text-primary">
            View project
            <motion.div className="ml-1" initial={{ x: 0 }} whileHover={{ x: 3 }} transition={{ duration: 0.3 }}>
              {external ? <ExternalLink className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

