"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  label: string
  title: string
  description: string
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-border bg-secondary/50 px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl text-center"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
          {label}
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          {description}
        </p>
      </motion.div>
    </div>
  )
}
