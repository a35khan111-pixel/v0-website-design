"use client"

import { useState, useEffect } from "react"
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

  if (dismissed || !visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 translate-y-0 transition-transform duration-300">
      <div className="border-t border-border/60 bg-background/95 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur supports-[backdrop-filter]:bg-background/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="hidden items-center gap-3 sm:flex">
            <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <p className="text-sm font-medium text-foreground">
              Limited spots available for Spring 2026
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center gap-3 sm:flex-none sm:justify-end">
            <Button asChild size="sm" className="shadow-lg shadow-primary/20">
              <a
                href="https://calendly.com/readingresolved/free-consultation-understanding-your-child-s-needs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Free Consultation
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </a>
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
