"use client"

import { toast } from "sonner"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import {
  Globe,
  Smartphone,
  Layers,
  Cloud,
  Palette,
  ArrowRight,
  ArrowLeft,
  Loader2,
  Boxes,
  Code2,
  Zap,
  HeartHandshake,
  Star,
  TrendingUp,
  ShieldCheck,
  Users,
  Quote,
  HelpCircle,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Phone,
  User,
  FileText,
} from "lucide-react"
import { Process } from "./process"

/* ── data ─────────────────────────────────────────────── */

const services = [
  {
    icon: Globe,
    title: "Web Applications",
    desc: "Blazing-fast web apps built with modern frameworks that deliver exceptional user experiences.",
    gradient: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-500/10 to-cyan-500/5",
    iconColor: "text-blue-500",
    borderHover: "hover:border-blue-500/40",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native-quality mobile experiences that feel seamless on every platform and device.",
    gradient: "from-violet-500 to-purple-400",
    bgGradient: "from-violet-500/10 to-purple-500/5",
    iconColor: "text-violet-500",
    borderHover: "hover:border-violet-500/40",
  },
  {
    icon: Layers,
    title: "Microsoft 365",
    desc: "Power Apps, Power Automate, SharePoint, and Power BI solutions to digitalize your business.",
    gradient: "from-blue-600 to-indigo-500",
    bgGradient: "from-blue-600/10 to-indigo-500/5",
    iconColor: "text-blue-600",
    borderHover: "hover:border-blue-600/40",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Reliable cloud infrastructure and CI/CD pipelines that scale effortlessly under load.",
    gradient: "from-orange-500 to-amber-400",
    bgGradient: "from-orange-500/10 to-amber-500/5",
    iconColor: "text-orange-500",
    borderHover: "hover:border-orange-500/40",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Pixel-perfect interfaces and thoughtful user journeys that your users will love.",
    gradient: "from-pink-500 to-rose-400",
    bgGradient: "from-pink-500/10 to-rose-500/5",
    iconColor: "text-pink-500",
    borderHover: "hover:border-pink-500/40",
  },
]

const features = [
  {
    icon: Boxes,
    title: "Scalable Architecture",
    desc: "Systems designed to handle millions of users from day one with rock-solid reliability.",
    stat: "99.9%",
    statLabel: "Uptime",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Maintainable, well-tested codebases your team can confidently build upon.",
    stat: "100%",
    statLabel: "Type-safe",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "From concept to production in weeks, not months — without cutting corners.",
    stat: "6-8",
    statLabel: "Weeks avg",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Support",
    desc: "We stay with you beyond launch — because growth is a continuous journey.",
    stat: "24/7",
    statLabel: "Support",
    gradient: "from-emerald-500 to-teal-500",
  },
]

const stats = [
  { value: "50+", label: "Projects Delivered", icon: TrendingUp, gradient: "from-blue-500 to-cyan-500" },
  { value: "98%", label: "Client Satisfaction", icon: Star, gradient: "from-amber-500 to-orange-500" },
  { value: "30+", label: "Happy Clients", icon: Users, gradient: "from-violet-500 to-purple-500" },
  { value: "100%", label: "Secure & Tested", icon: ShieldCheck, gradient: "from-emerald-500 to-teal-500" },
]

const testimonials = [
  {
    name: "Sarathi",
    role: "Founder, DPS Tuition Center",
    quote:
      "They built our tuition center website with clarity and precision. Student inquiries increased significantly within the first few weeks of launch.",
    initials: "SA",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    name: "Sanjay",
    role: "Founder, Zara Architects",
    quote:
      "The website reflects our architectural philosophy perfectly — clean, modern, and professional. Clients now understand our vision before even meeting us.",
    initials: "SJ",
    accent: "from-violet-500 to-purple-500",
  },
  {
    name: "Praveena",
    role: "Founder, Veena Naturals",
    quote:
      "Our ecommerce experience feels premium and trustworthy. The performance and UI quality helped us build strong customer confidence.",
    initials: "PV",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    name: "Karthik",
    role: "Founder, Diviks",
    quote:
      "They transformed my invoice application idea into a scalable product billsmith. The dashboard design and backend architecture were exceptionally well thought out.",
    initials: "KR",
    accent: "from-orange-500 to-amber-500",
  },
]

