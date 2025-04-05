import { AdminDashboard } from "@/components/admin/dashboard"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Dashboard | Chintal Bhanu Prakash",
  description: "Admin dashboard for managing blog posts",
}

export default function AdminDashboardPage() {
  return <AdminDashboard />
}

