"use server"

import fs from "fs/promises"
import path from "path"
import { v4 as uuidv4 } from "uuid"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

// Define the post type
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

// Path to the posts directory
const postsDirectory = path.join(process.cwd(), "data", "posts")

// Ensure the posts directory exists
async function ensureDirectoryExists() {
  try {
    await fs.access(postsDirectory)
  } catch (error) {
    await fs.mkdir(postsDirectory, { recursive: true })
  }
}

// Get all posts
export async function getAllPosts() {
  try {
    await ensureDirectoryExists()

    const fileNames = await fs.readdir(postsDirectory)
    const posts: Post[] = []

    for (const fileName of fileNames) {
      if (fileName.endsWith(".json")) {
        const filePath = path.join(postsDirectory, fileName)
        const fileContent = await fs.readFile(filePath, "utf8")
        const post = JSON.parse(fileContent) as Post
        posts.push(post)
      }
    }

    // Sort posts by createdAt date (newest first)
    posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    return { success: true, posts }
  } catch (error) {
    console.error("Error getting posts:", error)
    return { success: false, message: "Failed to get posts", posts: [] }
  }
}

// Get published posts
export async function getPublishedPosts() {
  const result = await getAllPosts()

  if (result.success) {
    const publishedPosts = result.posts.filter((post) => post.published)
    return { success: true, posts: publishedPosts }
  }

  return result
}

// Get a post by ID
export async function getPostById(id: string) {
  try {
    await ensureDirectoryExists()

    const filePath = path.join(postsDirectory, `${id}.json`)
    const fileContent = await fs.readFile(filePath, "utf8")
    const post = JSON.parse(fileContent) as Post

    return { success: true, post }
  } catch (error) {
    console.error("Error getting post:", error)
    return { success: false, message: "Failed to get post" }
  }
}

// Get a post by slug
export async function getPostBySlug(slug: string) {
  try {
    const result = await getAllPosts()

    if (result.success) {
      const post = result.posts.find((post) => post.slug === slug)

      if (post) {
        return { success: true, post }
      }

      return { success: false, message: "Post not found" }
    }

    return { success: false, message: "Failed to get posts" }
  } catch (error) {
    console.error("Error getting post by slug:", error)
    return { success: false, message: "Failed to get post" }
  }
}

// Create a new post
export async function createPost(formData: FormData) {
  try {
    // Check if user is authenticated
    const token = cookies().get("admin_token")?.value

    if (!token || token !== process.env.ADMIN_TOKEN) {
      return { success: false, message: "Unauthorized" }
    }

    await ensureDirectoryExists()

    const title = formData.get("title") as string
    const excerpt = formData.get("excerpt") as string
    const content = formData.get("content") as string
    const tagsString = formData.get("tags") as string
    const published = formData.get("published") === "true"

    if (!title || !excerpt || !content) {
      return { success: false, message: "Title, excerpt, and content are required" }
    }

    const tags = tagsString
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")

    const id = uuidv4()
    const now = new Date().toISOString()

    const post: Post = {
      id,
      title,
      slug,
      excerpt,
      content,
      tags,
      published,
      createdAt: now,
      updatedAt: now,
    }

    const filePath = path.join(postsDirectory, `${id}.json`)
    await fs.writeFile(filePath, JSON.stringify(post, null, 2))

    revalidatePath("/blog")
    revalidatePath("/admin/dashboard")

    return { success: true, post }
  } catch (error) {
    console.error("Error creating post:", error)
    return { success: false, message: "Failed to create post" }
  }
}

// Update a post
export async function updatePost(id: string, formData: FormData) {
  try {
    // Check if user is authenticated
    const token = cookies().get("admin_token")?.value

    if (!token || token !== process.env.ADMIN_TOKEN) {
      return { success: false, message: "Unauthorized" }
    }

    await ensureDirectoryExists()

    const filePath = path.join(postsDirectory, `${id}.json`)
    const fileContent = await fs.readFile(filePath, "utf8")
    const existingPost = JSON.parse(fileContent) as Post

    const title = formData.get("title") as string
    const excerpt = formData.get("excerpt") as string
    const content = formData.get("content") as string
    const tagsString = formData.get("tags") as string
    const published = formData.get("published") === "true"

    if (!title || !excerpt || !content) {
      return { success: false, message: "Title, excerpt, and content are required" }
    }

    const tags = tagsString
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)

    // Only update the slug if the title has changed
    const slug =
      title !== existingPost.title
        ? title
            .toLowerCase()
            .replace(/[^\w\s]/gi, "")
            .replace(/\s+/g, "-")
        : existingPost.slug

    const updatedPost: Post = {
      ...existingPost,
      title,
      slug,
      excerpt,
      content,
      tags,
      published,
      updatedAt: new Date().toISOString(),
    }

    await fs.writeFile(filePath, JSON.stringify(updatedPost, null, 2))

    revalidatePath("/blog")
    revalidatePath(`/blog/${slug}`)
    revalidatePath("/admin/dashboard")

    return { success: true, post: updatedPost }
  } catch (error) {
    console.error("Error updating post:", error)
    return { success: false, message: "Failed to update post" }
  }
}

// Delete a post
export async function deletePost(id: string) {
  try {
    // Check if user is authenticated
    const token = cookies().get("admin_token")?.value

    if (!token || token !== process.env.ADMIN_TOKEN) {
      return { success: false, message: "Unauthorized" }
    }

    await ensureDirectoryExists()

    const filePath = path.join(postsDirectory, `${id}.json`)
    await fs.unlink(filePath)

    revalidatePath("/blog")
    revalidatePath("/admin/dashboard")

    return { success: true }
  } catch (error) {
    console.error("Error deleting post:", error)
    return { success: false, message: "Failed to delete post" }
  }
}

