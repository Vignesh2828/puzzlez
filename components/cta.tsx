"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="px-6 py-10 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/[0.04] to-primary/[0.08] p-12 text-center shadow-sm md:p-20"
      >
        {/* Subtle glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[100px]" />
        </div>

        <div className="relative z-10">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            <span className="text-balance">
              {"Let\u2019s Build Something"}
              <br />
              <span className="text-primary">Powerful Together.</span>
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
            Ready to turn your idea into a world-class digital product? Let us
            show you what we can do.
          </p>
          <div className="mt-8">
            <Button size="lg" className="rounded-full px-10 text-sm font-medium" asChild>
              <Link href="/#contact">
                Schedule a Call
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
