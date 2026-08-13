"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import type { Faq } from "@/lib/faq-data"

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${index}`
        const buttonId = `faq-button-${index}`
        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-xl border border-border bg-card"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-accent/40 sm:px-6"
              >
                <span
                  className={`font-serif text-lg leading-snug transition-colors sm:text-xl ${
                    isOpen ? "text-primary" : "text-foreground"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                    isOpen ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-6 sm:px-6"
            >
              <p className="text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
