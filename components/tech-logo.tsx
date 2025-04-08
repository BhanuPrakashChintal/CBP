import { cn } from "@/lib/utils"
import type React from "react"

interface TechLogoProps {
  name: string
  className?: string
}

export function TechLogo({ name, className }: TechLogoProps) {
  const logos: Record<string, React.ReactNode> = {
    Flutter: (
      <svg viewBox="0 0 128 128" className={cn("h-full w-full", className)}>
        <path fill="#3FB6D3" d="M12.3 64.2L76.3 0h39.4L32.1 83.6z"/>
        <path fill="#27AACD" d="M76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"/>
        <path fill="#19599A" d="M81.6 93.9L76.3 128H12.3l45.5-44.5z"/>
      </svg>
    ),
    Dart: (
      <svg viewBox="0 0 128 128" className={cn("h-full w-full", className)}>
        <path fill="#00D4F0" d="M64 0L128 64L64 128L0 64L64 0Z"/>
        <path fill="#00B4D6" d="M64 0L128 64L64 64L64 0Z"/>
        <path fill="#00A0C0" d="M64 64L128 64L64 128L64 64Z"/>
        <path fill="#00B4D6" d="M64 64L0 64L64 128L64 64Z"/>
        <path fill="#00A0C0" d="M64 0L0 64L64 64L64 0Z"/>
      </svg>
    ),
    Python: (
      <svg viewBox="0 0 128 128" className={cn("h-full w-full", className)}>
        <path fill="#3776AB" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.791v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-.78-11.8-.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
        <path fill="#FFD43B" d="M64.601 126.016c4.234.02 8.252-.379 11.8-1.007 10.45-1.846 12.346-5.71 12.346-12.837v-9.411H63.556v-3.137h33.989c7.176 0 13.46-4.313 15.426-12.521 2.268-9.405 2.368-15.275 0-25.096-1.755-7.311-5.947-12.519-13.124-12.519h-8.491v15.341c0 8.151-7.051 15.34-15.426 15.34H48.171c-6.866 0-12.346 5.654-12.346 12.548v24.322c0 6.693 5.646 11.72 12.346 12.837 4.244.706 8.645.78 11.8.008zM77.963 118.443c-2.55 0-4.633-2.117-4.633-4.721 0-2.593 2.083-4.69 4.633-4.69 2.56 0 4.633 2.097 4.633 4.69.001 2.604-2.073 4.721-4.633 4.721z"/>
      </svg>
    ),
    Firebase: (
      <svg viewBox="0 0 128 128" className={cn("h-full w-full", className)}>
        <path fill="#FFA000" d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zM65.98 52.73l-8.82-16.63c-.78-1.47-2.72-2.1-4.17-1.35L7.09 76.22l21.26 37.91 37.63-61.4z"/>
        <path fill="#F57C00" d="M28.42 80.52L7.09 76.22l21.26 37.91 37.63-61.4-8.82-16.63c-.78-1.47-2.72-2.1-4.17-1.35L7.09 76.22l21.33 4.3z"/>
        <path fill="#FFCA28" d="M93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95L93.1 34.11z"/>
      </svg>
    ),
    Supabase: (
      <svg viewBox="0 0 128 128" className={cn("h-full w-full", className)}>
        <path fill="#3ECF8E" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 102.4c-21.2 0-38.4-17.2-38.4-38.4S42.8 25.6 64 25.6 102.4 42.8 102.4 64 85.2 102.4 64 102.4z"/>
        <path fill="#3ECF8E" d="M64 25.6c-21.2 0-38.4 17.2-38.4 38.4S42.8 102.4 64 102.4 102.4 85.2 102.4 64 85.2 25.6 64 25.6zm0 64c-14.1 0-25.6-11.5-25.6-25.6S49.9 38.4 64 38.4 89.6 49.9 89.6 64 78.1 89.6 64 89.6z"/>
      </svg>
    ),
    FastAPI: (
      <svg viewBox="0 0 128 128" className={cn("h-full w-full", className)}>
        <path fill="#009688" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 102.4c-21.2 0-38.4-17.2-38.4-38.4S42.8 25.6 64 25.6 102.4 42.8 102.4 64 85.2 102.4 64 102.4z"/>
        <path fill="#fff" d="M64 38.4c-14.1 0-25.6 11.5-25.6 25.6S49.9 89.6 64 89.6 89.6 78.1 89.6 64 78.1 38.4 64 38.4zm0 38.4c-7.1 0-12.8-5.7-12.8-12.8S56.9 51.2 64 51.2s12.8 5.7 12.8 12.8-5.7 12.8-12.8 12.8z"/>
      </svg>
    ),
    Figma: (
      <svg viewBox="0 0 128 128" className={cn("h-full w-full", className)}>
        <path fill="#0ACF83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129z"/>
        <path fill="#A259FF" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5z"/>
        <path fill="#F24E1E" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5z"/>
        <path fill="#FF7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67V0z"/>
        <path fill="#1ABCFE" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5z"/>
      </svg>
    ),
    FlutterFlow: (
      <svg viewBox="0 0 128 128" className={cn("h-full w-full", className)}>
        <path fill="#3FB6D3" d="M12.3 64.2L76.3 0h39.4L32.1 83.6z"/>
        <path fill="#27AACD" d="M76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"/>
        <path fill="#19599A" d="M81.6 93.9L76.3 128H12.3l45.5-44.5z"/>
        <path fill="#1ABCFE" d="M76.3 64L42.2 93.5L76.3 128L110 64z"/>
      </svg>
    ),
    GitHub: (
      <svg viewBox="0 0 128 128" className={cn("h-full w-full", className)}>
        <path fill="#181616" d="M64 0C28.7 0 0 28.7 0 64c0 28.3 18.3 52.3 43.8 60.8 3.2.6 4.4-1.4 4.4-3.1 0-1.5-.1-5.5-.1-10.8-17.8 3.9-21.5-8.6-21.5-8.6-2.9-7.4-7.1-9.4-7.1-9.4-5.8-4 .4-3.9.4-3.9 6.4.4 9.8 6.6 9.8 6.6 5.7 9.8 15 7 18.6 5.3.6-4.1 2.2-7 4.1-8.6-14.3-1.6-29.4-7.2-29.4-32 0-7.1 2.5-12.9 6.6-17.4-.7-1.6-2.9-8 .6-16.8 0 0 5.4-1.7 17.7 6.6 5.1-1.4 10.6-2.1 16.1-2.1 5.5 0 11 .7 16.1 2.1 12.3-8.3 17.7-6.6 17.7-6.6 3.5 8.8 1.3 15.2.6 16.8 4.1 4.5 6.6 10.3 6.6 17.4 0 24.8-15.1 30.4-29.4 32 2.3 2 4.3 5.9 4.3 11.9 0 8.6-.1 15.5-.1 17.6 0 1.7 1.1 3.7 4.4 3.1C109.7 116.3 128 92.3 128 64c0-35.3-28.7-64-64-64z"/>
        <path fill="#fff" d="M64 0C28.7 0 0 28.7 0 64c0 28.3 18.3 52.3 43.8 60.8 3.2.6 4.4-1.4 4.4-3.1 0-1.5-.1-5.5-.1-10.8-17.8 3.9-21.5-8.6-21.5-8.6-2.9-7.4-7.1-9.4-7.1-9.4-5.8-4 .4-3.9.4-3.9 6.4.4 9.8 6.6 9.8 6.6 5.7 9.8 15 7 18.6 5.3.6-4.1 2.2-7 4.1-8.6-14.3-1.6-29.4-7.2-29.4-32 0-7.1 2.5-12.9 6.6-17.4-.7-1.6-2.9-8 .6-16.8 0 0 5.4-1.7 17.7 6.6 5.1-1.4 10.6-2.1 16.1-2.1 5.5 0 11 .7 16.1 2.1 12.3-8.3 17.7-6.6 17.7-6.6 3.5 8.8 1.3 15.2.6 16.8 4.1 4.5 6.6 10.3 6.6 17.4 0 24.8-15.1 30.4-29.4 32 2.3 2 4.3 5.9 4.3 11.9 0 8.6-.1 15.5-.1 17.6 0 1.7 1.1 3.7 4.4 3.1C109.7 116.3 128 92.3 128 64c0-35.3-28.7-64-64-64z"/>
      </svg>
    ),
    HTML: (
      <svg viewBox="0 0 128 128" className={cn("h-full w-full", className)}>
        <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/>
        <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/>
        <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/>
        <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/>
      </svg>
    ),
    CSS: (
      <svg viewBox="0 0 128 128" className={cn("h-full w-full", className)}>
        <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/>
        <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"/>
        <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"/>
        <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"/>
        <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"/>
        <path fill="#EBEBEB" d="M64.049 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.049 51.431v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.495z"/>
      </svg>
    ),
    JavaScript: (
      <svg viewBox="0 0 128 128" className={cn("h-full w-full", className)}>
        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
        <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.072 29.533c-.072 4.736.658 8.156 2.535 10.317 2.012 2.336 5.005 3.567 8.91 3.567 4.09 0 7.061-1.224 8.876-3.629 1.804-2.388 2.535-5.698 2.535-9.877.01-5.172.011-8.296.011-29.911zm-23.752-6.797h11.638v29.533c0 4.736-.074 8.156-2.535 10.317-2.012 2.336-5.005 3.567-8.91 3.567-4.09 0-7.061-1.224-8.876-3.629-1.804-2.388-2.535-5.698-2.535-9.877V52.146z"/>
      </svg>
    ),
    VSCode: (
      <svg viewBox="0 0 128 128" className={cn("h-full w-full", className)}>
        <path fill="#007ACC" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5 20.58 20.58 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-.94a9.09 9.09 0 0 0-5.87-1.74c-3.65-.16-6.23 1.73-6.21 5a4.58 4.58 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 0 1-9.52-.1 23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 0 1 1.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4-12.77-7.27-4.33-4-5.85-7.72-5.48-12 .56-6.67 5.41-10.85 13.82-11.87a31.66 31.66 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z"/>
      </svg>
    ),
    Git: (
      <svg viewBox="0 0 128 128" className={cn("h-full w-full", className)}>
        <path fill="#F14E32" d="M124.737 58.378L69.621 3.264c-3.172-3.171-8.319-3.171-11.49 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521L70.76 55.96l-.035 17.112c.922.455 1.791 1.063 2.559 1.828 3.779 3.777 3.779 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683.934-.933 2.014-1.638 3.167-2.121v-17.305c-1.153-.482-2.231-1.188-3.167-2.124-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123c-3.171 3.171-3.171 8.319 0 11.492l55.117 55.114c3.172 3.171 8.319 3.171 11.491 0l54.858-54.858c3.171-3.172 3.171-8.32.007-11.493z"/>
      </svg>
    ),
    MapTiler: (
      <svg viewBox="0 0 128 128" className={cn("h-full w-full", className)}>
        <path fill="#1A73E8" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm0 102.4c-21.2 0-38.4-17.2-38.4-38.4S42.8 25.6 64 25.6 102.4 42.8 102.4 64 85.2 102.4 64 102.4z"/>
        <path fill="#fff" d="M64 38.4c-14.1 0-25.6 11.5-25.6 25.6S49.9 89.6 64 89.6 89.6 78.1 89.6 64 78.1 38.4 64 38.4zm0 38.4c-7.1 0-12.8-5.7-12.8-12.8S56.9 51.2 64 51.2s12.8 5.7 12.8 12.8-5.7 12.8-12.8 12.8z"/>
      </svg>
    ),
  }

  return logos[name] || null
}

