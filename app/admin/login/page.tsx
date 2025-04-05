import { LoginForm } from "@/components/admin/login-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Login | Chintal Bhanu Prakash",
  description: "Admin login page",
}

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <LoginForm />
    </div>
  )
}

