"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  // Ensure theme is only applied after client-side hydration
  React.useEffect(() => {
    setMounted(true)

    // Apply a class to the body when mounted to enable transitions
    document.body.classList.add("theme-transitions-enabled")

    // Cleanup function
    return () => {
      document.body.classList.remove("theme-transitions-enabled")
    }
  }, [])

  // Use a consistent loading state
  if (!mounted) {
    return <div className="theme-loading">{children}</div>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

