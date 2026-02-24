"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Tech Stack", href: "/tech-stack" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-6"
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 transition-all duration-500 sm:px-6",
            scrolled
              ? "border-border/50 bg-background/80 py-2.5 shadow-lg shadow-black/5 backdrop-blur-2xl"
              : "border-transparent bg-transparent py-4",
            "mx-4 md:mx-auto"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="group relative flex items-center gap-2.5 outline-none"
            onMouseEnter={() => setHoveredPath(null)}
          >
            <span className="font-display text-xl font-bold tracking-tight text-foreground">
              Puzzlez<span className="text-primary ml-[2px]">.</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul
            className="hidden items-center gap-1.5 md:flex"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    onMouseEnter={() => setHoveredPath(link.href)}
                    className={cn(
                      "relative z-10 block px-4 py-2 text-sm font-medium transition-colors duration-300",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>

                  {/* Hover Pill Background */}
                  <AnimatePresence>
                    {hoveredPath === link.href && (
                      <motion.div
                        layoutId="nav-hover"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30
                        }}
                        className="absolute inset-0 z-0 rounded-full bg-accent/50 backdrop-blur-md"
                      />
                    )}
                  </AnimatePresence>

                  {/* Active Indicator */}
                  {isActive && !hoveredPath && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary to-violet-500"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <Button
              size="sm"
              className="group relative h-10 overflow-hidden rounded-full bg-primary px-6 font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:shadow-md active:scale-95 border-0"
              asChild
            >
              <Link href="/#contact">
                <span className="flex items-center gap-1.5">
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 md:hidden",
              mobileOpen
                ? "bg-primary/10 text-primary"
                : "text-foreground hover:bg-accent/50"
            )}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </motion.header>

      {/* ───── Full-screen mobile menu ───── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/95 backdrop-blur-2xl"
              onClick={() => setMobileOpen(false)}
            />

            {/* Decorative gradient blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-primary/15 via-violet-500/10 to-transparent blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-gradient-to-tr from-violet-500/10 via-primary/5 to-transparent blur-3xl" />
            </div>

            {/* Menu content */}
            <motion.div
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative flex h-full flex-col justify-center px-8"
            >
              <nav className="space-y-2">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{
                        duration: 0.3,
                        delay: idx * 0.06,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-accent/50"
                        )}
                      >
                        {/* Active dot */}
                        <span
                          className={cn(
                            "h-2 w-2 rounded-full transition-all duration-300",
                            isActive
                              ? "bg-gradient-to-r from-primary to-violet-500 shadow-lg shadow-primary/50"
                              : "bg-border group-hover:bg-primary/40"
                          )}
                        />
                        <span className="text-2xl font-semibold tracking-tight">
                          {link.label}
                        </span>
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.06 + 0.1 }}
                className="mt-10 px-1"
              >
                <Button
                  size="lg"
                  className="group w-full overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-violet-500 py-6 text-base font-semibold text-white shadow-xl shadow-primary/25 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 border-0"
                  asChild
                >
                  <Link href="/#contact" onClick={() => setMobileOpen(false)}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Free consultation · No commitment
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
