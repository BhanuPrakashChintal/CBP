"use client"

import { motion } from "framer-motion"
import { PageHeader } from "@/components/page-header"
import { FadeIn } from "@/components/fade-in"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPageClient() {
  return (
    <div className="container pb-24 pt-16">
      <PageHeader title="About Me" description="Learn more about my background, experience, and what drives me." />

      <div className="mt-16 grid gap-16 md:grid-cols-2">
        <FadeIn direction="right">
          <div>
            <h2 className="text-2xl font-bold">My Story</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Chintal Bhanu Prakash, an undergraduate student with a passion for technology and software
                development. I have been actively honing my skills in Python, Flutter, and UI/UX, eager to explore and
                contribute to the ever-evolving field of technology.
              </p>
              <p>
                I thrive in collaborative environments and am excited about the potential to learn and grow alongside a
                dynamic team. My journey in tech began with a curiosity about how applications work and has evolved into
                a passion for creating intuitive, user-friendly experiences.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating user experiences that are both functional and
                delightful. My approach combines technical expertise with a deep understanding of user needs.
              </p>
            </div>
            <div className="mt-6">
              <Button asChild variant="outline" className="group">
                <a href="/Chintal_Bhanu_Prakash_Resume.pdf" download>
                  Download Resume
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </a>
              </Button>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left" className="order-first md:order-last">
          <div className="aspect-square overflow-hidden rounded-xl bg-muted">
            <motion.img
              src="/placeholder.svg?height=600&width=600"
              alt="Chintal Bhanu Prakash"
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </FadeIn>
      </div>

      <FadeIn className="mt-20">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="mt-8 space-y-6">
          {[
            {
              degree: "B.Tech - Information Technology",
              institution: "Anurag University, Hyderabad",
              period: "2021 - 2025",
              description: "Currently pursuing with a CGPA of 7.97/10.",
            },
            {
              degree: "12th (TSBIE)",
              institution: "Sri Chaitanya Junior College, Hyderabad",
              period: "2019 - 2021",
              description: "Completed with 91.40% marks.",
            },
            {
              degree: "10th (SSC)",
              institution: "Kakatiya Techno School, Hyderabad",
              period: "2018 - 2019",
              description: "Completed with a CGPA of 8.70/10.",
            },
          ].map((edu, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group rounded-lg border p-6 transition-all hover:border-primary hover:bg-primary/5">
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{edu.degree}</h3>
                  <Badge variant="outline" className="w-fit">
                    {edu.period}
                  </Badge>
                </div>
                <p className="mt-1 text-lg text-primary">{edu.institution}</p>
                <p className="mt-4 text-muted-foreground">{edu.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="mt-20">
        <h2 className="text-2xl font-bold">Internships</h2>
        <div className="mt-8 space-y-6">
          {[
            {
              role: "Flutter Developer Intern",
              company: "CyberMyte Technology Solutions",
              period: "October 2024 - Ongoing",
              description:
                "Developed and optimized Flutter IoT app, including authentication, UI/UX, and Firebase integration. Built metrics dashboards with charts, improved backend logic, and enhanced app performance. Worked mainly on realtime database, authentication and firestore database.",
            },
            {
              role: "Flutter Developer Intern",
              company: "Swecha | IT | Software Company",
              period: "May 2024 - June 2024",
              description:
                "Developed a Flutter Mobile application connected to an ASR (Automatic Speech Recognition) model using Python & FastAPI. Designed a mobile application prototype using Figma and developed using FlutterFlow.",
            },
          ].map((job, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group rounded-lg border p-6 transition-all hover:border-primary hover:bg-primary/5">
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{job.role}</h3>
                  <Badge variant="outline" className="w-fit">
                    {job.period}
                  </Badge>
                </div>
                <p className="mt-1 text-lg text-primary">{job.company}</p>
                <p className="mt-4 text-muted-foreground">{job.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>

      <div className="mt-20 grid gap-16 md:grid-cols-2">
        <FadeIn>
          <h2 className="text-2xl font-bold">Achievements & Leadership</h2>
          <div className="mt-8 space-y-4 text-muted-foreground">
            <ul className="ml-6 list-disc space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="font-medium text-foreground">Won First Prize</span> for the project{" "}
                <span className="italic">Heritage Hues</span> at the University-Level Project Expo (2024).
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span className="font-medium text-foreground">Lead Organizer</span> of the CodeChef Chapter, organized
                tech workshops.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="font-medium text-foreground">Technical Team Member</span> at GeeksforGeeks Student Club
                (developed university website).
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="font-medium text-foreground">Active Member</span> of "iTechnoz" Technical Club,
                organizing tech events.
              </motion.li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-bold">Awards & Scholarships</h2>
          <div className="mt-8 space-y-4 text-muted-foreground">
            <ul className="ml-6 list-disc space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="font-medium text-foreground">Telangana State Post Matric Scholarship (TS EAMCET)</span>{" "}
                for Undergraduate Education (2021 - 2025).
              </motion.li>
            </ul>
          </div>
        </FadeIn>
      </div>

      <FadeIn className="mt-20">
        <h2 className="text-2xl font-bold">Certifications</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            "Cisco Certified Network Associate (CCNA) - Cisco Network Academy",
            "Python 1 & 2 - Cisco NetAcad",
            "Cybersecurity Essentials - Cisco NetAcad",
            "IBM: Journey to Cloud: Envisioning Your Solution",
            "AWS Academy Graduate - AWS Academy Cloud Foundations",
            "MongoDB Introduction for Students",
          ].map((cert, index) => (
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

      <FadeIn className="mt-20">
        <h2 className="text-2xl font-bold">Personal Interests</h2>
        <p className="mt-6 text-muted-foreground">
          When I'm not coding, you can find me watching Tech conferences, Keynotes, and Launch Events of major tech
          companies. I also enjoy reading Theoretical Physics & Cosmology books.
        </p>
      </FadeIn>
    </div>
  )
}

