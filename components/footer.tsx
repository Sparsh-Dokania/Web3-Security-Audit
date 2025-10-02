import Link from "next/link"
import { Shield, Twitter, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-mono text-xl font-bold">SecureChain</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A decentralized network of researchers securing mission-critical protocols.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@securechain.io"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-primary">
                  Smart Contract Audits
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Cross-Chain Audits
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Rust/Solana Audits
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Protocol Economics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/portfolio" className="hover:text-primary">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="hover:text-primary">
                  Methodology
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-primary">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Research
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/request-audit" className="hover:text-primary">
                  Request Audit
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Get in Touch
                </Link>
              </li>
              <li>
                <a href="mailto:contact@securechain.io" className="hover:text-primary">
                  contact@securechain.io
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SecureChain Audits. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}