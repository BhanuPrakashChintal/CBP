"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, ExternalLink, Mail, Phone, MapPin } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <FadeIn>
            <div>
              <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                <span className="text-primary">CBP</span>
                <span>Chintal Bhanu Prakash</span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Flutter Developer and UI/UX enthusiast specializing in building exceptional digital experiences.
              </p>
              <div className="mt-6 flex gap-4">
                <motion.a
                  href="https://github.com/bhanuprakashchintal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  whileHover={{ y: -3 }}
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/bhanuprakashchintal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  whileHover={{ y: -3 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://chintalbhanuprakash.flutterflow.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  whileHover={{ y: -3 }}
                  aria-label="Portfolio"
                >
                  <ExternalLink className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Pages</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-muted-foreground transition-colors hover:text-primary">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/stack" className="text-muted-foreground transition-colors hover:text-primary">
                    Stack
                  </Link>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Content</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/thoughts" className="text-muted-foreground transition-colors hover:text-primary">
                    Thoughts
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground transition-colors hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:chintalbhanuprakash30oct@gmail.com" className="hover:text-primary">
                    chintalbhanuprakash30oct@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+916304725752" className="hover:text-primary">
                    +91 6304725752
                  </a>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span>Hyderabad, Telangana, India</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {currentYear} Chintal Bhanu Prakash. All rights reserved.</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}

