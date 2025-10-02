"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const posts = [
    {
      title: "Understanding Reentrancy Attacks in DeFi",
      excerpt:
        "A deep dive into reentrancy vulnerabilities and how to protect your smart contracts from this common attack vector.",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Security",
      tags: ["DeFi", "Vulnerabilities", "Best Practices"],
      slug: "understanding-reentrancy-attacks-in-defi",
    },
    {
      title: "Cross-Chain Bridge Security: Lessons from Recent Exploits",
      excerpt:
        "Analyzing major bridge hacks and extracting key security principles for cross-chain protocol developers.",
      date: "2025-01-10",
      readTime: "12 min read",
      category: "Research",
      tags: ["Bridges", "Cross-Chain", "Post-Mortem"],
      slug: "cross-chain-bridge-security-lessons-from-recent-exploits",
    },
    {
      title: "Solana Program Security: Common Pitfalls",
      excerpt: "Essential security considerations for Solana developers, from account validation to CPI security.",
      date: "2025-01-05",
      readTime: "10 min read",
      category: "Tutorial",
      tags: ["Solana", "Rust", "Development"],
      slug: "solana-program-security-common-pitfalls",
    },
    {
      title: "MEV Protection Strategies for DeFi Protocols",
      excerpt: "Exploring various approaches to mitigate MEV extraction and protect users from sandwich attacks.",
      date: "2024-12-28",
      readTime: "15 min read",
      category: "Research",
      tags: ["MEV", "DeFi", "Economics"],
      slug: "mev-protection-strategies-for-defi-protocols",
    },
    {
      title: "Smart Contract Upgrade Patterns: Security Considerations",
      excerpt: "Comparing proxy patterns and their security implications for upgradeable smart contracts.",
      date: "2024-12-20",
      readTime: "9 min read",
      category: "Tutorial",
      tags: ["Upgrades", "Proxies", "Architecture"],
      slug: "smart-contract-upgrade-patterns-security-considerations",
    },
    {
      title: "The State of Web3 Security in 2025",
      excerpt: "Annual report on the Web3 security landscape, major incidents, and emerging threats.",
      date: "2024-12-15",
      readTime: "20 min read",
      category: "Report",
      tags: ["Industry", "Trends", "Analysis"],
      slug: "the-state-of-web3-security-in-2025",
    },
  ]

  const categories = ["All", "Security", "Research", "Tutorial", "Report"]

  const filteredPosts = selectedCategory === "All" ? posts : posts.filter((post) => post.category === selectedCategory)

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-balance text-5xl font-bold leading-tight md:text-6xl">
            Research &{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-pretty text-lg text-muted-foreground md:text-xl">
            Deep dives into Web3 security, vulnerability analysis, and best practices from our research team
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 pb-20">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar */}
          <aside className="lg:w-64">
            <Card className="sticky top-20 border-border/40 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                          selectedCategory === category
                            ? "bg-primary/20 text-primary font-medium"
                            : "hover:bg-primary/10 hover:text-primary"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </aside>

          {/* Blog Posts */}
          <div className="flex-1">
            <div className="grid gap-6 md:grid-cols-2">
              {filteredPosts.map((post) => (
                <Card
                  key={post.slug}
                  className="group border-border/40 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
                >
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-muted/50 px-2 py-1 text-xs text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
