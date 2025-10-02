"use server"

import { put } from "@vercel/blob"

export interface AuditRequestData {
  projectName: string
  email: string
  telegram?: string
  chain: string
  github?: string
  timeline?: string
  budget?: string
  description: string
  fileName?: string
  fileUrl?: string
}

export async function submitAuditRequest(formData: FormData) {
  try {
    // Extract form data
    const data: AuditRequestData = {
      projectName: formData.get("projectName") as string,
      email: formData.get("email") as string,
      telegram: formData.get("telegram") as string,
      chain: formData.get("chain") as string,
      github: formData.get("github") as string,
      timeline: formData.get("timeline") as string,
      budget: formData.get("budget") as string,
      description: formData.get("description") as string,
    }

    // Validate required fields
    if (!data.projectName || !data.email || !data.chain || !data.description) {
      return {
        success: false,
        error: "Please fill in all required fields",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        error: "Please enter a valid email address",
      }
    }

    // Handle file upload if present
    const file = formData.get("file") as File | null
    if (file && file.size > 0) {
      try {
        // Upload to Vercel Blob storage
        const blob = await put(file.name, file, {
          access: "public",
        })
        data.fileName = file.name
        data.fileUrl = blob.url
      } catch (error) {
        console.error("[v0] File upload error:", error)
        return {
          success: false,
          error: "Failed to upload file. Please try again.",
        }
      }
    }

    // Log the submission (in production, you'd save to database or send email)
    console.log("[v0] Audit request received:", {
      ...data,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In production, you would:
    // 1. Save to database
    // 2. Send notification email to your team
    // 3. Send confirmation email to the user
    // 4. Create a ticket in your project management system

    return {
      success: true,
      message: "Your audit request has been submitted successfully!",
    }
  } catch (error) {
    console.error("[v0] Audit request submission error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    }
  }
}
