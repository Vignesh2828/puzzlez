"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  ExternalLink,
  Leaf,
  Building2,
  GraduationCap,
  Receipt,
  Plane,
  ChevronDown,
  Globe,
  ArrowUpRight,
  Layers,
  Cpu,
  Eye,
  Zap,
} from "lucide-react"

/* ── project data ─────────────────────────────────────── */

const projects = [
  {
    icon: Leaf,
    title: "Veena Naturals",
    category: "E-Commerce",
    url: "https://veenanaturals.in",
    tagline: "Nature's purity, delivered online",
    description:
      "A premium e-commerce platform for natural and organic products. Built with a focus on clean aesthetics, fast browsing, and seamless checkout to reflect the brand's pure identity.",
    gradient: "from-emerald-500 to-teal-400",
    bgGradient: "from-emerald-500/10 to-teal-500/5",
    solidGradient: "from-emerald-600 via-emerald-500 to-teal-400",
    iconColor: "text-emerald-500",
    borderHover: "hover:border-emerald-500/40",
    accentRing: "ring-emerald-500/20",
    shadowColor: "shadow-emerald-500/10",
    tech: [
      { name: "Next.js", color: "bg-white/20 text-white" },
      { name: "Tailwind CSS", color: "bg-white/20 text-white" },
      { name: "Razorpay", color: "bg-white/20 text-white" },
      { name: "MongoDB", color: "bg-white/20 text-white" },
    ],
    highlights: [
      { icon: Layers, text: "Responsive product catalog with advanced filtering" },
      { icon: Zap, text: "Secure payment gateway integration via Razorpay" },
      { icon: Eye, text: "SEO-optimized for organic visibility & growth" },
      { icon: Cpu, text: "Fast-loading pages with image optimization" },
    ],
  },
  {
    icon: Building2,
    title: "Zara Architects",
    category: "Portfolio",
    url: "https://zaraarchitects.com",
    tagline: "Where vision meets structure",
    description:
      "A visually stunning architect portfolio showcasing residential and commercial projects. Designed with elegant layouts, smooth animations, and a gallery-driven experience.",
    gradient: "from-amber-500 to-orange-400",
    bgGradient: "from-amber-500/10 to-orange-500/5",
    solidGradient: "from-amber-600 via-amber-500 to-orange-400",
    iconColor: "text-amber-500",
    borderHover: "hover:border-amber-500/40",
    accentRing: "ring-amber-500/20",
    shadowColor: "shadow-amber-500/10",
    tech: [
      { name: "Next.js", color: "bg-white/20 text-white" },
      { name: "Framer Motion", color: "bg-white/20 text-white" },
      { name: "Tailwind CSS", color: "bg-white/20 text-white" },
      { name: "Vercel", color: "bg-white/20 text-white" },
    ],
    highlights: [
      { icon: Eye, text: "Immersive full-screen project galleries with lightbox" },
      { icon: Zap, text: "Smooth scroll-driven animations for storytelling" },
      { icon: Layers, text: "Elegant typography and whitespace-focused design" },
      { icon: Cpu, text: "Mobile-optimized for clients browsing on-the-go" },
    ],
  },
  {
    icon: GraduationCap,
    title: "DPS Tuition",
    category: "Education",
    url: "https://dpstuition.com",
    tagline: "Empowering students, one lesson at a time",
    description:
      "A modern tuition center website connecting students with quality education. Features course listings, online registration, and an intuitive interface for parents and students.",
    gradient: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-500/10 to-cyan-500/5",
    solidGradient: "from-blue-600 via-blue-500 to-cyan-400",
    iconColor: "text-blue-500",
    borderHover: "hover:border-blue-500/40",
    accentRing: "ring-blue-500/20",
    shadowColor: "shadow-blue-500/10",
    tech: [
      { name: "React", color: "bg-white/20 text-white" },
      { name: "Node.js", color: "bg-white/20 text-white" },
      { name: "Tailwind CSS", color: "bg-white/20 text-white" },
      { name: "Firebase", color: "bg-white/20 text-white" },
    ],
    highlights: [
      { icon: Layers, text: "Dynamic course catalog with filtering by subject & grade" },
      { icon: Cpu, text: "Online student registration and inquiry forms" },
      { icon: Eye, text: "Teacher profiles with qualifications & experience" },
      { icon: Zap, text: "Responsive design for all device types" },
    ],
  },
  {
    icon: Receipt,
    title: "BillSmith",
    category: "Web App",
    url: null,
    tagline: "Invoicing made effortless",
    description:
      "A powerful invoice generation web app for small businesses and freelancers. Features customizable templates, tax calculations, client management, and PDF export — all in one place.",
    gradient: "from-violet-500 to-purple-400",
    bgGradient: "from-violet-500/10 to-purple-500/5",
    solidGradient: "from-violet-600 via-violet-500 to-purple-400",
    iconColor: "text-violet-500",
    borderHover: "hover:border-violet-500/40",
    accentRing: "ring-violet-500/20",
    shadowColor: "shadow-violet-500/10",
    tech: [
      { name: "Next.js", color: "bg-white/20 text-white" },
      { name: "TypeScript", color: "bg-white/20 text-white" },
      { name: "IndexedDB", color: "bg-white/20 text-white" },
      { name: "PDF Export", color: "bg-white/20 text-white" },
    ],
    highlights: [
      { icon: Layers, text: "Customizable invoice templates with live preview" },
      { icon: Cpu, text: "Automatic tax calculations and discount handling" },
      { icon: Eye, text: "Client & product management with quick search" },
      { icon: Zap, text: "One-click PDF generation and thermal print support" },
    ],
  },
  {
    icon: Plane,
    title: "WayToClear",
    category: "Travel",
    url: null,
    tagline: "Know before you go",
    description:
      "A dynamic travel companion platform where travelers discover essential details about any country before visiting — visas, culture, currency, safety tips, and local insights, all in one place.",
    gradient: "from-rose-500 to-pink-400",
    bgGradient: "from-rose-500/10 to-pink-500/5",
    solidGradient: "from-rose-600 via-rose-500 to-pink-400",
    iconColor: "text-rose-500",
    borderHover: "hover:border-rose-500/40",
    accentRing: "ring-rose-500/20",
    shadowColor: "shadow-rose-500/10",
    tech: [
      { name: "Next.js", color: "bg-white/20 text-white" },
      { name: "REST APIs", color: "bg-white/20 text-white" },
      { name: "Tailwind CSS", color: "bg-white/20 text-white" },
      { name: "Vercel", color: "bg-white/20 text-white" },
    ],
    highlights: [
      { icon: Globe, text: "Country-wise travel guides with visa & entry requirements" },
      { icon: Cpu, text: "Real-time currency converter and local cost estimates" },
      { icon: Eye, text: "Cultural etiquette tips and safety advisories" },
      { icon: Zap, text: "Interactive destination explorer with search & filters" },
    ],
  },
]

