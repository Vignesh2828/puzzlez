"use client"

import { motion } from "framer-motion"
import { Globe, Cable, Database, Cloud, Grid2X2 } from "lucide-react"
import Image from "next/image"

/* ── technology data with categories ─────────────────── */

const techCategories = [
  {
    label: "Frontend",
    icon: Globe,
    color: "#3b82f6",
    colorEnd: "#06b6d4",
    techs: [
      { name: "Next.js", logo: "/tech/nextjs.png" },
      { name: "React", logo: "/tech/react.png" },
      { name: "Angular", logo: "/tech/angular.png" },
      { name: "React Native", logo: "/tech/react-native.png" },
      { name: "TypeScript", logo: "/tech/typescript.png" },
      { name: "Tailwind CSS", logo: "/tech/tailwindcss.png" },
    ],
  },
  {
    label: "Backend",
    icon: Cable,
    color: "#10b981",
    colorEnd: "#14b8a6",
    techs: [
      { name: "Node.js", logo: "/tech/nodejs.png" },
      { name: "Express", logo: "/tech/express.png" },
      { name: ".Net", logo: "/tech/dot-net.png" },
      { name: "GraphQL", logo: "/tech/graphql.png" },
    ],
  },
  {
    label: "Database",
    icon: Database,
    color: "#8b5cf6",
    colorEnd: "#a855f7",
    techs: [
      { name: "MongoDB", logo: "/tech/mongodb.png" },
      { name: "MySQL", logo: "/tech/mysql.png" },
      { name: "PostgreSQL", logo: "/tech/postgresql.png" },
      { name: "Supabase", logo: "/tech/supabase.png" },
      { name: "Redis", logo: "/tech/redis.png" },
    ],
  },
  {
    label: "Cloud & DevOps",
    icon: Cloud,
    color: "#f59e0b",
    colorEnd: "#f97316",
    techs: [
      { name: "Azure", logo: "/tech/azure.png" },
      { name: "AWS", logo: "/tech/aws.png" },
      { name: "GCP", logo: "/tech/gcp.png" },
      { name: "Docker", logo: "/tech/docker.png" },
      { name: "Kubernetes", logo: "/tech/kubernetes.png" },
      { name: "Azure Devops", logo: "/tech/azure-devops.png" },
    ],
  },
  {
    label: "Microsoft 365 & Power Platform",
    icon: Grid2X2,
    color: "#0078d4",
    colorEnd: "#5c2d91",
    techs: [
      { name: "Power Apps", logo: "/tech/powerapps.png" },
      { name: "Power Automate", logo: "/tech/powerautomate.png" },
      { name: "Power BI", logo: "/tech/powerbi.png" },
      { name: "SharePoint", logo: "/tech/sharepoint.png" },
      { name: "Microsoft Teams", logo: "/tech/teams.png" },
    ],
  },
]

/* ── main component ───────────────────────────────────── */

export function TechStack() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-36">
      {/* ── Ambient background effects ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/[0.07] to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-violet-500/[0.05] to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-blue-500/[0.05] to-transparent blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        {/* Radial fade */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_40%,hsl(var(--background))_100%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Technology Stack
          </motion.div>

          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Powered by{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary via-violet-500 to-primary/60 bg-clip-text text-transparent">
                Modern Tech
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-primary via-violet-500 to-primary/60"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
              />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We leverage battle-tested, cutting-edge technologies to craft fast,
            scalable, and maintainable digital products.
          </p>
        </motion.div>

        {/* ── Category Bento Grid ── */}
        <div className="grid gap-6 md:grid-cols-2">
          {techCategories.map((category, catIdx) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: catIdx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              {/* Animated gradient border */}
              <div
                className="absolute -inset-[1px] rounded-2xl opacity-0 blur-[1px] transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, ${category.color}40, transparent 40%, transparent 60%, ${category.colorEnd}40)`,
                }}
              />

              <div className="relative h-full overflow-hidden rounded-2xl border border-border/40 bg-card/60 backdrop-blur-xl transition-all duration-500 group-hover:border-border/60 group-hover:bg-card/80 group-hover:shadow-2xl group-hover:shadow-black/5 dark:group-hover:shadow-black/20">
                {/* Inner glow on hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${category.color}08 0%, transparent 70%)`,
                  }}
                />

                {/* Category header */}
                <div className="relative flex items-center gap-3 px-7 py-5">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-lg font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${category.color}, ${category.colorEnd})`,
                      boxShadow: `0 4px 14px ${category.color}30`,
                    }}
                  >
                    <category.icon />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground">
                      {category.label}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {category.techs.length} technologies
                    </p>
                  </div>
                  {/* Decorative dots */}
                  <div className="ml-auto flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="h-1.5 w-1.5 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: `${category.color}${i === 0 ? "60" : i === 1 ? "40" : "20"}`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Separator line */}
                <div className="mx-7 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />

                {/* Tech items */}
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {category.techs.map((tech, techIdx) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: catIdx * 0.1 + techIdx * 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{ y: -4, scale: 1.02 }}
                        className="group/tech relative flex cursor-default flex-col items-center gap-3 rounded-xl border border-border/20 bg-gradient-to-b from-background/80 to-background/40 p-4 transition-all duration-300 hover:border-border/50 hover:bg-background/90 hover:shadow-lg hover:shadow-black/[0.03] dark:hover:shadow-black/20"
                      >
                        {/* Subtle color accent on hover */}
                        <div
                          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover/tech:opacity-100"
                          style={{
                            background: `radial-gradient(ellipse at 50% 100%, ${category.color}06 0%, transparent 70%)`,
                          }}
                        />

                        <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-card/90 shadow-sm ring-1 ring-border/20 transition-all duration-300 group-hover/tech:shadow-md group-hover/tech:ring-border/40">
                          <Image
                            src={tech.logo}
                            alt={`${tech.name} logo`}
                            width={32}
                            height={32}
                            className="object-contain transition-transform duration-300 group-hover/tech:scale-110"
                            unoptimized
                          />
                        </div>
                        <span className="relative text-center text-xs font-semibold text-foreground/80 transition-colors duration-300 group-hover/tech:text-foreground">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-border/30 bg-card/40 px-8 py-6 backdrop-blur-sm"
        >
          {[
            {
              value: `${techCategories.reduce((acc, c) => acc + c.techs.length, 0)}+`,
              label: "Technologies",
            },
            { value: `${techCategories.length}`, label: "Categories" },
            { value: "24/7", label: "Monitoring" },
            { value: "99.9%", label: "Uptime SLA" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-3 text-center"
            >
              {i > 0 && (
                <div className="mr-3 hidden h-8 w-px bg-border/40 sm:block" />
              )}
              <div>
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
