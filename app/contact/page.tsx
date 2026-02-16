"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  Calendar,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
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
                {"Let's Start Your Child's Journey"}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-background/60">
                {
                  "Have questions? Ready to book a consultation? We're here to help. Fill out the form and we'll get back to you within 24 hours."
                }
              </p>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Book Consultation Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground shadow-xl shadow-primary/10 md:col-span-2 lg:col-span-2">
                <div className="relative z-10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-serif text-2xl">
                    The Fastest Way to Get Started
                  </h3>
                  <p className="mb-6 text-primary-foreground/75">
                    Book a free consultation and discover how we can help your
                    child thrive. No obligation, just a conversation about your{" "}
                    {"child's"} needs.
                  </p>
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="group/btn"
                  >
                    <a
                      href="https://calendly.com/readingresolved/free-consultation-understanding-your-child-s-needs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book My Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </div>
                <div className="absolute -bottom-8 -right-8 h-36 w-36 rounded-full bg-primary-foreground/5" />
                <div className="absolute -top-6 right-12 h-24 w-24 rounded-full bg-primary-foreground/5" />
              </div>

              {/* Email Card */}
              <div className="flex flex-col items-start rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-1 font-serif text-lg text-card-foreground">
                  Email Us
                </h3>
                <a
                  href="mailto:readingresolved@gmail.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  readingresolved@gmail.com
                </a>
              </div>

              {/* Phone Card */}
              <div className="flex flex-col items-start rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mb-1 font-serif text-lg text-card-foreground">
                  Call Us
                </h3>
                <a
                  href="tel:+16476325801"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  +1 (647) 632-5801
                </a>
              </div>
            </div>

            {/* Location & Hours Row */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 font-serif text-lg text-card-foreground">
                    Location
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Mississauga, Ontario
                    <br />
                    <span className="font-medium text-primary">
                      Online sessions available worldwide
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 font-serif text-lg text-card-foreground">
                    Response Time
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {"We'll"} get back to you within 24 hours.
                    <br />
                    Consultations typically scheduled within the week.
                  </p>
                </div>
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
                  Send Us a Message
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {"Fill out the form below and we'll respond within 24 hours. Tell us about your child and how we can help."}
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
                    {"Thank you for reaching out. We'll be in touch within 24 hours."}
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

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="subject">
                      Subject <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
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
                      placeholder="Tell us about your child and what you're looking for..."
                      rows={5}
                      className="resize-none rounded-xl bg-card"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="mt-2 h-14 rounded-xl text-base shadow-lg shadow-primary/20"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
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
              {"Your child's struggles don't define their future."}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {
                "With the right support, transformation happens\u2014and it starts with one conversation."
              }
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 rounded-xl px-8 text-base"
              >
                <Link href="/programs">Explore Our Programs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
