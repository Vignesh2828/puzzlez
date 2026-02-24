import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Process } from "@/components/process"
import { CTA } from "@/components/cta"

export const metadata: Metadata = {
  title: "About - Puzzlez",
  description:
    "Learn about Puzzlez's approach to building digital products. Scalable architecture, clean code, fast delivery, and long-term support.",
}

export default function AboutPage() {
  return (
    <>
      <WhyChooseUs />
      <Process />
      <CTA />
    </>
  )
}
