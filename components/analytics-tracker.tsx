"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Site-wide analytics tracker.
 *
 * Uses a single delegated click listener on the document so that every
 * "Book My Free Consultation" button (which links to Calendly) and every
 * phone number link fires the correct GA4 event no matter where it lives
 * in the component tree (homepage, contact page, footer, pricing, etc.).
 *
 * GA4 events:
 *  - consultation_booking_click  (any Calendly booking link)
 *  - phone_click                 (any tel:6476325801 link)
 *
 * contact_form_submit is fired directly from the contact form handler.
 */
export function AnalyticsTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      if (!target) return

      const anchor = target.closest("a")
      if (!anchor) return

      const href = anchor.getAttribute("href") || ""

      if (href.includes("calendly.com")) {
        window.gtag?.("event", "consultation_booking_click", {
          link_url: href,
          page_location: window.location.pathname,
        })
      } else if (href.startsWith("tel:")) {
        window.gtag?.("event", "phone_click", {
          link_url: href,
          page_location: window.location.pathname,
        })
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return null
}
