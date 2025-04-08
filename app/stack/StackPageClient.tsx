"use client"

import { motion } from "framer-motion"
import { PageHeader } from "@/components/page-header"
import { FadeIn } from "@/components/fade-in"
import { TechLogo } from "@/components/tech-logo"

export default function StackPageClient() {
  const techCategories = [
    {
      name: "Programming Languages",
      technologies: [
        { name: "Python", description: "For backend development and data processing" },
        { name: "Dart", description: "For Flutter app development" },
      ],
    },
    {
      name: "Frameworks & Tools",
      technologies: [
        { name: "Flutter", description: "Cross-platform app development framework" },
        { name: "Firebase", description: "Backend-as-a-Service platform" },
        { name: "Supabase", description: "Open source Firebase alternative" },
        { name: "FastAPI", description: "Modern Python web framework" },
        { name: "FlutterFlow", description: "Low-code Flutter development platform" },
      ],
    },
    {
      name: "UI/UX Design",
      technologies: [{ name: "Figma", description: "UI/UX design and prototyping tool" }],
    },
    {
      name: "Databases",
      technologies: [
        { name: "Firestore", description: "NoSQL document database by Firebase" },
        { name: "RealtimeDatabase", description: "Real-time syncing database by Firebase" },
        { name: "Supabase", description: "PostgreSQL database with real-time capabilities" },
      ],
    },
    {
      name: "DevOps & Tools",
      technologies: [
        { name: "Git", description: "Version control system" },
        { name: "GitHub", description: "Code hosting platform" },
        { name: "VSCode", description: "Code editor" },
        { name: "Notion", description: "Project management and documentation" },
      ],
    },
  ]

  const certifications = [
    "Cisco Certified Network Associate (CCNA) - Cisco Network Academy",
    "Python 1 & 2 - Cisco NetAcad",
    "Cybersecurity Essentials - Cisco NetAcad",
    "IBM: Journey to Cloud: Envisioning Your Solution",
    "AWS Academy Graduate - AWS Academy Cloud Foundations",
    "MongoDB Introduction for Students",
  ]

  return (
    <div className="container pb-24 pt-16">
      <PageHeader title="My Tech Stack" description="Technologies and tools I use to bring ideas to life." />

      <div className="mt-16 space-y-20">
        {techCategories.map((category, categoryIndex) => (
          <FadeIn key={category.name} delay={categoryIndex * 0.1}>
            <h2 className="text-2xl font-bold">{category.name}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {category.technologies.map((tech, techIndex) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group flex flex-col rounded-lg border p-6 transition-all hover:border-primary hover:bg-primary/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
                    <TechLogo name={tech.name} />
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{tech.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-20">
        <h2 className="text-2xl font-bold">Certifications</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 rounded-lg border p-4 transition-all hover:border-primary hover:bg-primary/5"
            >
              <div className="mt-1 rounded-full bg-primary/10 p-1 text-primary">
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
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <span>{cert}</span>
            </motion.div>
          ))}
        </div>
      </FadeIn>

      <div className="mt-20 grid gap-16 md:grid-cols-2">
        <FadeIn>
          <h2 className="text-2xl font-bold">My Development Philosophy</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              I believe in creating intuitive, user-friendly applications that solve real problems. My approach to
              development is guided by these principles:
            </p>
            <ul className="ml-6 list-disc space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                User-centered design that prioritizes accessibility and usability
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Cross-platform compatibility for reaching wider audiences
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Clean, maintainable code that can be easily extended
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Performance optimization for fast, responsive applications
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Continuous learning and adaptation to new technologies
              </motion.li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-bold">Currently Learning</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Advanced Flutter Animations",
              "AI Integration in Mobile Apps",
              "Cloud Architecture",
              "UI/UX Advanced Principles",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group flex flex-col rounded-lg border p-6 transition-all hover:border-primary hover:bg-primary/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl transition-transform group-hover:scale-110">
                  {"🔍"}
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{tech}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Expanding my skill set</p>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

