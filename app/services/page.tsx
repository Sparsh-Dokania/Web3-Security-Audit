import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Code, Layers, TrendingUp, AlertTriangle, Zap, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Shield,
      title: "Smart Contract Audits",
      description:
        "Comprehensive security analysis of EVM-based smart contracts including Solidity and Vyper. We identify vulnerabilities, gas optimizations, and best practice violations.",
      features: ["Manual code review", "Automated analysis", "Gas optimization", "Best practices check"],
    },
    {
      icon: Layers,
      title: "Cross-Chain Audits",
      description:
        "Multi-chain protocol security reviews covering bridges, cross-chain messaging protocols, and interoperability solutions across different blockchain ecosystems.",
      features: ["Bridge security", "Message verification", "State synchronization", "Cross-chain exploits"],
    },
    {
      icon: Code,
      title: "Rust/Solana Audits",
      description:
        "Specialized audits for Solana programs and Rust-based blockchain implementations. Deep expertise in Anchor framework and Solana runtime security.",
      features: ["Program security", "Account validation", "CPI security", "Anchor patterns"],
    },
    {
      icon: TrendingUp,
      title: "Protocol Economics Review",
      description:
        "Economic security analysis of tokenomics, incentive mechanisms, and game theory. Identify potential economic exploits and manipulation vectors.",
      features: ["Tokenomics analysis", "Incentive design", "MEV resistance", "Economic attacks"],
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description:
        "Rapid response service for active exploits or suspicious activity. 24/7 emergency support to minimize damage and secure your protocol.",
      features: ["24/7 availability", "Rapid assessment", "Exploit mitigation", "Post-mortem analysis"],
    },
    {
      icon: Zap,
      title: "Continuous Monitoring",
      description:
        "Ongoing security monitoring and alerting for deployed contracts. Real-time detection of suspicious transactions and potential threats.",
      features: ["Real-time alerts", "Transaction monitoring", "Anomaly detection", "Threat intelligence"],
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
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Security Services
            </span>
          </h1>
          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            From smart contract audits to continuous monitoring, we provide end-to-end security solutions for Web3
            protocols.
          </p>
          <Button asChild size="lg" className="animate-glow">
            <Link href="/request-audit">
              Request Audit <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border/40 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardHeader>
                <service.icon className="mb-4 h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="link" className="mt-4 p-0 text-primary">
                  <Link href="/request-audit">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="border-y border-border/40 bg-card/30 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">Our Process</h2>
            <p className="text-lg text-muted-foreground">A systematic approach to comprehensive security</p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Initial Assessment</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                We begin with a thorough review of your codebase, architecture, and documentation to understand the
                scope and identify critical areas.
              </CardContent>
            </Card>
            <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Automated Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Our custom tooling performs static analysis, symbolic execution, and fuzzing to identify common
                vulnerabilities and edge cases.
              </CardContent>
            </Card>
            <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Manual Review</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Expert auditors perform line-by-line code review, business logic analysis, and attempt to develop
                exploits for identified issues.
              </CardContent>
            </Card>
            <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Report & Remediation</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Detailed report with severity classifications, proof-of-concept exploits, and remediation guidance. We
                verify all fixes in a re-audit.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="border-primary/20 bg-gradient-to-br from-primary/10 via-card/50 to-secondary/10 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">Start Your Audit Today</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Get a quote within 24 hours and secure your protocol before launch
            </p>
            <Button asChild size="lg" className="animate-glow text-lg">
              <Link href="/request-audit">
                Request Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  )
}