const faqs = [
  {
    question: "What services does Puzzlez offer?",
    answer:
      "We specialize in full-stack web applications, cross-platform mobile apps, SaaS product development, cloud & DevOps architecture, and UI/UX design. Every engagement is tailored to your specific business goals.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Our core stack includes React, Next.js, React Native, Node.js, TypeScript, PostgreSQL, and AWS/GCP. We choose the best tools for each project — no one-size-fits-all approach.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects go from concept to production in 6–8 weeks. Complex platforms may take longer. We provide a detailed timeline and milestones before work begins so there are no surprises.",
  },
  {
    question: "How do you handle project pricing?",
    answer:
      "We offer both fixed-price and time-and-materials models. After our discovery call, we provide a transparent proposal with scope, deliverables, and cost — no hidden fees.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Absolutely. We offer 24/7 maintenance and support packages covering performance monitoring, bug fixes, feature updates, and scaling guidance to keep your product running smoothly.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Yes! We regularly embed with in-house teams. Whether you need dedicated developers, technical leadership, or specialized skills, we integrate seamlessly into your workflow.",
  },
  {
    question: "What does your development process look like?",
    answer:
      "We follow an agile methodology with two-week sprints. You get regular demos, transparent progress tracking, and direct access to the dev team throughout the entire project lifecycle.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply fill out the contact form below or email us directly. We'll schedule a free 30-minute discovery call to understand your needs and propose the best path forward.",
  },
]

/* ── animations ───────────────────────────────────────── */

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const sectionFade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
}

/* ── sub-components ───────────────────────────────────── */

function SectionHeader({
  label,
  title,
  description,
  href,
}: {
  label: string
  title: string
  description?: string
  href?: string
}) {
  return (
    <div className="mb-16 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          {label}
        </motion.span>
        <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {href && (
        <Button
          variant="outline"
          className="group w-fit shrink-0 rounded-full border-border/60 px-6 py-2.5 text-sm font-medium backdrop-blur-sm transition-all duration-300 "
          asChild
        >
          <Link href={href}>
            View All
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      )}
    </div>
  )
}

/* ── testimonials carousel ────────────────────────────── */

