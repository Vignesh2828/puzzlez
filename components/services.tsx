"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Globe,
  Smartphone,
  Layers,
  Cloud,
  Palette,
  Monitor,
  Server,
  ChevronDown,
  Check,
  ArrowRight,
} from "lucide-react"

/* ── service data ─────────────────────────────────────── */

const services = [
  {
    icon: Monitor,
    title: "Website Development",
    description:
      "Beautiful, fast-loading websites that convert visitors into customers. From landing pages to full-scale corporate sites, we build for impact.",
    gradient: "from-sky-500 to-blue-500",
    bgGradient: "from-sky-500/10 to-blue-500/5",
    iconColor: "text-sky-500",
    borderHover: "hover:border-sky-500/40",
    techStack: [
      { name: "Next.js", color: "bg-gray-800 text-white dark:bg-white dark:text-gray-900" },
      { name: "WordPress", color: "bg-blue-600/15 text-blue-600" },
      { name: "HTML/CSS", color: "bg-orange-500/15 text-orange-600" },
      { name: "Tailwind CSS", color: "bg-cyan-500/15 text-cyan-600" },
      { name: "SEO", color: "bg-green-500/15 text-green-600" },
      { name: "Analytics", color: "bg-amber-500/15 text-amber-600" },
    ],
    approach: [
      "Mobile-first responsive design with pixel-perfect layouts",
      "SEO-optimized architecture for maximum organic visibility",
      "Blazing-fast load times with SSR/SSG and CDN delivery",
      "CMS integration for easy content management",
    ],
    features: ["Custom Design", "SEO Optimized", "CMS Ready", "Analytics"],
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Custom-built web applications using modern frameworks, designed for performance, scalability, and seamless user experiences.",
    gradient: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-500/10 to-cyan-500/5",
    iconColor: "text-blue-500",
    borderHover: "hover:border-blue-500/40",
    techStack: [
      { name: "React", color: "bg-sky-500/15 text-sky-600" },
      { name: "Next.js", color: "bg-gray-800 text-white dark:bg-white dark:text-gray-900" },
      { name: "TypeScript", color: "bg-blue-600/15 text-blue-600" },
      { name: "Tailwind", color: "bg-cyan-500/15 text-cyan-600" },
      { name: "PostgreSQL", color: "bg-indigo-500/15 text-indigo-600" },
      { name: "Prisma", color: "bg-violet-500/15 text-violet-600" },
    ],
    approach: [
      "Component-driven architecture with reusable UI libraries",
      "Type-safe full-stack development with end-to-end typings",
      "Real-time features with WebSockets and server-sent events",
      "Progressive Web App (PWA) support for offline functionality",
    ],
    features: ["Real-time", "Type-safe", "PWA Ready", "Scalable"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for Android and iOS, engineered for speed, reliability, and delightful UX.",
    gradient: "from-violet-500 to-purple-400",
    bgGradient: "from-violet-500/10 to-purple-500/5",
    iconColor: "text-violet-500",
    borderHover: "hover:border-violet-500/40",
    techStack: [
      { name: "React Native", color: "bg-sky-500/15 text-sky-600" },
      { name: "Flutter", color: "bg-blue-500/15 text-blue-600" },
      { name: "Swift", color: "bg-orange-500/15 text-orange-600" },
      { name: "Kotlin", color: "bg-purple-500/15 text-purple-600" },
      { name: "Firebase", color: "bg-amber-500/15 text-amber-600" },
      { name: "Expo", color: "bg-gray-800 text-white dark:bg-white dark:text-gray-900" },
    ],
    approach: [
      "Cross-platform development with shared business logic",
      "Native performance with platform-specific optimizations",
      "Push notifications, offline storage, and biometric auth",
      "App Store & Play Store deployment and maintenance",
    ],
    features: ["Cross-Platform", "Offline First", "Push Alerts", "Biometric"],
  },
  {
    icon: Layers,
    title: "Microsoft 365 Services",
    description:
      "End-to-end Microsoft 365 and Power Platform solutions — from Power Apps and Power Automate to SharePoint and Teams integrations that transform your business workflows.",
    gradient: "from-blue-600 to-indigo-500",
    bgGradient: "from-blue-600/10 to-indigo-500/5",
    iconColor: "text-blue-600",
    borderHover: "hover:border-blue-600/40",
    techStack: [
      { name: "Power Apps", color: "bg-purple-600/15 text-purple-600" },
      { name: "Power Automate", color: "bg-blue-600/15 text-blue-600" },
      { name: "Power BI", color: "bg-amber-500/15 text-amber-600" },
      { name: "SharePoint", color: "bg-teal-500/15 text-teal-600" },
      { name: "Microsoft Teams", color: "bg-indigo-500/15 text-indigo-600" },
      { name: "Dataverse", color: "bg-green-600/15 text-green-600" },
    ],
    approach: [
      "Custom Power Apps for digitizing business processes",
      "Automated workflows with Power Automate and AI Builder",
      "SharePoint intranet and document management solutions",
      "Power BI dashboards for real-time business intelligence",
    ],
    features: ["Power Apps", "Automation", "BI Dashboards", "SharePoint"],
  },
  {
    icon: Server,
    title: "API & Backend",
    description:
      "Robust, well-documented APIs and backend systems that power your applications with reliability, security, and speed.",
    gradient: "from-amber-500 to-orange-400",
    bgGradient: "from-amber-500/10 to-orange-500/5",
    iconColor: "text-amber-500",
    borderHover: "hover:border-amber-500/40",
    techStack: [
      { name: "Node.js", color: "bg-green-500/15 text-green-600" },
      { name: "Express", color: "bg-gray-800 text-white dark:bg-white dark:text-gray-900" },
      { name: "GraphQL", color: "bg-pink-500/15 text-pink-600" },
      { name: "REST", color: "bg-blue-500/15 text-blue-600" },
      { name: "MongoDB", color: "bg-emerald-500/15 text-emerald-600" },
      { name: "Redis", color: "bg-red-500/15 text-red-600" },
    ],
    approach: [
      "RESTful and GraphQL API design with versioning strategies",
      "Database design and optimization for high-throughput systems",
      "Authentication, rate limiting, and security best practices",
      "Comprehensive API documentation with OpenAPI/Swagger",
    ],
    features: ["REST & GraphQL", "Secure", "Documented", "Fast"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure setup, CI/CD pipelines, containerization, and monitoring to keep your systems running at peak performance.",
    gradient: "from-rose-500 to-pink-400",
    bgGradient: "from-rose-500/10 to-pink-500/5",
    iconColor: "text-rose-500",
    borderHover: "hover:border-rose-500/40",
    techStack: [
      { name: "AWS", color: "bg-orange-500/15 text-orange-600" },
      { name: "Docker", color: "bg-blue-500/15 text-blue-600" },
      { name: "Kubernetes", color: "bg-indigo-500/15 text-indigo-600" },
      { name: "GitHub Actions", color: "bg-gray-800 text-white dark:bg-white dark:text-gray-900" },
      { name: "Vercel", color: "bg-gray-800 text-white dark:bg-white dark:text-gray-900" },
      { name: "Terraform", color: "bg-violet-500/15 text-violet-600" },
    ],
    approach: [
      "Infrastructure-as-code with automated provisioning",
      "CI/CD pipelines for zero-downtime deployments",
      "Container orchestration for scalable microservices",
      "Real-time monitoring, alerting, and log aggregation",
    ],
    features: ["Auto-scale", "Zero Downtime", "Monitoring", "IaC"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Research-driven design systems and interfaces that delight users and drive conversion, from wireframes to pixel-perfect delivery.",
    gradient: "from-fuchsia-500 to-violet-400",
    bgGradient: "from-fuchsia-500/10 to-violet-500/5",
    iconColor: "text-fuchsia-500",
    borderHover: "hover:border-fuchsia-500/40",
    techStack: [
      { name: "Figma", color: "bg-purple-500/15 text-purple-600" },
      { name: "Framer", color: "bg-blue-500/15 text-blue-600" },
      { name: "Prototyping", color: "bg-pink-500/15 text-pink-600" },
      { name: "User Research", color: "bg-emerald-500/15 text-emerald-600" },
      { name: "Design System", color: "bg-amber-500/15 text-amber-600" },
      { name: "A/B Testing", color: "bg-rose-500/15 text-rose-600" },
    ],
    approach: [
      "User research and competitive analysis for informed design",
      "Wireframing and interactive prototyping for rapid iteration",
      "Design system creation for consistent brand identity",
      "Usability testing and A/B experiments for data-driven refinements",
    ],
    features: ["Research-driven", "Prototyped", "Consistent", "Tested"],
  },
]

/* ── animations ───────────────────────────────────────── */

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/* ── service card sub-component ───────────────────────── */

function ServiceCard({
  service,
  isExpanded,
  onToggle,
}: {
  service: (typeof services)[number]
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <motion.div variants={fadeUp}>
      <Card
        className={`group relative h-full cursor-pointer overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${service.borderHover} hover:shadow-2xl hover:shadow-primary/5 ${isExpanded ? "border-primary/30 ring-1 ring-primary/10 shadow-xl shadow-primary/5" : ""}`}
        onClick={onToggle}
      >
        {/* Gradient accent top bar */}
        <div
          className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.gradient} transition-all duration-500 ${isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        />

        {/* Hover / expanded glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} transition-opacity duration-500 ${isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
        />

        <CardContent className="relative flex flex-col gap-5 p-7">
          {/* Header row */}
          <div className="flex items-start justify-between gap-3">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${service.bgGradient} ${service.iconColor} ring-1 ring-border/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${isExpanded ? "scale-110 shadow-lg" : ""}`}
            >
              <service.icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/80 text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary"
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </div>

          {/* Title & description */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </div>

          {/* Feature badges — always visible */}
          <div className="flex flex-wrap gap-2">
            {service.features.map((feat) => (
              <span
                key={feat}
                className="inline-flex items-center gap-1 rounded-full border border-border/50 bg-secondary/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur-sm"
              >
                <Check className="h-3 w-3 text-emerald-500" />
                {feat}
              </span>
            ))}
          </div>

          {/* Expanded content */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-6 border-t border-border/30 pt-5">
                  {/* Tech Stack */}
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                      Tech Stack We Use
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech.name}
                          className={`inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-semibold shadow-sm ${tech.color}`}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Development Approach */}
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                      How We Build It
                    </p>
                    <ul className="space-y-2.5">
                      {service.approach.map((step, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span
                            className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${service.gradient}`}
                          />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA hint */}
                  <div className="flex items-center gap-2 text-xs font-medium text-primary">
                    <ArrowRight className="h-3.5 w-3.5" />
                    Click anywhere to collapse
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  )
}

/* ── main component ───────────────────────────────────── */

export function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleToggle = (idx: number) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <section className="relative overflow-hidden px-6 py-16 md:py-24">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/5 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-violet-500/5 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-500/3 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Our Expertise
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Services That{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              Drive Growth
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            End-to-end digital expertise to take your product from concept to
            scale. Click on any service to explore the tech stacks we use and
            how we build it.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, idx) => (
            <ServiceCard
              key={service.title}
              service={service}
              isExpanded={expandedIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
