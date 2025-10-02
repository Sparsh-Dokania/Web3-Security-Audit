import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StatCounter } from "@/components/stat-counter"
import { Shield, Code, Layers, ArrowRight } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: Shield,
      title: "Smart Contract Audits",
      description: "Comprehensive security analysis of EVM-based smart contracts with detailed vulnerability reports.",
    },
    {
      icon: Layers,
      title: "Cross-Chain Audits",
      description:
        "Multi-chain protocol security reviews covering bridges, cross-chain messaging, and interoperability.",
    },
    {
      icon: Code,
      title: "Rust/Solana Audits",
      description: "Specialized audits for Solana programs and Rust-based blockchain implementations.",
    },
  ]

  const methodology = [
    { step: 1, title: "Onboarding", description: "Initial consultation and scope definition" },
    { step: 2, title: "Code Review", description: "Automated and manual security analysis" },
    { step: 3, title: "Manual Testing", description: "Exploit development and edge case testing" },
    { step: 4, title: "Report Delivery", description: "Detailed findings with remediation guidance" },
    { step: 5, title: "Re-audit", description: "Verification of fixes and final certification" },
  ]

  const portfolio = [
    { name: "DeFi Protocol Alpha", tvl: "$2.5B", category: "DeFi" },
    { name: "NFT Marketplace Beta", tvl: "$850M", category: "NFT" },
    { name: "Cross-Chain Bridge Gamma", tvl: "$1.2B", category: "Bridge" },
    { name: "DAO Governance Delta", tvl: "$500M", category: "DAO" },
  ]

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Trusted by 100+ Web3 Projects
          </div>
          <h1 className="mb-6 text-balance text-5xl font-bold leading-tight md:text-7xl">
            Advanced Web3 Security —{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Smart Contract & Protocol Audits
            </span>
          </h1>
          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            A decentralized network of researchers securing mission-critical protocols with comprehensive security
            audits and continuous monitoring.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="animate-glow text-lg">
              <Link href="/request-audit">
                Request Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/methodology">View Sample Report</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <StatCounter end={5} suffix="B+" label="TVL Secured" prefix="$" />
          <StatCounter end={150} suffix="+" label="Audits Completed" />
          <StatCounter end={500} suffix="+" label="Vulnerabilities Found" />
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-border/40 bg-card/30 py-8 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <p className="mb-6 text-center text-sm font-medium text-muted-foreground">TRUSTED BY LEADING WEB3 PROJECTS</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {["Protocol A", "DeFi B", "Bridge C", "DAO D", "NFT E", "Chain F"].map((name) => (
              <div
                key={name}
                className="flex h-12 w-32 items-center justify-center rounded-lg border border-border/40 bg-card/50 font-mono text-sm font-semibold text-muted-foreground"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive security solutions for every blockchain ecosystem
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border/40 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardHeader>
                <service.icon className="mb-4 h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
                <Button asChild variant="link" className="mt-4 p-0 text-primary">
                  <Link href="/services">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* Methodology Timeline */}
      <section className="border-y border-border/40 bg-card/30 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">Our Methodology</h2>
            <p className="text-lg text-muted-foreground">A proven 5-step process for comprehensive security audits</p>
          </div>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-primary md:block hidden" />
            <div className="space-y-8">
              {methodology.map((item, index) => (
                <div
                  key={item.step}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-left`}>
                    <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-primary to-secondary font-mono text-xl font-bold">
                    {item.step}
                  </div>
                  <div className="hidden flex-1 md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Carousel */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">Recent Audits</h2>
          <p className="text-lg text-muted-foreground">Securing the most innovative protocols in Web3</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((project) => (
            <Card
              key={project.name}
              className="border-border/40 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{project.name}</CardTitle>
                <CardDescription>
                  <span className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    {project.category}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{project.tvl}</div>
                <div className="text-sm text-muted-foreground">Total Value Locked</div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container mx-auto px-4 py-20">
        <Card className="border-primary/20 bg-gradient-to-br from-primary/10 via-card/50 to-secondary/10 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">Ready to Secure Your Protocol?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join 100+ projects that trust SecureChain with their smart contract security
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="animate-glow text-lg">
                <Link href="/request-audit">
                  Request Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  )
}