function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = useCallback(() => api?.scrollNext(), [api])

  return (
    <div className="relative">
      {/* Carousel */}
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-6">
          {testimonials.map((t, idx) => (
            <CarouselItem
              key={t.name}
              className="pl-6 md:basis-1/2 lg:basis-1/3"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="h-full"
              >
                <Card className="group relative h-full overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5">
                  {/* Top gradient bar */}
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${t.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                  {/* Hover glow */}
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${t.accent.replace("from-", "from-").replace("to-", "to-")} opacity-0 transition-opacity duration-700 group-hover:opacity-[0.03]`} />

                  <CardContent className="relative flex h-full flex-col gap-6 p-8">
                    {/* Quote icon & stars */}
                    <div className="flex items-center justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${t.accent} text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                        <Quote className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Quote text */}
                    <p className="flex-1 text-base leading-relaxed text-muted-foreground">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 border-t border-border/30 pt-6">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.accent} text-sm font-bold text-white shadow-lg ring-2 ring-background`}>
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-base font-semibold text-foreground">
                          {t.name}
                        </p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation & Dots */}
      <div className="mt-10 flex items-center justify-center gap-6">
        {/* Prev button */}
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="h-10 w-10 rounded-full border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {Array.from({ length: count }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${idx === current
                ? "w-8 bg-gradient-to-r from-primary to-violet-500 shadow-lg shadow-primary/30"
                : "w-2 bg-border/60 hover:bg-primary/30"
                }`}
            >
              <span className="sr-only">Go to slide {idx + 1}</span>
            </button>
          ))}
        </div>

        {/* Next button */}
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="h-10 w-10 rounded-full border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10"
        >
          <ArrowRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

/* ── main component ───────────────────────────────────── */

export function HomePreview() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isSubmitting) return;

    try {
      setIsSubmitting(true)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      if (res.ok) {
        setSubmitted(true)
        setFormState({ name: "", email: "", subject: "", message: "" })
        toast.success("Message sent successfully!", {
          description: "We'll get back to you within 24 hours.",
        })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        toast.error("Failed to send message", {
          description: "Please try again or email us directly.",
        })
      }
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong", {
        description: "Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative overflow-hidden px-6 py-24 md:py-32 lg:py-40">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/5 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-violet-500/5 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-emerald-500/3 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-gradient-to-bl from-amber-500/4 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-pink-500/3 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* ───── Services ───── */}
        <motion.section {...sectionFade} className="mb-32 lg:mb-40">
          <SectionHeader
            label="What We Do"
            title="Services That Drive Growth"
            description="End-to-end digital expertise to take your startup from zero to scale. We build products that users love and businesses rely on."
            href="/services"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          >
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp}>
                <Link href="/services" className="block h-full">
                  <Card className={`group relative h-full overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${s.borderHover} hover:shadow-2xl hover:shadow-primary/5`}>
                    {/* Gradient accent top bar */}
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${s.gradient} opacity-0 transition-all duration-500 group-hover:opacity-100`} />
                    {/* Hover glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${s.bgGradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                    <CardContent className="relative flex flex-col items-center gap-5 p-8 text-center">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${s.bgGradient} ${s.iconColor} ring-1 ring-border/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                        <s.icon className="h-7 w-7" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-foreground">{s.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {s.desc}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                        Learn more <ArrowRight className="h-3 w-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ───── Why Choose Us ───── */}
        <motion.section {...sectionFade} className="mb-32 lg:mb-40">
          <SectionHeader
            label="Why Puzzlez"
            title="Built Different"
            description="We don't just write code — we engineer competitive advantages that set you apart."
            href="/about"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((f) => (
              <motion.div key={f.title} variants={fadeUp}>
                <Link href="/about" className="block h-full">
                  <Card className="group relative h-full overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5">
                    {/* Top gradient bar */}
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${f.gradient} opacity-0 transition-all duration-500 group-hover:opacity-100`} />
                    <CardContent className="relative flex flex-col gap-6 p-8">
                      <div className="flex items-start justify-between">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${f.gradient} text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                          <f.icon className="h-6 w-6" strokeWidth={1.5} />
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold tracking-tight text-foreground">{f.stat}</p>
                          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            {f.statLabel}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-foreground">{f.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {f.desc}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Process */}
        <Process />

        {/* ───── Testimonials Carousel ───── */}
        <motion.section {...sectionFade} className="mb-32 lg:mb-40">
          <SectionHeader
            label="Testimonials"
            title="Trusted by Founders"
            description="Don't take our word for it — hear from the teams we've helped grow and scale."
          />

          <TestimonialsCarousel />
        </motion.section>

        {/* ───── FAQ ───── */}
        <motion.section {...sectionFade} className="mb-32 lg:mb-40">
          <SectionHeader
            label="FAQ"
            title="Got Questions?"
            description="Everything you need to know about working with us. Can't find what you're looking for? Reach out below."
          />
          <div>

            {/* Right — accordion */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <Card className="overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, idx) => (
                      <AccordionItem
                        key={idx}
                        value={`faq-${idx}`}
                        className="border-border/30 px-2 transition-colors duration-200 hover:bg-primary/[0.02] data-[state=open]:bg-primary/[0.03]"
                      >
                        <AccordionTrigger className="gap-4 py-5 text-left text-base font-semibold text-foreground no-underline hover:no-underline [&[data-state=open]]:text-primary">
                          <span className="flex items-center gap-3">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-violet-500/10 text-xs font-bold text-primary">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pl-11 pr-4 text-sm leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* ───── Contact Form ───── */}
        <motion.section {...sectionFade} id="contact">
          <SectionHeader
            label="Get in Touch"
            title="Start Your Project"
            description="Have a project in mind? Fill out the form and we'll get back to you within 24 hours with a free consultation."
          />

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Left — info panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="relative h-full overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-primary/[0.06] via-card/80 to-violet-500/[0.04] p-10 backdrop-blur-xl">
                {/* Blobs */}
                <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br from-primary/15 to-transparent blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gradient-to-tr from-emerald-500/10 to-transparent blur-3xl" />

                <div className="relative flex h-full flex-col justify-between gap-10">
                  <div className="space-y-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white ">
                      <Send className="h-8 w-8" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        Let&apos;s build together
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        Tell us about your project and goals. We&apos;ll pair you with the right team and provide a roadmap within days.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: Mail, primary: "contact.puzzlez@gmail.com", secondary: "Email" },
                      { icon: Phone, primary: "+91 63852 19433", secondary: "Phone" },
                      { icon: Clock, primary: "Mon–Fri, 9 AM – 6 PM IST", secondary: "Working Hours" },
                    ].map((item) => (
                      <div
                        key={item.secondary}
                        className="flex items-center gap-4 rounded-xl border border-border/30 bg-background/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <item.icon className="h-5 w-5" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            {item.secondary}
                          </p>
                          <p className="text-sm font-semibold text-foreground">{item.primary}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Trust badges */}
                  <div className="flex flex-wrap gap-3">
                    {["Free Consultation", "NDA Protected", "24h Response"].map((badge) => (
                      <span
                        key={badge}
                        className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary backdrop-blur-sm"
                      >
                        <ShieldCheck className="h-3.5 w-3.5" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <Card className="overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      {/* Name */}
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-name"
                          className="flex items-center gap-2 text-sm font-medium text-foreground"
                        >
                          <User className="h-4 w-4 text-muted-foreground" />
                          Full Name
                        </label>
                        <Input
                          id="contact-name"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={(e) =>
                            setFormState((p) => ({ ...p, name: e.target.value }))
                          }
                          className="rounded-xl border-border/50 bg-background/50 transition-all duration-300 focus:border-primary/40 focus:bg-background focus:shadow-lg focus:shadow-primary/5"
                          required
                        />
                      </div>
                      {/* Email */}
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-email"
                          className="flex items-center gap-2 text-sm font-medium text-foreground"
                        >
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          Email Address
                        </label>
                        <Input
                          id="contact-email"
                          type="email"
                          placeholder="john@company.com"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState((p) => ({ ...p, email: e.target.value }))
                          }
                          className="rounded-xl border-border/50 bg-background/50 transition-all duration-300 focus:border-primary/40 focus:bg-background focus:shadow-lg focus:shadow-primary/5"
                          required
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-subject"
                        className="flex items-center gap-2 text-sm font-medium text-foreground"
                      >
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        Subject
                      </label>
                      <Input
                        id="contact-subject"
                        placeholder="e.g. New SaaS product development"
                        value={formState.subject}
                        onChange={(e) =>
                          setFormState((p) => ({ ...p, subject: e.target.value }))
                        }
                        className="rounded-xl border-border/50 bg-background/50 transition-all duration-300 focus:border-primary/40 focus:bg-background focus:shadow-lg focus:shadow-primary/5"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-message"
                        className="flex items-center gap-2 text-sm font-medium text-foreground"
                      >
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        Message
                      </label>
                      <Textarea
                        id="contact-message"
                        placeholder="Tell us about your project, goals, timeline, and any other details..."
                        rows={5}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState((p) => ({ ...p, message: e.target.value }))
                        }
                        className="resize-none rounded-xl border-border/50 bg-background/50 transition-all duration-300 focus:border-primary/40 focus:bg-background focus:shadow-lg focus:shadow-primary/5"
                        required
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex items-center gap-4 pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        className="group relative overflow-hidden rounded-full px-10 text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
                        disabled={isSubmitting || submitted}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : submitted ? (
                            <>
                              <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-lg"
                              >
                                ✓
                              </motion.span>
                              Message Sent!
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </>
                          )}
                        </span>
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        We&apos;ll respond within 24 hours
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>


      </div>
    </div>
  )
}
