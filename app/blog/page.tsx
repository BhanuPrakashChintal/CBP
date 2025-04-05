import { getPublishedPosts } from "@/app/actions/blog"
import BlogClientPage from "./BlogClientPage"

export const metadata = {
  title: "Blog | Chintal Bhanu Prakash",
  description: "Articles, tutorials, and insights on Flutter, Python, and technology",
}

export default async function BlogPage() {
  const result = await getPublishedPosts()
  const posts = result.success ? result.posts : []

  return <BlogClientPage initialPosts={posts} />
}

