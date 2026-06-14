"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, X } from "lucide-react"

export function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (~600px)
      setVisible(window.scrollY > 600)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Add bottom padding to the page so the fixed bar never covers content
  useEffect(() => {
    const showing = visible && !dismissed
    if (showing) {
      document.body.style.paddingBottom = "5rem"
    } else {
      document.body.style.paddingBottom = ""
    }
    return () => {
      document.body.style.paddingBottom = ""
    }
  }, [visible, dismissed])

  if (dismissed || !visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40">
      <div className="border-t border-border/60 bg-background pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="hidden items-center gap-3 sm:flex">
            <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <p className="text-sm font-medium text-foreground">
              Limited spots available each month
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center gap-2 sm:flex-none sm:justify-end sm:gap-3">
            <Button asChild size="sm" className="shadow-lg shadow-primary/20">
              <a
                href="https://calendly.com/readingresolved/free-consultation-understanding-your-child-s-needs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book My Free Consultation
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </a>
            </Button>
            <Button asChild size="sm" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              <Link href="/contact">
                Send Us a Message
              </Link>
            </Button>
            <button
              onClick={() => setDismissed(true)}
              className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
