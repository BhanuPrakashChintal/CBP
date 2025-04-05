"use server"

import { cookies } from "next/headers"

export async function login(password: string) {
  // Check if the password matches the admin password
  if (password === process.env.ADMIN_PASSWORD) {
    // Set a cookie with the admin token
    cookies().set({
      name: "admin_token",
      value: process.env.ADMIN_TOKEN || "",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })

    return { success: true }
  }

  return { success: false, message: "Invalid password" }
}

export async function logout() {
  // Delete the admin token cookie
  cookies().delete("admin_token")

  return { success: true }
}

