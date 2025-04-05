"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/page-header"
import { FadeIn } from "@/components/fade-in"

export default function ThoughtsPageClient() {
  const thoughts = [
    {
      title: "The Future of Cross-Platform Development",
      date: "July 10, 2023",
      excerpt:
        "Exploring how Flutter and other cross-platform frameworks are changing the landscape of mobile app development.",
      tags: ["Flutter", "Cross-Platform", "Mobile Development"],
    },
    {
      title: "UI/UX Principles for Mobile Applications",
      date: "June 22, 2023",
      excerpt:
        "Discussing essential design principles that create intuitive and engaging mobile application interfaces.",
      tags: ["UI/UX", "Mobile Design", "User Experience"],
    },
    {
      title: "Integrating AI in Mobile Applications",
      date: "May 15, 2023",
      excerpt:
        "Exploring practical ways to incorporate artificial intelligence features into mobile apps for enhanced user experiences.",
      tags: ["AI", "Mobile Apps", "Flutter"],
    },
    {
      title: "Firebase vs Supabase: A Developer's Perspective",
      date: "April 30, 2023",
      excerpt:
        "Comparing two popular backend-as-a-service platforms and their benefits for different types of projects.",
      tags: ["Firebase", "Supabase", "Backend"],
    },
    {
      title: "The Importance of Performance Optimization in Flutter",
      date: "March 18, 2023",
      excerpt:
        "Strategies and techniques for ensuring your Flutter applications run smoothly across different devices.",
      tags: ["Flutter", "Performance", "Optimization"],
    },
    {
      title: "Learning Resources for Aspiring Flutter Developers",
      date: "February 5, 2023",
      excerpt:
        "A curated list of the best resources, courses, and communities for those looking to master Flutter development.",
      tags: ["Flutter", "Learning", "Resources"],
    },
  ]

  return (
    <div className="container pb-24 pt-16">
      <PageHeader
        title="Thoughts & Musings"
        description="My perspectives on technology, development practices, and industry trends."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {thoughts.map((thought, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <Link
              href={`/thoughts/${thought.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative overflow-hidden rounded-lg border p-6 transition-all hover:border-primary hover:bg-primary/5"
            >
              <motion.div
                className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100"
                initial={false}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
              />

              <div className="flex flex-wrap gap-2">
                {thought.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{thought.date}</p>
              <h3 className="mt-2 text-xl font-semibold transition-colors group-hover:text-primary">{thought.title}</h3>
              <p className="mt-2 text-muted-foreground">{thought.excerpt}</p>
              <div className="mt-4 flex items-center text-sm font-medium text-primary">
                Read more
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

