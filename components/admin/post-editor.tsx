"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Save } from "lucide-react"
import { createPost, updatePost, getPostById } from "@/app/actions/blog"
import { toast } from "@/hooks/use-toast"

interface PostEditorProps {
  postId?: string
}

export function PostEditor({ postId }: PostEditorProps) {
  const [formState, setFormState] = useState({
    title: "",
    excerpt: "",
    content: "",
    tags: "",
    published: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(!!postId)
  const router = useRouter()

  useEffect(() => {
    const fetchPost = async () => {
      if (postId) {
        try {
          const result = await getPostById(postId)
          if (result.success) {
            setFormState({
              title: result.post.title,
              excerpt: result.post.excerpt,
              content: result.post.content,
              tags: result.post.tags.join(", "),
              published: result.post.published,
            })
          } else {
            toast({
              title: "Error",
              description: result.message,
              variant: "destructive",
            })
            router.push("/admin/dashboard")
          }
        } catch (error) {
          toast({
            title: "Error",
            description: "Failed to fetch post",
            variant: "destructive",
          })
          router.push("/admin/dashboard")
        } finally {
          setIsFetching(false)
        }
      }
    }

    fetchPost()
  }, [postId, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setFormState((prev) => ({ ...prev, published: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData()
      formData.append("title", formState.title)
      formData.append("excerpt", formState.excerpt)
      formData.append("content", formState.content)
      formData.append("tags", formState.tags)
      formData.append("published", formState.published.toString())

      const result = postId ? await updatePost(postId, formData) : await createPost(formData)

      if (result.success) {
        toast({
          title: "Success",
          description: postId ? "Post updated successfully" : "Post created successfully",
        })
        router.push("/admin/dashboard")
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (isFetching) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <svg
          className="h-8 w-8 animate-spin text-primary"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
        </svg>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <div className="mb-8 flex items-center">
        <Button variant="ghost" onClick={() => router.push("/admin/dashboard")} className="mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
        <h1 className="text-3xl font-bold">{postId ? "Edit Post" : "Create New Post"}</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Post Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" value={formState.title} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                value={formState.excerpt}
                onChange={handleChange}
                rows={3}
                required
              />
              <p className="text-xs text-muted-foreground">
                A short summary of the post that will be displayed in the blog list.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                value={formState.content}
                onChange={handleChange}
                rows={15}
                required
              />
              <p className="text-xs text-muted-foreground">
                The main content of the post. Supports Markdown formatting.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                name="tags"
                value={formState.tags}
                onChange={handleChange}
                placeholder="Flutter, Mobile Development, UI/UX"
              />
              <p className="text-xs text-muted-foreground">Comma-separated list of tags.</p>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="published" checked={formState.published} onCheckedChange={handleSwitchChange} />
              <Label htmlFor="published">Publish post</Label>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={() => router.push("/admin/dashboard")}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <svg
                    className="mr-2 h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                  </svg>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  {postId ? "Update Post" : "Create Post"}
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

