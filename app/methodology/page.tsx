import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FileText, Download, CheckCircle, Search, Code, AlertTriangle, Shield } from "lucide-react"

export default function MethodologyPage() {
  const steps = [
    {
      icon: FileText,
      title: "Onboarding & Scoping",
      description:
        "Initial consultation to understand your protocol, architecture, and security requirements. We define the audit scope, timeline, and deliverables.",
      details: ["Architecture review", "Documentation analysis", "Scope definition", "Timeline planning"],
    },
    {
      icon: Search,
      title: "Automated Analysis",
      description:
        "Deploy our custom tooling suite for static analysis, symbolic execution, and fuzzing to identify common vulnerabilities and edge cases.",
      details: ["Static analysis", "Symbolic execution", "Fuzzing & property testing", "Gas optimization analysis"],
    },
    {
      icon: Code,
      title: "Manual Code Review",
      description:
        "Expert auditors perform line-by-line code review, analyzing business logic, access controls, and potential attack vectors.",
      details: ["Line-by-line review", "Business logic analysis", "Access control verification", "Integration testing"],
    },
    {
      icon: AlertTriangle,
      title: "Exploit Development",
      description:
        "Attempt to develop proof-of-concept exploits for identified vulnerabilities to validate severity and demonstrate impact.",
      details: ["PoC exploit development", "Attack vector analysis", "Severity validation", "Impact assessment"],
    },
    {
      icon: Shield,
      title: "Report & Remediation",
      description:
        "Deliver comprehensive report with findings, severity classifications, and detailed remediation guidance. Verify all fixes in re-audit.",
      details: ["Detailed findings report", "Remediation guidance", "Fix verification", "Final certification"],
    },
  ]

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-balance text-5xl font-bold leading-tight md:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Methodology
            </span>
          </h1>
          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            A proven 5-step process combining automated tools and expert manual review for comprehensive security audits
          </p>
          <Button size="lg" className="animate-glow">
            <Download className="mr-2 h-5 w-5" />
            Download Sample Report
          </Button>
        </div>
      </section>

      {/* Methodology Steps */}
      <section className="container mx-auto px-4 pb-20">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              className="border-border/40 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardContent className="p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <div className="flex items-center gap-4 md:flex-col md:items-center">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-primary to-secondary font-mono text-2xl font-bold">
                      {index + 1}
                    </div>
                    <div className="hidden h-full w-0.5 bg-gradient-to-b from-primary to-secondary md:block md:min-h-[100px]" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-4 flex items-start gap-4">
                      <step.icon className="h-8 w-8 flex-shrink-0 text-primary" />
                      <div>
                        <h3 className="mb-2 text-2xl font-bold">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                    <div className="ml-12 grid gap-2 sm:grid-cols-2">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sample Report Section */}
      <section className="border-y border-border/40 bg-card/30 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">Sample Audit Report</h2>
              <p className="text-lg text-muted-foreground">
                See what a comprehensive SecureChain audit report looks like
              </p>
            </div>
            <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Report Contents</CardTitle>
                <CardDescription>Our reports include detailed analysis and actionable recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Executive Summary</h4>
                    <p className="text-sm text-muted-foreground">High-level overview of findings and risk assessment</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Scope & Methodology</h4>
                    <p className="text-sm text-muted-foreground">Detailed audit scope and approach used</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Findings & Severity</h4>
                    <p className="text-sm text-muted-foreground">All vulnerabilities with CVSS severity ratings</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Proof of Concept</h4>
                    <p className="text-sm text-muted-foreground">Exploit code demonstrating vulnerabilities</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Remediation Guidance</h4>
                    <p className="text-sm text-muted-foreground">Step-by-step fixes for each issue</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Best Practices</h4>
                    <p className="text-sm text-muted-foreground">Recommendations for ongoing security</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button size="lg" className="w-full animate-glow">
                    <Download className="mr-2 h-5 w-5" />
                    Download Sample Report (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="border-primary/20 bg-gradient-to-br from-primary/10 via-card/50 to-secondary/10 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Experience our comprehensive audit methodology for your protocol
            </p>
            <Button asChild size="lg" className="animate-glow text-lg">
              <Link href="/request-audit">Request Audit</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  )
}
