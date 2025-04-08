import { cn } from "@/lib/utils"
import Image from "next/image"
import type React from "react"

interface TechLogoProps {
  name: string
  className?: string
}

export function TechLogo({ name, className }: TechLogoProps) {
  const logos: Record<string, React.ReactNode> = {
    Flutter: (
      <Image
        src="/tech-logos/flutter.png"
        alt="Flutter"
        width={128}
        height={128}
        className={cn("h-full w-full", className)}
      />
    ),
    Firestore: (
      <Image
        src="/tech-logos/firestore.png"
        alt="Flutter"
        width={128}
        height={128}
        className={cn("h-full w-full", className)}
      />
    ),
    RealtimeDatabase: (
      <Image
        src="/tech-logos/realtimedb.png"
        alt="Flutter"
        width={128}
        height={128}
        className={cn("h-full w-full", className)}
      />
    ),
    Dart: (
      <Image
        src="/tech-logos/dart.png"
        alt="Dart"
        width={128}
        height={128}
        className={cn("h-full w-full", className)}
      />
    ),
    Python: (
      <Image
        src="/tech-logos/python.png"
        alt="Python"
        width={128}
        height={128}
        className={cn("h-full w-full", className)}
      />
    ),
    Firebase: (
      <Image
        src="/tech-logos/firebase.png"
        alt="Firebase"
        width={128}
        height={128}
        className={cn("h-full w-full", className)}
      />
    ),
    Supabase: (
      <Image
        src="/tech-logos/supabase.png"
        alt="Supabase"
        width={128}
        height={128}
        className={cn("h-full w-full", className)}
      />
    ),
    FastAPI: (
      <Image
        src="/tech-logos/fastapi.png"
        alt="FastAPI"
        width={128}
        height={128}
        className={cn("h-full w-full", className)}
      />
    ),
    Figma: (
      <Image
        src="/tech-logos/figma.png"
        alt="Figma"
        width={128}
        height={128}
        className={cn("h-full w-full", className)}
      />
    ),
    FlutterFlow: (
      <Image
        src="/tech-logos/flutterflow.png"
        alt="FlutterFlow"
        width={128}
        height={128}
        className={cn("h-full w-full", className)}
      />
    ),
    GitHub: (
      <Image
        src="/tech-logos/github.png"
        alt="GitHub"
        width={128}
        height={128}
        className={cn("h-full w-full", className)}
      />
    ),
    HTML: (
      <Image
        src="/tech-logos/html.png"
        alt="HTML"
        width={128}
        height={128}
        className={cn("h-full w-full", className)}
      />
    ),
    CSS: (
      <Image
        src="/tech-logos/css.png"
        alt="CSS"
        width={128}
        height={128}
        className={cn("h-full w-full", className)}
      />
    ),
    JavaScript: (
      <Image
        src="/tech-logos/javascript.png"
        alt="JavaScript"
        width={128}
        height={128}
        className={cn("h-full w-full", className)}
      />
    ),
    VSCode: (
      <Image
        src="/tech-logos/vscode.png"
        alt="VSCode"
        width={128}
        height={128}
        className={cn("h-full w-full", className)}
      />
    ),
    Git: (
      <Image
        src="/tech-logos/git.png"
        alt="Git"
        width={128}
        height={128}
        className={cn("h-full w-full", className)}
      />
    ),
    MapTiler: (
      <Image
        src="/tech-logos/maptiler.png"
        alt="MapTiler"
        width={128}
        height={128}
        className={cn("h-full w-full", className)}
      />
    ),
    Notion: (
      <Image
        src="/tech-logos/notion.png"
        alt="Notion"
        width={128}
        height={128}
        className={cn("h-full w-full", className)}
      />
    ),
  }

  return logos[name] || null
}