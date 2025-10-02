"use server"

export interface ContactData {
  name: string
  email: string
  subject: string
  message: string
}

export async function submitContact(formData: FormData) {
  try {
    // Extract form data
    const data: ContactData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
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

    // Validate message length
    if (data.message.length < 10) {
      return {
        success: false,
        error: "Message must be at least 10 characters long",
      }
    }

    // Log the submission (in production, you'd save to database or send email)
    console.log("[v0] Contact form submission received:", {
      ...data,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In production, you would:
    // 1. Save to database
    // 2. Send notification email to your team
    // 3. Send confirmation email to the user
    // 4. Integrate with CRM or support ticket system

    return {
      success: true,
      message: "Your message has been sent successfully!",
    }
  } catch (error) {
    console.error("[v0] Contact form submission error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    }
  }
}
