"use client"

import { useState } from "react"
import {
  Mail,
  Phone,
  Send,
  ArrowRight,
  Calendar,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Failed to send message.")
      }

      // Fire Google Ads conversion event on successful submission
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-442653461",
        })
      }

      setSubmitted(true)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <main>
        {/* Hero */}
        <section className="bg-foreground py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-16">
            <div className="animate-fade-in">
              <div className="mb-6 flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-primary" />
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Get In Touch
                </p>
                <div className="h-px w-8 bg-primary" />
              </div>
              <h1 className="font-serif text-4xl text-background text-balance md:text-5xl lg:text-6xl">
                {"One Conversation Can Change Everything. Let\u2019s Begin."}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-background/70">
                {"Book a consultation or send us a message \u2014 whichever way feels right to you. We\u2019re here."}
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-background/50">
                {"Many of the parents who contact us have been searching for the right help for a long time. You\u2019re not alone \u2014 and the right support can make all the difference."}
              </p>
            </div>
          </div>
        </section>

        {/* Three Contact Cards */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
            <div className="grid gap-6 md:grid-cols-3">
              {/* Card 1 - Teal background */}
              <div className="flex flex-col rounded-2xl bg-primary p-8 text-primary-foreground">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-xl">
                  Book Your Time Directly
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-primary-foreground/80">
                  {"A comfortable, honest conversation. Tell us about your child and ask us anything. You\u2019ll walk away with clarity on exactly what your child needs and how we can help."}
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className="w-full"
                >
                  <a
                    href="https://calendly.com/readingresolved/free-consultation-understanding-your-child-s-needs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book My Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Card 2 - White background */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-xl text-card-foreground">
                  Call Us
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {"Prefer to speak directly? We\u2019re happy to answer your questions and help you decide on the best next step."}
                </p>
                <a
                  href="tel:+16476325801"
                  className="text-lg font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  +1 (647) 632-5801
                </a>
              </div>

              {/* Card 3 - White background */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-serif text-xl text-card-foreground">
                  Send Us a Message
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {"Reach out by message. Fill out the form below and we\u2019ll respond within 24 hours."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-muted py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
            <div className="mx-auto max-w-2xl">
              <div className="text-center">
                <h2 className="font-serif text-3xl text-foreground text-balance md:text-4xl">
                  Tell Us About Your Child
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {"Share what you\u2019re seeing at home or at school. There are no wrong answers \u2014 we simply want to understand what your child is experiencing so we can guide you toward the best next step."}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {"Many parents tell us this is the first time they\u2019ve been able to fully explain what has been happening."}
                </p>
              </div>

              {submitted ? (
                <div className="mt-12 animate-fade-in rounded-2xl border border-primary/30 bg-primary/5 p-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl text-foreground">
                    Message Sent!
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    {"Thank you for reaching out. We\u2019ll be in touch within 24 hours."}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-12 flex flex-col gap-6"
                >
                  {/* Name Row */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="firstName">
                        First Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Your first name"
                        className="h-12 rounded-xl bg-card"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="lastName">
                        Last Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Your last name"
                        className="h-12 rounded-xl bg-card"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="h-12 rounded-xl bg-card"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone">
                        Phone <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (647) 000-0000"
                        className="h-12 rounded-xl bg-card"
                      />
                    </div>
                  </div>

                  {/* Subject - Optional */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="subject">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="h-12 rounded-xl bg-card"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="My child is in Grade ___ and has been struggling with... We've tried... What we're hoping for is... You can also let us know if you'd like your child to join the consultation via Zoom."
                      rows={6}
                      className="resize-none rounded-xl bg-card"
                    />
                  </div>

                  {submitError && (
                    <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-center text-sm text-destructive">
                      {submitError}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="mt-2 h-14 rounded-xl text-base shadow-lg shadow-primary/20"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    We typically respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-16">
            <div className="mx-auto mb-6 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-primary/40" />
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <div className="h-px w-12 bg-primary/40" />
            </div>
            <h2 className="font-serif text-3xl text-foreground text-balance md:text-4xl">
              The struggle stops here. The breakthrough starts now.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {"With the right support, transformation happens. It starts with one conversation."}
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-xl px-8 text-base shadow-lg shadow-primary/20"
              >
                <a
                  href="https://calendly.com/readingresolved/free-consultation-understanding-your-child-s-needs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book My Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
