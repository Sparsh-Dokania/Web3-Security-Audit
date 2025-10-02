import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, ExternalLink, FileText } from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      name: "DeFi Protocol Alpha",
      category: "DeFi",
      tvl: "$2.5B",
      description:
        "Comprehensive audit of a leading decentralized exchange protocol with automated market maker functionality.",
      findings: { critical: 2, high: 5, medium: 8, low: 12 },
      outcome: "All critical and high severity issues resolved. Protocol successfully launched.",
    },
    {
      name: "NFT Marketplace Beta",
      category: "NFT",
      tvl: "$850M",
      description:
        "Security review of NFT marketplace smart contracts including royalty distribution and auction mechanisms.",
      findings: { critical: 1, high: 3, medium: 6, low: 9 },
      outcome: "Critical reentrancy vulnerability patched. Platform operating securely.",
    },
    {
      name: "Cross-Chain Bridge Gamma",
      category: "Bridge",
      tvl: "$1.2B",
      description:
        "Multi-chain bridge audit covering message verification, state synchronization, and cross-chain security.",
      findings: { critical: 3, high: 7, medium: 11, low: 15 },
      outcome: "Bridge security hardened. Successfully processing millions in daily volume.",
    },
    {
      name: "DAO Governance Delta",
      category: "DAO",
      tvl: "$500M",
      description:
        "Governance protocol audit including voting mechanisms, proposal execution, and treasury management.",
      findings: { critical: 0, high: 4, medium: 7, low: 10 },
      outcome: "All issues addressed. DAO governance operating smoothly with 10k+ members.",
    },
    {
      name: "Lending Protocol Epsilon",
      category: "DeFi",
      tvl: "$1.8B",
      description:
        "Audit of decentralized lending platform with collateralization, liquidation, and interest rate models.",
      findings: { critical: 2, high: 6, medium: 9, low: 14 },
      outcome: "Critical oracle manipulation vulnerability fixed. Protocol secured $1.8B TVL.",
    },
    {
      name: "Staking Platform Zeta",
      category: "Staking",
      tvl: "$650M",
      description: "Security review of liquid staking protocol with validator management and reward distribution.",
      findings: { critical: 1, high: 4, medium: 8, low: 11 },
      outcome: "Staking rewards vulnerability patched. Platform serving 50k+ stakers.",
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
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            Trusted by leading Web3 protocols to secure billions in total value locked
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="border-border/40 bg-card/50 text-center backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary">150+</div>
              <div className="mt-2 text-sm text-muted-foreground">Audits Completed</div>
            </CardContent>
          </Card>
          <Card className="border-border/40 bg-card/50 text-center backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary">$5B+</div>
              <div className="mt-2 text-sm text-muted-foreground">TVL Secured</div>
            </CardContent>
          </Card>
          <Card className="border-border/40 bg-card/50 text-center backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="mt-2 text-sm text-muted-foreground">Vulnerabilities Found</div>
            </CardContent>
          </Card>
          <Card className="border-border/40 bg-card/50 text-center backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary">0</div>
              <div className="mt-2 text-sm text-muted-foreground">Post-Audit Exploits</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="group border-border/40 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardHeader>
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {project.category}
                  </span>
                </div>
                <CardTitle className="text-2xl">{project.name}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="mb-2 text-sm font-medium text-muted-foreground">Total Value Locked</div>
                  <div className="text-3xl font-bold text-primary">{project.tvl}</div>
                </div>
                <div>
                  <div className="mb-2 text-sm font-medium text-muted-foreground">Findings</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-destructive/20 px-3 py-1 text-xs font-medium text-destructive">
                      {project.findings.critical} Critical
                    </span>
                    <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium text-orange-500">
                      {project.findings.high} High
                    </span>
                    <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-medium text-yellow-500">
                      {project.findings.medium} Medium
                    </span>
                    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-500">
                      {project.findings.low} Low
                    </span>
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-sm font-medium text-muted-foreground">Outcome</div>
                  <p className="text-sm text-foreground">{project.outcome}</p>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <FileText className="mr-2 h-4 w-4" />
                    View Report
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 pb-20">
        <Card className="border-primary/20 bg-gradient-to-br from-primary/10 via-card/50 to-secondary/10 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">Join Our Portfolio</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Secure your protocol with the same expertise trusted by leading Web3 projects
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
