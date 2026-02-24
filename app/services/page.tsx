import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Services } from "@/components/services"
import { CTA } from "@/components/cta"

export const metadata: Metadata = {
  title: "Services - Puzzlez",
  description:
    "From custom web apps to mobile development, SaaS platforms, and cloud infrastructure, Puzzlez delivers end-to-end product engineering.",
}

export default function ServicesPage() {
  return (
    <>
      <Services />
      <CTA />
    </>
  )
}
