"use client"

import type React from "react"

import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink, Download } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/fade-in"
import { useState } from "react"
import { sendContactEmail } from "@/app/actions/contact"
import { toast } from "@/hooks/use-toast"

export default function ContactPageClient() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormState((prev) => ({ ...prev, [id]: value }))

    // Clear error when field is edited
    if (fieldErrors[id]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[id]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFieldErrors({})

    try {
      const result = await sendContactEmail(formState)

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          variant: "default",
        })

        // Reset form
        setFormState({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        if (result.errors) {
          const errors: Record<string, string> = {}
          result.errors.forEach((error) => {
            errors[error.field] = error.message
          })
          setFieldErrors(errors)
        }

        toast({
          title: "Error",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container pb-24 pt-16">
      <PageHeader
        title="Contact Me"
        description="Have a project in mind or just want to chat? I'd love to hear from you."
      />

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        <FadeIn direction="right">
          <div>
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form and I'll get back to you as soon as possible.
            </p>

            <div className="mt-8 space-y-8">
              <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:chintalbhanuprakash30oct@gmail.com"
                    className="mt-1 text-muted-foreground hover:text-primary"
                  >
                    chintalbhanuprakash30oct@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a href="tel:+916304725752" className="mt-1 text-muted-foreground hover:text-primary">
                    +91 6304725752
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="mt-1 text-muted-foreground">Ramanthapur, Hyderabad, Telangana, India - 500013</p>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Download className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Resume</h3>
                  <a
                    href="/Chintal_Bhanu_Prakash_Resume.pdf"
                    download
                    className="mt-1 inline-flex items-center text-primary hover:underline"
                  >
                    Download my resume
                    <Download className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="mt-12">
              <h3 className="font-medium">Connect With Me</h3>
              <div className="mt-4 flex gap-4">
                <motion.a
                  href="https://github.com/bhanuprakashchintal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-muted p-3 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/bhanuprakashchintal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-muted p-3 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://chintalbhanuprakash.flutterflow.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-muted p-3 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  aria-label="Portfolio"
                >
                  <ExternalLink className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://www.credly.com/users/bhanu-prakash.2e00a257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-muted p-3 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  aria-label="Credly"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left">
          <motion.form
            className="space-y-6 rounded-lg border p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  value={formState.firstName}
                  onChange={handleChange}
                  required
                  className={fieldErrors.firstName ? "border-red-500" : ""}
                />
                {fieldErrors.firstName && <p className="text-xs text-red-500">{fieldErrors.firstName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  value={formState.lastName}
                  onChange={handleChange}
                  className={fieldErrors.lastName ? "border-red-500" : ""}
                />
                {fieldErrors.lastName && <p className="text-xs text-red-500">{fieldErrors.lastName}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                value={formState.email}
                onChange={handleChange}
                required
                className={fieldErrors.email ? "border-red-500" : ""}
              />
              {fieldErrors.email && <p className="text-xs text-red-500">{fieldErrors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Project Inquiry"
                value={formState.subject}
                onChange={handleChange}
                required
                className={fieldErrors.subject ? "border-red-500" : ""}
              />
              {fieldErrors.subject && <p className="text-xs text-red-500">{fieldErrors.subject}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project, timeline, and budget..."
                rows={5}
                value={formState.message}
                onChange={handleChange}
                required
                className={fieldErrors.message ? "border-red-500" : ""}
              />
              {fieldErrors.message && <p className="text-xs text-red-500">{fieldErrors.message}</p>}
            </div>

            <Button type="submit" className="w-full group" disabled={isSubmitting}>
              {isSubmitting ? (
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
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  >
                    <path d="M22 2L11 13"></path>
                    <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                  </svg>
                </>
              )}
            </Button>
          </motion.form>
        </FadeIn>
      </div>
    </div>
  )
}

