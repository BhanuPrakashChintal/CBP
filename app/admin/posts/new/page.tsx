import { PostEditor } from "@/components/admin/post-editor"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Create New Post | Admin",
  description: "Create a new blog post",
}

export default function NewPostPage() {
  return <PostEditor />
}

