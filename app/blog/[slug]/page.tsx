import { getPostBySlug, getPublishedPosts } from "@/app/actions/blog"
import { BlogPost } from "@/components/blog-post"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const result = await getPostBySlug(params.slug)

  if (!result.success) {
    return {
      title: "Post Not Found | Chintal Bhanu Prakash",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${result.post.title} | Chintal Bhanu Prakash`,
    description: result.post.excerpt,
  }
}

export async function generateStaticParams() {
  const result = await getPublishedPosts()

  if (!result.success) {
    return []
  }

  return result.posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const result = await getPostBySlug(params.slug)

  if (!result.success) {
    notFound()
  }

  return <BlogPost post={result.post} />
}

