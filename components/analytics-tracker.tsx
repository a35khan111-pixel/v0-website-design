"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

/**
 * Site-wide analytics tracker.
 *
 * Uses a single delegated click listener on the document so that every
 * "Book My Free Consultation" button (which links to Calendly) and every
 * phone number link pushes the correct event to the GTM dataLayer, no
 * matter where it lives in the component tree.
 *
 * dataLayer events (wired up to conversions inside GTM container GTM-MFK3C7XM):
 *  - consultation_booking_click  (any Calendly booking link click)
 *  - phone_click                 (any tel:6476325801 link click)
 *
 * The final Calendly conversion (consultation_booking_complete) is fired by
 * Calendly's native GTM integration on the booking confirmation screen.
 * contact_form_submit is pushed directly from the contact form handler.
 */
export function AnalyticsTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      if (!target) return

      const anchor = target.closest("a")
      if (!anchor) return

      const href = anchor.getAttribute("href") || ""
      window.dataLayer = window.dataLayer || []

      if (href.includes("calendly.com")) {
        window.dataLayer.push({
          event: "consultation_booking_click",
          link_url: href,
          page_location: window.location.pathname,
        })
      } else if (href.startsWith("tel:")) {
        window.dataLayer.push({
          event: "phone_click",
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
