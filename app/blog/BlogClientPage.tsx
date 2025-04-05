"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/page-header"
import { FadeIn } from "@/components/fade-in"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"

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

interface BlogClientPageProps {
  initialPosts?: Post[]
}

export default function BlogClientPage({ initialPosts = [] }: BlogClientPageProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [posts, setPosts] = useState<Post[]>(initialPosts)

  // Get all unique tags from posts
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)))

  // Filter posts by selected tag
  const filteredPosts = selectedTag ? posts.filter((post) => post.tags.includes(selectedTag)) : posts

  // Calculate read time (approx. 200 words per minute)
  const getReadTime = (content: string) => {
    const words = content.split(/\s+/).length
    const minutes = Math.ceil(words / 200)
    return `${minutes} min read`
  }

  return (
    <div className="container pb-24 pt-16">
      <PageHeader title="Blog" description="Articles, tutorials, and insights on Flutter, Python, and technology." />

      <FadeIn className="mt-8">
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedTag === null ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedTag(null)}
          >
            All
          </Badge>
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </FadeIn>

      <div className="mt-12 space-y-8">
        {filteredPosts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <h3 className="text-xl font-semibold">No posts found</h3>
            {selectedTag ? (
              <p className="mt-2 text-muted-foreground">
                No posts found with the tag "{selectedTag}". Try selecting a different tag.
              </p>
            ) : (
              <p className="mt-2 text-muted-foreground">Check back soon for new articles and tutorials.</p>
            )}
          </div>
        ) : (
          filteredPosts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.1}>
              <motion.article
                className="group rounded-lg border p-6 transition-all hover:border-primary hover:bg-primary/5"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-wrap items-center gap-2">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-muted-foreground">{getReadTime(post.content)}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="mt-4 text-2xl font-semibold transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                </Link>
                <p className="mt-2 text-sm text-muted-foreground">{formatDate(post.createdAt)}</p>
                <p className="mt-4 text-muted-foreground">{post.excerpt}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  Read article
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.article>
            </FadeIn>
          ))
        )}
      </div>
    </div>
  )
}

