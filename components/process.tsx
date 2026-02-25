"use client"

import { motion } from "framer-motion"
import {
  Search,
  Map,
  Code,
  Rocket,
  Shield,
  type LucideIcon,
} from "lucide-react"

interface Step {
  icon: LucideIcon
  title: string
  description: string
  accent: string
  accentBg: string
  step: string
}

const steps: Step[] = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We dive deep into your vision, goals, and user needs to define the right problem to solve.",
    accent: "from-blue-500 to-cyan-500",
    accentBg: "bg-blue-500/10",
    step: "01",
  },
  {
    icon: Map,
    title: "Planning",
    description:
      "Architecture design, tech stack selection, sprint planning, and clear milestones.",
    accent: "from-violet-500 to-purple-500",
    accentBg: "bg-violet-500/10",
    step: "02",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Agile sprints with continuous integration, code reviews, and regular demos.",
    accent: "from-amber-500 to-orange-500",
    accentBg: "bg-amber-500/10",
    step: "03",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description:
      "Rigorous testing, CI/CD pipelines, and production-ready deployments.",
    accent: "from-rose-500 to-pink-500",
    accentBg: "bg-rose-500/10",
    step: "04",
  },
  {
    icon: Shield,
    title: "Support",
    description:
      "Ongoing monitoring, performance optimization, and feature iterations.",
    accent: "from-emerald-500 to-teal-500",
    accentBg: "bg-emerald-500/10",
    step: "05",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}


export function Process() {
  return (
    <section className="relative px-6 py-20 md:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-blue-500/[0.02] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 text-center md:mb-20"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            How We Work
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Our Proven{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            A structured, transparent workflow that transforms your ideas into
            production-ready digital products.
          </p>
        </motion.div>

        {/* ── Desktop / Tablet: Horizontal flow ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="hidden md:block"
        >
          {/* Row 1: Steps 1-3 */}
          <div className="flex items-stretch justify-center gap-4 lg:gap-6">
            {steps.slice(0, 3).map((step) => (
              <StepCard key={step.title} step={step} />
            ))}
          </div>

          {/* Row 2: Steps 4-5 */}
          <div className="mt-4 lg:mt-6 flex items-stretch justify-center gap-4 lg:gap-6">
            {steps.slice(3, 5).map((step) => (
              <StepCard key={step.title} step={step} />
            ))}
          </div>
        </motion.div>

        {/* ── Mobile: Sticky stacking cards ── */}
        <div className="md:hidden">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="sticky mx-auto w-full max-w-sm"
              style={{
                top: `${80 + index * 20}px`,
                zIndex: index + 1,
                paddingBottom: index < steps.length - 1 ? "16px" : "0px",
              }}
            >
              <StepCard step={step} />
            </motion.div>
          ))}
          {/* Extra scroll space so last card can fully land */}
          <div className="h-16" />
        </div>
      </div>
    </section>
  )
}

/* ── Step Card Component ── */
function StepCard({ step }: { step: Step }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative w-full md:w-56 lg:w-64 xl:w-72"
    >
      <div className="relative h-full rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-5 lg:p-6 transition-all duration-500 hover:border-primary/30 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/[0.06] hover:-translate-y-1">
        {/* Step number watermark */}
        <span className="absolute top-3 right-4 text-[3.5rem] lg:text-[4rem] font-black leading-none text-foreground/[0.06] select-none transition-all duration-500 group-hover:text-primary/20 group-hover:scale-110">
          {step.step}
        </span>

        {/* Icon */}
        <div className="relative mb-4">
          <div
            className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.accent} text-white shadow-lg shadow-black/10 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl`}
          >
            <step.icon className="h-5 w-5" strokeWidth={1.8} />
          </div>
        </div>

        {/* Content */}
        <h3 className="mb-2 font-display text-base font-semibold text-foreground lg:text-lg">
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {step.description}
        </p>

        {/* Bottom accent bar */}
        <div
          className={`absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r ${step.accent} transition-all duration-500 group-hover:w-3/4`}
        />
      </div>
    </motion.div>
  )
}
