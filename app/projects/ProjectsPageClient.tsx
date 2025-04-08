"use client"

import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/page-header"
import { FadeIn } from "@/components/fade-in"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function ProjectsPageClient() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const projects = [
    {
      title: "Heritage Hues",
      description:
        "A cross-platform travel and tourism application built with Flutter and Dart, designed to streamline the process of finding information about various places. The app aggregates data from multiple sources, focusing on hereditary and commerce markets to showcase hidden gems. Utilizing Flutterflow and APIs for automation, HeritageHues offers a user-friendly experience. For mapping, it employs MapTiler, an open-source alternative to Google API, and uses Supabase for its backend.",
      tags: ["Flutter", "Dart", "FlutterFlow", "MapTiler", "Supabase"],
      image: "/HeritageHuesMockup.png?height=400&width=600",
      link: "https://heritagehues.flutterflow.app",
      external: true,
      teamSize: 2,
      period: "Nov 2023 - Dec 2023",
      achievement: "Won First Prize at the University-Level Project Expo (2024)",
      category: "Mobile App",
    },
    {
      title: "Travel Together",
      description:
        "Travel Together is a travel app that simplifies finding and exploring appealing travel spots. It offers personalized itineraries with an AI-driven trip planner and easy navigation via geolocation. The app features a user-friendly admin interface, cohesive design, and secure backend services through Firebase. By continuously developing and testing, Travel Together ensures a seamless user experience, aggregating data from various sources, highlighting hidden gems, and providing efficient travel planning and navigation.",
      tags: ["Flutter", "Firebase", "AI Integration", "Admin Dashboard"],
      image: "/traveltogetherMockups.png?height=400&width=600",
      link: "https://github.com/BhanuPrakashChintal/TravelTogether",
      external: true,
      teamSize: 2,
      period: "May 2024 - June 2024",
      note: "Freelancing Project",
      category: "Mobile App",
    },
    {
      title: "Geek for Geeks Student Club Website",
      description:
        "GeeksforGeeks AU is a website designed to provide insights and notifications for the GeeksforGeeks University club. The club website offers a platform to stay updated with events and activities. The site is built using HTML, Bootstrap CSS, JavaScript, Cloudflare CMS, GitHub, and Google Firebase. This tech stack ensures a responsive and dynamic user experience while maintaining efficient content management and hosting.",
      tags: ["HTML", "Bootstrap", "JavaScript", "Firebase", "Cloudflare CMS"],
      image: "/gfgMockups.png?height=400&width=600",
      link: "https://gfg-au.web.app",
      external: true,
      teamSize: 1,
      period: "Aug 2022 - Nov 2022",
      category: "Web Development",
    },
    {
      title: "Student Digital Library",
      description:
        "The Student Digital Library is a web application designed to provide free access to academic materials, notes, previous question papers, and other handouts. It organizes resources by department and stream, making it easy for students to find what they need. Built with HTML, CSS, and JavaScript, and using Supabase for backend services, the application is hosted on Google Sites. The development process includes designing a user-friendly interface, building and testing the application, and regularly updating content.",
      tags: ["HTML", "CSS", "JavaScript", "Supabase", "Google Sites"],
      image: "/sdlMockups.png?height=400&width=600",
      link: "https://sites.google.com/view/studentsdigitallibrary",
      external: true,
      teamSize: 1,
      period: "Jan 2022",
      category: "Web Development",
    },
    // {
    //   title: "Flutter IoT Dashboard",
    //   description:
    //     "Developed during my internship at CyberMyte Technology Solutions, this IoT dashboard app provides real-time monitoring and control of connected devices. Features include authentication, metrics visualization with charts, and comprehensive device management.",
    //   tags: ["Flutter", "Firebase", "Realtime Database", "IoT", "Charts"],
    //   image: "/placeholder.svg?height=400&width=600",
    //   link: "/projects/iot-dashboard",
    //   teamSize: 3,
    //   period: "Oct 2024 - Present",
    //   note: "Internship Project",
    //   category: "IoT",
    // },
      // {
      //   title: "ASR Mobile Application",
      //   description:
      //     "Developed during my internship at Swecha, this Flutter mobile application connects to an Automatic Speech Recognition (ASR) model built with Python and FastAPI. The app allows users to convert speech to text with high accuracy and low latency.",
      //   tags: ["Flutter", "Python", "FastAPI", "ASR", "Figma", "FlutterFlow"],
      //   image: "/placeholder.svg?height=400&width=600",
      //   link: "/projects/asr-app",
      //   teamSize: 2,
      //   period: "May 2024 - Jun 2024",
      //   note: "Internship Project",
      //   category: "Mobile App",
      // },
  ]

  const categories = Array.from(new Set(projects.map((project) => project.category)))

  const filteredProjects = activeFilter ? projects.filter((project) => project.category === activeFilter) : projects

  return (
    <div className="container pb-24 pt-16">
      <PageHeader title="My Projects" description="A collection of my recent work, side projects, and experiments." />

      <div className="mt-8 flex flex-wrap gap-2">
        <Badge
          variant={activeFilter === null ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => setActiveFilter(null)}
        >
          All Projects
        </Badge>
        {categories.map((category) => (
          <Badge
            key={category}
            variant={activeFilter === category ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      <div className="mt-12 space-y-16">
        {filteredProjects.map((project, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="group overflow-hidden rounded-xl border transition-all hover:border-primary hover:bg-primary/5">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="flex flex-col p-6 md:p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    {project.external && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80"
                        aria-label="External link"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    <div className="rounded-full bg-muted px-3 py-1 text-xs">Team: {project.teamSize}</div>
                    <div className="rounded-full bg-muted px-3 py-1 text-xs">{project.period}</div>
                    {project.note && (
                      <div className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">{project.note}</div>
                    )}
                    {project.achievement && (
                      <div className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-500 dark:bg-green-500/20 dark:text-green-400">
                        {project.achievement}
                      </div>
                    )}
                  </div>

                  <p className="mb-6 flex-grow text-muted-foreground">{project.description}</p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <a
                      href={project.link}
                      target={project.external ? "_blank" : "_self"}
                      rel={project.external ? "noopener noreferrer" : ""}
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    >
                      View Project
                      {project.external ? (
                        <ExternalLink className="ml-2 h-4 w-4" />
                      ) : (
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
                          className="ml-2 h-4 w-4"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

