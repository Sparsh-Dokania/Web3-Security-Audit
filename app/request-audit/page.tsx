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
import { CheckCircle, Upload, Loader2, X, AlertCircle } from "lucide-react"
import { submitAuditRequest } from "@/app/actions/submit-audit-request"
import { useToast } from "@/hooks/use-toast"

export default function RequestAuditPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { toast } = useToast()

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const allowedTypes = ["application/pdf", "application/zip", "application/x-zip-compressed"]
      if (!allowedTypes.includes(file.type)) {
        setErrors({ ...errors, file: "Only PDF and ZIP files are allowed" })
        return
      }

      if (file.size > 10 * 1024 * 1024) {
        setErrors({ ...errors, file: "File size must be less than 10MB" })
        return
      }
      setUploadedFile(file)
      setErrors({ ...errors, file: "" })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})

    const formData = new FormData(e.currentTarget)

    // Add file if uploaded
    if (uploadedFile) {
      formData.set("file", uploadedFile)
    }

    try {
      const result = await submitAuditRequest(formData)

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
              <h2 className="mb-4 text-3xl font-bold">Request Received!</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Thank you for your audit request. Our team will review your submission and get back to you within 24
                hours with a detailed quote and timeline.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button onClick={() => setSubmitted(false)} size="lg">
                  Submit Another Request
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
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold md:text-6xl">Request an Audit</h1>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours with a quote
            </p>
          </div>

          <Card className="border-border/40 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Project Details</CardTitle>
              <CardDescription>Tell us about your project and security needs</CardDescription>
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
                    <Label htmlFor="projectName">Project Name *</Label>
                    <Input
                      id="projectName"
                      name="projectName"
                      placeholder="Your Protocol Name"
                      required
                      className={errors.projectName ? "border-red-500" : ""}
                    />
                    {errors.projectName && <p className="text-sm text-red-500">{errors.projectName}</p>}
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

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="telegram">Telegram</Label>
                    <Input id="telegram" name="telegram" placeholder="@username" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="chain">Blockchain / Stack *</Label>
                    <Input
                      id="chain"
                      name="chain"
                      placeholder="Ethereum, Solana, etc."
                      required
                      className={errors.chain ? "border-red-500" : ""}
                    />
                    {errors.chain && <p className="text-sm text-red-500">{errors.chain}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="github">GitHub Repository or Code Link</Label>
                  <Input id="github" name="github" placeholder="https://github.com/..." />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Desired Timeline</Label>
                    <Input id="timeline" name="timeline" placeholder="e.g., 2-3 weeks" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Input id="budget" name="budget" placeholder="e.g., $10k-$20k" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe your protocol, key features, and any specific security concerns..."
                    rows={6}
                    required
                    className={errors.description ? "border-red-500" : ""}
                  />
                  {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file">Upload Documentation (Optional)</Label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept=".pdf,.zip"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="file"
                    className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-border/40 bg-card/50 p-8 transition-colors hover:border-primary/50"
                  >
                    {uploadedFile ? (
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">{uploadedFile.name}</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            setUploadedFile(null)
                          }}
                          className="ml-2 text-muted-foreground hover:text-foreground"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Upload className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                        <p className="text-xs text-muted-foreground">PDF, ZIP up to 10MB</p>
                      </div>
                    )}
                  </label>
                  {errors.file && <p className="text-sm text-red-500">{errors.file}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full animate-glow text-lg" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Audit Request"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
