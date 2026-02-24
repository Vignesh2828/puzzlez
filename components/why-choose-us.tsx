"use client"

import { useRef } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { Boxes, Code2, Zap, HeartHandshake, ArrowUpRight, type LucideIcon } from "lucide-react"
import { useEffect } from "react"

/* ── animated counter hook ─────────────────────────────── */

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2, ease: [0.22, 1, 0.36, 1] })
    }
  }, [isInView, count, target])

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`
    })
    return unsubscribe
  }, [rounded, suffix])

  return <span ref={ref}>0{suffix}</span>
}

/* ── feature data ──────────────────────────────────────── */

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  stat: { value: number; suffix: string; label: string }
  gradient: string
  bgGradient: string
  iconColor: string
  borderHover: string
}

const features: Feature[] = [
  {
    icon: Boxes,
    title: "Scalable Architecture",
    description:
      "Systems designed to grow with your business, from day one to millions of users. Built on battle-tested patterns.",
    stat: { value: 99, suffix: "%", label: "Uptime SLA" },
    gradient: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-500/10 to-cyan-500/5",
    iconColor: "text-blue-500",
    borderHover: "hover:border-blue-500/40",
  },
  {
    icon: Code2,
    title: "Clean & Maintainable Code",
    description:
      "Well-documented, tested, and structured codebases that your team can confidently build on and extend.",
    stat: { value: 95, suffix: "%", label: "Test Coverage" },
    gradient: "from-violet-500 to-purple-400",
    bgGradient: "from-violet-500/10 to-purple-500/5",
    iconColor: "text-violet-500",
    borderHover: "hover:border-violet-500/40",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Agile workflows and rapid iteration cycles to get your product to market before the competition.",
    stat: { value: 2, suffix: "x", label: "Faster Delivery" },
    gradient: "from-amber-500 to-orange-400",
    bgGradient: "from-amber-500/10 to-orange-500/5",
    iconColor: "text-amber-500",
    borderHover: "hover:border-amber-500/40",
  },
  {
    icon: HeartHandshake,
    title: "Digital Transformation",
    description:
      "End-to-end digitalization of your business processes with Microsoft 365, custom apps, and automation.",
    stat: { value: 100, suffix: "%", label: "Digital-First" },
    gradient: "from-emerald-500 to-teal-400",
    bgGradient: "from-emerald-500/10 to-teal-500/5",
    iconColor: "text-emerald-500",
    borderHover: "hover:border-emerald-500/40",
  },
]

/* ── animations ────────────────────────────────────────── */

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/* ── component ─────────────────────────────────────────── */

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-32">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/5 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-violet-500/5 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-500/[0.03] via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl md:mb-16"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Why Puzzlez
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            We Digitalize{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              Your Business
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From Microsoft 365 solutions to custom software, we transform how your
            business operates with technology that drives real results.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="group relative"
            >
              <div
                className={`relative h-full overflow-hidden rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${feature.borderHover} hover:shadow-2xl hover:shadow-primary/5`}
              >
                {/* Top gradient accent bar */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 transition-all duration-500 group-hover:opacity-100`}
                />

                {/* Background gradient glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative flex flex-col gap-6 p-7 md:p-8">
                  {/* Top row: icon + stat */}
                  <div className="flex items-start justify-between">
                    {/* Icon */}
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.bgGradient} ${feature.iconColor} ring-1 ring-border/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}
                    >
                      <feature.icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>

                    {/* Stat counter */}
                    <div className="text-right">
                      <div
                        className={`font-display text-3xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent md:text-4xl`}
                      >
                        <AnimatedCounter
                          target={feature.stat.value}
                          suffix={feature.stat.suffix}
                        />
                      </div>
                      <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                        {feature.stat.label}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-foreground">
                      {feature.title}
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom decorative bar */}
                  <div className="flex gap-1.5">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all duration-500 ${i === 0
                          ? `bg-gradient-to-r ${feature.gradient} opacity-80`
                          : "bg-border/50 group-hover:bg-border"
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
