"use client"

import { useEffect } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
}

export function AnimatedText({ text, className = "", once = true, delay = 0 }: AnimatedTextProps) {
  const ctrls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: once,
  })

  useEffect(() => {
    if (inView) {
      ctrls.start("visible")
    }
    if (!once && !inView) {
      ctrls.start("hidden")
    }
  }, [ctrls, inView, once])

  const wordAnimation = {
    hidden: {},
    visible: {},
  }

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <h1 aria-label={text} role="heading" className={className}>
      <motion.span
        ref={ref}
        aria-hidden="true"
        initial="hidden"
        animate={ctrls}
        variants={wordAnimation}
        transition={{
          delayChildren: delay,
          staggerChildren: 0.04,
        }}
        className="inline-block"
      >
        {text.split("").map((char, index) => (
          <motion.span key={`${char}-${index}`} variants={characterAnimation} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </h1>
  )
}

