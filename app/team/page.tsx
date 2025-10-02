import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react"

export default function TeamPage() {
  const team = [
    {
      name: "Alex Chen",
      role: "Lead Security Researcher",
      bio: "Former Ethereum Foundation researcher with 8+ years in smart contract security. Discovered critical vulnerabilities in major DeFi protocols.",
      avatar: "/professional-male-developer.jpg",
      socials: {
        github: "https://github.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Sarah Martinez",
      role: "Senior Auditor",
      bio: "Specialized in cross-chain security and bridge protocols. Previously led security at a top-10 DeFi protocol.",
      avatar: "/professional-female-developer.jpg",
      socials: {
        github: "https://github.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "David Kim",
      role: "Solana Security Expert",
      bio: "Core contributor to Solana security tooling. Expert in Rust and Anchor framework security patterns.",
      avatar: "/professional-asian-developer.jpg",
      socials: {
        github: "https://github.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Emily Johnson",
      role: "Protocol Economics Analyst",
      bio: "PhD in Game Theory. Specializes in tokenomics analysis and economic security of DeFi protocols.",
      avatar: "/professional-female-analyst.jpg",
      socials: {
        github: "https://github.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Michael Brown",
      role: "Security Engineer",
      bio: "Built automated security analysis tools used by top audit firms. Expert in symbolic execution and fuzzing.",
      avatar: "/professional-male-engineer.jpg",
      socials: {
        github: "https://github.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Lisa Wang",
      role: "Smart Contract Auditor",
      bio: "Former smart contract developer at leading DeFi protocols. Transitioned to security with 50+ audits completed.",
      avatar: "/professional-asian-female-developer.jpg",
      socials: {
        github: "https://github.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
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
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            A decentralized network of elite security researchers and auditors with decades of combined experience
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <Card
              key={member.name}
              className="group border-border/40 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20 transition-all group-hover:border-primary/50">
                    <img
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <CardTitle className="text-center text-xl">{member.name}</CardTitle>
                <CardDescription className="text-center font-medium text-primary">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-center text-sm text-muted-foreground">{member.bio}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="container mx-auto px-4 pb-20">
        <Card className="border-primary/20 bg-gradient-to-br from-primary/10 via-card/50 to-secondary/10 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">Join Our Network</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              We're always looking for talented security researchers to join our decentralized audit network
            </p>
            <Button asChild size="lg" className="animate-glow text-lg">
              <Link href="/contact">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  )
}
