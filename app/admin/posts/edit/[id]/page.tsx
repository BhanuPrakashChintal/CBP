import { PostEditor } from "@/components/admin/post-editor"
import type { Metadata } from "next"

interface EditPostPageProps {
  params: {
    id: string
  }
}

export const metadata: Metadata = {
  title: "Edit Post | Admin",
  description: "Edit an existing blog post",
}

export default function EditPostPage({ params }: EditPostPageProps) {
  return <PostEditor postId={params.id} />
}

