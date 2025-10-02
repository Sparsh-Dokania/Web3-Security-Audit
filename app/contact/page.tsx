"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Twitter, Github, Linkedin, CheckCircle, Loader2, AlertCircle } from "lucide-react"
import { submitContact } from "@/app/actions/submit-contact"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})

    const formData = new FormData(e.currentTarget)

    try {
      const result = await submitContact(formData)

      if (result.success) {
        setSubmitted(true)
        toast({
          title: "Success!",
          description: result.message,
        })
      } else {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        })
        setErrors({ general: result.error || "Submission failed" })
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
      setErrors({ general: "An unexpected error occurred. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <Navbar />
        <section className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-20">
          <Card className="max-w-2xl border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h2 className="mb-4 text-3xl font-bold">Message Sent!</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button onClick={() => setSubmitted(false)} size="lg">
                  Send Another Message
                </Button>
                <Button onClick={() => (window.location.href = "/")} variant="outline" size="lg">
                  Return Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold md:text-6xl">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">Have questions? We'd love to hear from you.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:contact@securechain.io" className="text-sm hover:text-primary">
                      contact@securechain.io
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Twitter className="h-5 w-5 text-primary" />
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary"
                    >
                      @SecureChainAudits
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary"
                    >
                      github.com/securechain
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary"
                    >
                      linkedin.com/company/securechain
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM UTC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Emergency Support</span>
                    <span>24/7</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-border/40 bg-card/80 backdrop-blur-sm lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you shortly</CardDescription>
              </CardHeader>
              <CardContent>
                {errors.general && (
                  <div className="mb-6 flex items-center gap-2 rounded-lg border border-red-500/50 bg-red-500/10 p-4 text-red-500">
                    <AlertCircle className="h-5 w-5" />
                    <p className="text-sm">{errors.general}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      required
                      className={errors.subject ? "border-red-500" : ""}
                    />
                    {errors.subject && <p className="text-sm text-red-500">{errors.subject}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full animate-glow text-lg" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
