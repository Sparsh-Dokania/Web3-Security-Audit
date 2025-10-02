import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, this would fetch the post data based on the slug
  const post = {
    title: "Understanding Reentrancy Attacks in DeFi",
    excerpt:
      "A deep dive into reentrancy vulnerabilities and how to protect your smart contracts from this common attack vector.",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Security",
    tags: ["DeFi", "Vulnerabilities", "Best Practices"],
    author: "Dr. Sarah Chen",
    content: `
      <h2>What is a Reentrancy Attack?</h2>
      <p>A reentrancy attack is one of the most common and dangerous vulnerabilities in smart contracts. It occurs when a contract makes an external call to another untrusted contract before resolving its own state. The untrusted contract can then recursively call back into the original contract, potentially draining funds or manipulating state.</p>

      <h2>The Famous DAO Hack</h2>
      <p>The most infamous example of a reentrancy attack was the DAO hack in 2016, which resulted in the loss of approximately $60 million worth of Ether. This incident led to the controversial hard fork that created Ethereum Classic.</p>

      <h2>How Reentrancy Works</h2>
      <p>Consider a simple withdrawal function:</p>
      <pre><code>function withdraw(uint amount) public {
    require(balances[msg.sender] >= amount);
    msg.sender.call.value(amount)("");
    balances[msg.sender] -= amount;
}</code></pre>

      <p>The vulnerability here is that the external call happens before the balance is updated. An attacker can create a malicious contract that calls withdraw() again in its fallback function, repeatedly withdrawing funds before the balance is decremented.</p>

      <h2>Prevention Strategies</h2>
      <h3>1. Checks-Effects-Interactions Pattern</h3>
      <p>Always update state before making external calls:</p>
      <pre><code>function withdraw(uint amount) public {
    require(balances[msg.sender] >= amount);
    balances[msg.sender] -= amount;
    msg.sender.call.value(amount)("");
}</code></pre>

      <h3>2. Use ReentrancyGuard</h3>
      <p>OpenZeppelin provides a ReentrancyGuard modifier that prevents nested calls:</p>
      <pre><code>import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract MyContract is ReentrancyGuard {
    function withdraw(uint amount) public nonReentrant {
        // Safe from reentrancy
    }
}</code></pre>

      <h3>3. Use transfer() or send() Instead of call()</h3>
      <p>These methods limit gas forwarded to 2300, preventing complex operations in the fallback function. However, this approach has limitations with EIP-1884.</p>

      <h2>Modern Considerations</h2>
      <p>With the introduction of EIP-1884 and changes to gas costs, some previously safe patterns may no longer work. Always stay updated with the latest security best practices and consider using established libraries like OpenZeppelin.</p>

      <h2>Conclusion</h2>
      <p>Reentrancy attacks remain a significant threat to DeFi protocols. By following the checks-effects-interactions pattern, using reentrancy guards, and staying informed about the latest security developments, developers can protect their contracts and users from this vulnerability.</p>
    `,
  }

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      <article className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Research
            </Link>
          </Button>

          <Card className="border-border/40 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="mb-6 flex items-center gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {post.category}
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">{post.title}</h1>

              <div className="mb-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
                <Button variant="ghost" size="sm" className="ml-auto">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>

              <div className="mb-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-muted/50 px-3 py-1 text-sm text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="prose prose-invert max-w-none prose-headings:font-bold prose-h2:mb-4 prose-h2:mt-8 prose-h2:text-3xl prose-h3:mb-3 prose-h3:mt-6 prose-h3:text-xl prose-p:mb-4 prose-p:leading-relaxed prose-pre:bg-muted/50 prose-pre:p-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-12 border-t border-border/40 pt-8">
                <h3 className="mb-4 text-xl font-bold">About the Author</h3>
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 flex-shrink-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div>
                    <p className="mb-2 font-semibold">{post.author}</p>
                    <p className="text-sm text-muted-foreground">
                      Lead Security Researcher at SecureChain with 10+ years of experience in smart contract auditing
                      and blockchain security. Former security engineer at major DeFi protocols.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Button asChild size="lg" className="animate-glow">
              <Link href="/request-audit">Request an Audit</Link>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
