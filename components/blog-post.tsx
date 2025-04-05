"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/fade-in"
import { formatDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"

interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  tags: string[]
  published: boolean
  createdAt: string
  updatedAt: string
}

interface BlogPostProps {
  post: Post
}

export function BlogPost({ post }: BlogPostProps) {
  // Calculate read time (approx. 200 words per minute)
  const getReadTime = (content: string) => {
    const words = content.split(/\s+/).length
    const minutes = Math.ceil(words / 200)
    return `${minutes} min read`
  }

  return (
    <div className="container pb-24 pt-16">
      <FadeIn>
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>
        </Button>
      </FadeIn>

      <FadeIn>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
              {tag}
            </span>
          ))}
          <span className="text-xs text-muted-foreground">{getReadTime(post.content)}</span>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-muted-foreground">
          Published on {formatDate(post.createdAt)}
          {post.updatedAt !== post.createdAt && ` • Updated on ${formatDate(post.updatedAt)}`}
        </p>
      </FadeIn>

      <motion.div
        className="prose prose-lg dark:prose-invert mt-12 max-w-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </motion.div>

      <FadeIn delay={0.3} className="mt-16">
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold">Share this post</h2>
          <p className="mt-2 text-muted-foreground">
            If you found this article helpful, please consider sharing it with others.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button variant="outline" asChild>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(
                  `https://yourwebsite.com/blog/${post.slug}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  `https://yourwebsite.com/blog/${post.slug}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  `https://yourwebsite.com/blog/${post.slug}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </Button>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}