/* ── animations ───────────────────────────────────────── */

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/* ── project card ─────────────────────────────────────── */

function ProjectCard({
  project,
  index,
  isExpanded,
  onToggle,
}: {
  project: (typeof projects)[number]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <motion.div variants={fadeUp} layout>
      <Card
        className={`group relative h-full cursor-pointer overflow-hidden border-border/30 bg-card/60 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 ${project.borderHover} hover:shadow-2xl ${project.shadowColor} ${isExpanded ? `border-primary/30 ring-1 ring-primary/10 shadow-2xl ${project.shadowColor} -translate-y-1` : ""}`}
        onClick={onToggle}
      >
        {/* ── Gradient hero banner ── */}
        <div className={`relative overflow-hidden bg-gradient-to-br ${project.solidGradient} px-7 pb-14 pt-7`}>
          {/* Decorative circles */}
          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/10 blur-xl" />
          <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/10 blur-lg" />
          <div className="absolute right-12 top-12 h-16 w-16 rounded-full bg-white/5" />

          {/* Number badge + category */}
          <div className="relative flex items-center justify-between">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-sm font-bold text-white backdrop-blur-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="rounded-full bg-white/20 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* Icon */}
          <div className="relative mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-white shadow-lg shadow-black/10 backdrop-blur-sm ring-1 ring-white/20 transition-transform duration-500 group-hover:scale-110">
            <project.icon className="h-7 w-7" strokeWidth={1.5} />
          </div>
        </div>

        {/* ── Card Body ── */}
        <CardContent className="relative -mt-6 rounded-t-3xl bg-card px-7 pb-7 pt-7">
          {/* Title row */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className={`mt-1 text-sm font-medium ${project.iconColor}`}>
                {project.tagline}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-secondary/60 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:scale-110 hover:shadow-lg`}
                  title={`Visit ${project.title}`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              <motion.button
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/50 transition-all duration-300 ${isExpanded ? "bg-primary/10 text-primary border-primary/30" : "bg-secondary/60 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30"}`}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.button>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Tech pills — always visible */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t.name}
                className={`inline-flex items-center gap-1.5 rounded-lg border border-border/50 bg-secondary/50 px-3 py-1.5 text-xs font-semibold text-foreground/80 backdrop-blur-sm transition-colors duration-300 group-hover:border-border/70`}
              >
                <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                {t.name}
              </span>
            ))}
          </div>

          {/* ── Expanded content ── */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-6 space-y-5 border-t border-border/30 pt-6">
                  {/* Section label */}
                  <div className="flex items-center gap-2">
                    <span className={`h-4 w-1 rounded-full bg-gradient-to-b ${project.gradient}`} />
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground">
                      Key Highlights
                    </p>
                  </div>

                  {/* Highlight items with icons */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="group/item flex items-start gap-3 rounded-xl border border-border/30 bg-secondary/30 p-3.5 transition-all duration-300 hover:border-border/50 hover:bg-secondary/50"
                      >
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${project.bgGradient} ${project.iconColor} transition-transform duration-300 group-hover/item:scale-110`}>
                          <item.icon className="h-4 w-4" strokeWidth={2} />
                        </div>
                        <p className="text-sm leading-snug text-muted-foreground">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Visit live site CTA */}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`group/cta inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r ${project.solidGradient} px-6 py-3 text-sm font-semibold text-white shadow-lg ${project.shadowColor} transition-all duration-300 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98]`}
                    >
                      <Globe className="h-4 w-4" />
                      Visit Live Site
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                    </a>
                  )}
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

export function Works() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleToggle = (idx: number) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-32">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/5 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-violet-500/5 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-500/3 via-transparent to-transparent blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6 max-w-3xl"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Portfolio
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Projects We&apos;ve{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
              Brought to Life
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From e-commerce platforms to travel companions — real products built
            for real businesses. Click on any project to explore the details.
          </p>
        </motion.div>

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-14 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
        >
          {[
            { value: `${projects.length}+`, label: "Projects" },
            { value: "100%", label: "On Time" },
            { value: "5★", label: "Client Rating" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">{stat.value}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ── Project Cards Grid ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              index={idx}
              isExpanded={expandedIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
