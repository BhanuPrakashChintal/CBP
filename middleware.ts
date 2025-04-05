import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname

  // Check if the path is for the admin area
  if (path.startsWith("/admin")) {
    // Get the token from the cookies
    const token = request.cookies.get("admin_token")?.value

    // If there's no token or it's invalid, redirect to the login page
    if (!token || token !== process.env.ADMIN_TOKEN) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:path*"],
}

