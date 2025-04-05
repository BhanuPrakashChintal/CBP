"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SectionHeader } from "@/components/section-header"
import { AnimatedText } from "@/components/animated-text"
import { FadeIn } from "@/components/fade-in"
import { TechLogo } from "@/components/tech-logo"

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center gap-8 overflow-hidden px-4 pt-20 text-center md:pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-small-black/[0.05] dark:bg-grid-small-white/[0.05]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary"
        >
          Flutter Developer & UI/UX Enthusiast
        </motion.div>

        <div className="space-y-6">
          <AnimatedText
            text="Hi, I'm Chintal Bhanu Prakash"
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          />
          <FadeIn delay={0.4}>
            <p className="mx-auto max-w-[42rem] text-lg text-muted-foreground sm:text-xl">
              I build cross-platform applications with Flutter, Python, and modern technologies.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.6} className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="group">
            <Link href="/contact">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="group">
            <Link href="/projects">
              View my work
              <motion.span
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="ml-2"
              >
                👨‍💻
              </motion.span>
            </Link>
          </Button>
        </FadeIn>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <div className="mt-2 h-6 w-4 rounded-full border border-muted-foreground/30">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="mx-auto mt-1 h-2 w-1 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="container section-spacing">
        <FadeIn>
          <SectionHeader
            title="Featured Projects"
            description="Some of my recent work that I'm proud of."
            link="/projects"
            linkText="View all projects"
          />
        </FadeIn>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FadeIn delay={0.1}>
            <ProjectCard
              title="Heritage Hues"
              description="A cross-platform travel and tourism app built with Flutter & Dart. Aggregates data on heritage sites and commerce markets."
              tags={["Flutter", "Dart", "FlutterFlow", "MapTiler", "Supabase"]}
              image="/HeritageHuesMockup.png?height=400&width=600"
              link="https://heritagehues.flutterflow.app"
              external
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <ProjectCard
              title="Travel Together"
              description="AI-driven travel app offering personalized itineraries. Developed a secure backend using Firebase and designed an interactive admin dashboard."
              tags={["Flutter", "Firebase", "AI Integration", "Admin Dashboard"]}
              image="/traveltogetherMockups.png?height=400&width=600"
              link="https://github.com/BhanuPrakashChintal/TravelTogether"
              external
            />
          </FadeIn>
          <FadeIn delay={0.3}>
            <ProjectCard
              title="Geek for Geeks Student Club Website"
              description="Developed a university club website for event updates using HTML, Bootstrap, JavaScript, Cloudflare CMS, GitHub, and Firebase."
              tags={["HTML", "Bootstrap", "JavaScript", "Firebase"]}
              image="/gfgMockups.png?height=400&width=600"
              link="https://gfg-au.web.app"
              external
            />
          </FadeIn>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="container section-spacing">
        <FadeIn>
          <SectionHeader
            title="About Me"
            description="A brief introduction to who I am and what I do."
            link="/about"
            linkText="Learn more about me"
          />
        </FadeIn>
        <div className="mt-10 flex flex-col gap-10 md:flex-row">
          <FadeIn direction="right" className="flex-1">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                I'm an undergraduate student with a passion for technology and software development. I have been
                actively honing my skills in Python, Flutter, and UI/UX, eager to explore and contribute to the
                ever-evolving field of technology.
              </p>
              <p className="text-lg text-muted-foreground">
                Currently pursuing B.Tech in Information Technology at Anurag University with a CGPA of 7.97/10. I
                thrive in collaborative environments and am excited about the potential to learn and grow alongside a
                dynamic team.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {["Python", "Dart", "Flutter", "Firebase", "Supabase", "FastAPI", "UI/UX"].map((skill) => (
                  <span key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="left" className="flex-1">
            <div className="aspect-square overflow-hidden rounded-xl bg-muted">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Chintal Bhanu Prakash"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="container section-spacing">
        <FadeIn>
          <SectionHeader
            title="My Tech Stack"
            description="Technologies and tools I use to bring ideas to life."
            link="/stack"
            linkText="View my complete stack"
          />
        </FadeIn>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {[
            { name: "Flutter", description: "Cross-platform app development" },
            { name: "Python", description: "Backend and data processing" },
            { name: "Dart", description: "Flutter app development" },
            { name: "Firebase", description: "Backend-as-a-Service" },
            { name: "Supabase", description: "Open source Firebase alternative" },
            { name: "Figma", description: "UI/UX design and prototyping" },
          ].map((tech, index) => (
            <FadeIn key={tech.name} delay={index * 0.05}>
              <div className="group flex flex-col items-center justify-center rounded-lg border p-6 text-center transition-all hover:border-primary hover:bg-primary/5">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
                  <TechLogo name={tech.name} />
                </div>
                <span className="font-medium">{tech.name}</span>
                <span className="mt-1 text-xs text-muted-foreground">{tech.description}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Blog Preview */}
      <section className="container section-spacing">
        <FadeIn>
          <SectionHeader
            title="Latest Articles"
            description="Thoughts, tutorials, and insights from my blog."
            link="/blog"
            linkText="Read all articles"
          />
        </FadeIn>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Building Cross-Platform Apps with Flutter",
              date: "June 15, 2023",
              excerpt: "Learn how to create efficient cross-platform applications using Flutter and Dart.",
            },
            {
              title: "Integrating Firebase with Flutter",
              date: "May 22, 2023",
              excerpt: "A comprehensive guide to setting up Firebase authentication and database in Flutter apps.",
            },
            {
              title: "UI/UX Design Principles for Mobile Apps",
              date: "April 10, 2023",
              excerpt: "Essential design principles to create intuitive and engaging mobile application interfaces.",
            },
          ].map((post, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Link
                href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group rounded-lg border p-6 transition-all hover:border-primary hover:bg-primary/5"
              >
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <h3 className="mt-2 text-xl font-semibold group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container pb-12">
        <FadeIn>
          <div className="relative overflow-hidden rounded-xl bg-primary/10 p-8 text-center md:p-12">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-grid-small-black/[0.03] dark:bg-grid-small-white/[0.03]" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl"
            >
              <h2 className="text-3xl font-bold tracking-tight">Let's work together</h2>
              <p className="mx-auto mt-4 max-w-[42rem] text-lg text-muted-foreground">
                Have a project in mind or just want to connect? I'm always open to discussing new opportunities.
              </p>
              <Button asChild size="lg" className="mt-8 group">
                <Link href="/contact">
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}

