import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram } from "lucide-react"

const footerLinks = {
  Services: [
    { label: "Web Applications", href: "/services" },
    { label: "Mobile Apps", href: "/services" },
    { label: "Microsoft 365", href: "/services" },
    { label: "Cloud & DevOps", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Tech Stack", href: "/tech-stack" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/#contact" },
  ],
  Resources: [
    { label: "Tech Stack", href: "/tech-stack" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-xl font-bold text-foreground">
              Puzzlez<span className="text-primary ml-[2px]">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A tech startup digitalizing businesses with modern technology,
              Microsoft 365 solutions, and custom software development.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold text-foreground">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} Puzzlez. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
