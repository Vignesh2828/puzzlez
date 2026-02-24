"use client"

import { motion } from "framer-motion"
import { Search, Map, Code, Rocket, Shield, type LucideIcon } from "lucide-react"

interface Step {
  icon: LucideIcon
  title: string
  description: string
  accent: string
}

const steps: Step[] = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We dive deep into your vision, goals, and user needs to define the right problem to solve.",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    icon: Map,
    title: "Planning",
    description:
      "Architecture design, tech stack selection, sprint planning, and clear milestones.",
    accent: "from-violet-500 to-purple-500",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Agile sprints with continuous integration, code reviews, and regular demos.",
    accent: "from-amber-500 to-orange-500",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description:
      "Rigorous testing, CI/CD pipelines, and production-ready deployments.",
    accent: "from-rose-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Support",
    description:
      "Ongoing monitoring, performance optimization, and feature iterations.",
    accent: "from-emerald-500 to-teal-500",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function Process() {
  return (
    <section className="relative px-6 py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
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

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Connecting line */}
          <div className="absolute left-[27px] top-8 hidden h-[calc(100%-64px)] w-px md:block">
            <div className="h-full w-full bg-gradient-to-b from-primary/30 via-primary/15 to-transparent" />
          </div>

          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={stepVariants}
                className="group relative"
              >
                <div className="flex gap-5 rounded-2xl border border-border/50 bg-card/40 p-5 backdrop-blur-sm transition-all duration-500 hover:border-primary/25 hover:bg-card/70 hover:shadow-lg hover:shadow-primary/[0.03] md:gap-7 md:p-7">
                  {/* Step number & icon */}
                  <div className="relative z-10 shrink-0">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      <step.icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    {/* Step number badge */}
                    <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-foreground text-[10px] font-bold text-background shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-lg font-semibold text-foreground md:text-xl">
                        {step.title}
                      </h3>
                      {/* Decorative line */}
                      <div className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent md:block" />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
