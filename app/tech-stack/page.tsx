import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { TechStack } from "@/components/tech-stack"
import { CTA } from "@/components/cta"

export const metadata: Metadata = {
  title: "Tech Stack - Puzzlez",
  description:
    "We leverage industry-leading technologies including Next.js, React, Node.js, AWS, and more to build robust, scalable solutions.",
}

export default function TechStackPage() {
  return (
    <>
      <TechStack />
      <CTA />
    </>
  )
}
