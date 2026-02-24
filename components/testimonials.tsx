"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, Meridian Health",
    content:
      "Puzzlez transformed our patient portal from a clunky legacy system into a modern, intuitive platform. Their engineering quality is top-notch.",
    initials: "SC",
  },
  {
    name: "James Rodriguez",
    role: "Founder, NovaPay",
    content:
      "Working with Puzzlez felt like having an in-house team. They shipped our fintech MVP in 8 weeks and it handled 10K users on day one.",
    initials: "JR",
  },
  {
    name: "Emily Watson",
    role: "VP Product, CloudSync",
    content:
      "The architecture decisions Puzzlez made early on saved us months of refactoring later. Their long-term thinking is rare in this industry.",
    initials: "EW",
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Testimonials() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={cardVariants}>
              <Card className="h-full border-border bg-card shadow-sm">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {`"${testimonial.content}"`}
                  </p>
                  <div className="mt-auto flex items-center gap-3 pt-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
