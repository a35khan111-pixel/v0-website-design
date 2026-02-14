"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  GraduationCap,
  User,
  Users,
  MapPin,
  ClipboardList,
  Heart,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

const steps = [
  { id: 1, label: "Student", icon: GraduationCap },
  { id: 2, label: "Parents", icon: Users },
  { id: 3, label: "Address", icon: MapPin },
  { id: 4, label: "Health & Learning", icon: ClipboardList },
  { id: 5, label: "Your Child's Story", icon: Heart },
]

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const totalSteps = steps.length

  function handleNext() {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1)
  }

  function handlePrev() {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError("")

    const form = e.currentTarget
    const get = (id: string) => (form.querySelector(`#${id}`) as HTMLInputElement | HTMLTextAreaElement | null)?.value ?? ""
    const getRadio = (name: string) => (form.querySelector(`input[name="${name}"]:checked`) as HTMLInputElement | null)?.value ?? ""

    const data = {
      studentFirstName: get("studentFirstName"),
      studentLastName: get("studentLastName"),
      age: get("age"),
      grade: get("grade"),
      dateOfBirth: get("dob"),
      school: get("school"),
      fatherFirstName: get("fatherFirstName"),
      fatherLastName: get("fatherLastName"),
      fatherPhone: get("fatherPhone"),
      motherFirstName: get("motherFirstName"),
      motherLastName: get("motherLastName"),
      motherPhone: get("motherPhone"),
      country: get("country") || "Canada",
      addressLine1: get("address1"),
      addressLine2: get("address2"),
      city: get("city"),
      province: get("province"),
      postalCode: get("postalCode"),
      email: get("email"),
      allergies: get("allergies"),
      hasIEP: getRadio("iep"),
      iepCopyWilling: getRadio("iepCopy"),
      hasPsychoEd: getRadio("psychoEd"),
      psychoEdCopyWilling: getRadio("psychoEdCopy"),
      medications: getRadio("medications"),
      handedness: getRadio("handedness"),
      strengths: get("strengths"),
      growthAreas: get("growth-areas"),
      hopes: get("hopes"),
      goals: get("goals"),
      referral: get("referral"),
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error || "Failed to submit registration.")
      }

      setSubmitted(true)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-6 py-20">
        <div className="mx-auto max-w-lg text-center animate-fade-in">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <h1 className="font-serif text-3xl text-foreground">
            Registration Submitted
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Thank you for registering your child with Reading Resolved. We will
            review your information and get back to you within 24 hours.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <a
                href="https://calendly.com/readingresolved/free-consultation-understanding-your-child-s-needs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <>
      <main>
        {/* Hero Header */}
        <section className="border-b border-border bg-foreground py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground/80">
                <GraduationCap className="h-4 w-4" />
                Start Their Journey
              </div>
              <h1 className="font-serif text-3xl text-background sm:text-4xl lg:text-5xl text-balance">
                Student Registration
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-background/70">
                Complete the form below so we can understand your child and create
                a personalized plan for their success.
              </p>
            </div>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-3xl px-6 py-6">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = step.id === currentStep
                const isComplete = step.id < currentStep
                return (
                  <div key={step.id} className="flex flex-1 items-center">
                    <button
                      onClick={() => setCurrentStep(step.id)}
                      className={`group flex flex-col items-center gap-1.5 transition-colors ${
                        isActive
                          ? "text-primary"
                          : isComplete
                          ? "text-primary/70"
                          : "text-muted-foreground/50"
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all sm:h-12 sm:w-12 ${
                          isActive
                            ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20"
                            : isComplete
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border bg-background text-muted-foreground/50 group-hover:border-muted-foreground"
                        }`}
                      >
                        {isComplete ? (
                          <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" />
                        ) : (
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        )}
                      </div>
                      <span className="hidden text-xs font-medium sm:block">
                        {step.label}
                      </span>
                    </button>
                    {index < steps.length - 1 && (
                      <div
                        className={`mx-1 h-0.5 flex-1 rounded-full transition-colors sm:mx-2 ${
                          step.id < currentStep ? "bg-primary" : "bg-border"
                        }`}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Student Info */}
              {currentStep === 1 && (
                <div className="animate-fade-in">
                  <div className="mb-8">
                    <h2 className="font-serif text-2xl text-foreground">
                      Student Information
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                      Tell us about the student who will be joining our program.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label className="text-sm font-medium text-foreground">
                        {"Student's"} Name <span className="text-destructive">*</span>
                      </Label>
                      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <Label className="text-xs text-muted-foreground">
                            First Name
                          </Label>
                          <Input
                            required
                            className="mt-1 border-border bg-card"
                            placeholder="First name"
                          />
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">
                            Last Name
                          </Label>
                          <Input
                            required
                            className="mt-1 border-border bg-card"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                      <div>
                        <Label htmlFor="age" className="text-sm font-medium">
                          Age <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="age"
                          type="number"
                          required
                          min={3}
                          max={20}
                          className="mt-2 border-border bg-card"
                          placeholder="Age"
                        />
                      </div>
                      <div>
                        <Label htmlFor="grade" className="text-sm font-medium">
                          Grade <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="grade"
                          required
                          className="mt-2 border-border bg-card"
                          placeholder="e.g. Grade 4"
                        />
                      </div>
                      <div>
                        <Label htmlFor="dob" className="text-sm font-medium">
                          Date of Birth <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="dob"
                          type="date"
                          required
                          className="mt-2 border-border bg-card"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="school" className="text-sm font-medium">
                        School Attending <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="school"
                        required
                        className="mt-2 border-border bg-card"
                        placeholder="Name of current school"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Parent Info */}
              {currentStep === 2 && (
                <div className="animate-fade-in">
                  <div className="mb-8">
                    <h2 className="font-serif text-2xl text-foreground">
                      Parent / Guardian Information
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                      How can we reach you?
                    </p>
                  </div>

                  <div className="space-y-8">
                    {/* Father */}
                    <div className="rounded-xl border border-border bg-card p-6">
                      <div className="mb-4 flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold">{"Father's"} Information</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <Label className="text-xs text-muted-foreground">
                              First Name <span className="text-destructive">*</span>
                            </Label>
                            <Input required className="mt-1 border-border bg-background" placeholder="First name" />
                          </div>
                          <div>
                            <Label className="text-xs text-muted-foreground">
                              Last Name <span className="text-destructive">*</span>
                            </Label>
                            <Input required className="mt-1 border-border bg-background" placeholder="Last name" />
                          </div>
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">
                            Cell Phone <span className="text-destructive">*</span>
                          </Label>
                          <Input required type="tel" className="mt-1 border-border bg-background" placeholder="+1 (647) 000-0000" />
                        </div>
                      </div>
                    </div>

                    {/* Mother */}
                    <div className="rounded-xl border border-border bg-card p-6">
                      <div className="mb-4 flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold">{"Mother's"} Information</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <Label className="text-xs text-muted-foreground">
                              First Name <span className="text-destructive">*</span>
                            </Label>
                            <Input required className="mt-1 border-border bg-background" placeholder="First name" />
                          </div>
                          <div>
                            <Label className="text-xs text-muted-foreground">
                              Last Name <span className="text-destructive">*</span>
                            </Label>
                            <Input required className="mt-1 border-border bg-background" placeholder="Last name" />
                          </div>
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">
                            Cell Phone <span className="text-destructive">*</span>
                          </Label>
                          <Input required type="tel" className="mt-1 border-border bg-background" placeholder="+1 (647) 000-0000" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="mt-2 border-border bg-card"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Address */}
              {currentStep === 3 && (
                <div className="animate-fade-in">
                  <div className="mb-8">
                    <h2 className="font-serif text-2xl text-foreground">
                      Home Address
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                      Used for in-person session planning.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label className="text-sm font-medium">Country</Label>
                      <Select defaultValue="canada">
                        <SelectTrigger className="mt-2 border-border bg-card">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="address1" className="text-sm font-medium">
                        Address Line 1 <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="address1"
                        required
                        className="mt-2 border-border bg-card"
                        placeholder="Street address"
                      />
                    </div>

                    <div>
                      <Label htmlFor="address2" className="text-sm font-medium">
                        Address Line 2
                      </Label>
                      <Input
                        id="address2"
                        className="mt-2 border-border bg-card"
                        placeholder="Apartment, suite, unit, etc."
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div>
                        <Label htmlFor="city" className="text-sm font-medium">
                          City <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="city"
                          required
                          className="mt-2 border-border bg-card"
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <Label htmlFor="province" className="text-sm font-medium">
                          Province <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="province"
                          required
                          className="mt-2 border-border bg-card"
                          placeholder="Province"
                        />
                      </div>
                      <div>
                        <Label htmlFor="postal" className="text-sm font-medium">
                          Postal Code <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="postal"
                          required
                          className="mt-2 border-border bg-card"
                          placeholder="A1A 1A1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Health & Learning */}
              {currentStep === 4 && (
                <div className="animate-fade-in">
                  <div className="mb-8">
                    <h2 className="font-serif text-2xl text-foreground">
                      Health & Learning Profile
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                      This information helps us tailor our approach to your child.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <Label htmlFor="allergies" className="text-sm font-medium">
                        Does your child have any allergies (especially food
                        allergies)? <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="allergies"
                        required
                        rows={3}
                        className="mt-2 border-border bg-card"
                        placeholder="List any allergies or type 'None'"
                      />
                    </div>

                    {/* IEP */}
                    <div className="rounded-xl border border-border bg-card p-6">
                      <Label className="text-sm font-medium">
                        Does your child have an IEP or equivalent document?{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <RadioGroup defaultValue="" className="mt-3 flex gap-6">
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="yes" id="iep-yes" />
                          <Label htmlFor="iep-yes" className="font-normal">
                            Yes
                          </Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="no" id="iep-no" />
                          <Label htmlFor="iep-no" className="font-normal">
                            No
                          </Label>
                        </div>
                      </RadioGroup>
                      <div className="mt-4 border-t border-border pt-4">
                        <Label className="text-sm text-muted-foreground">
                          If yes, will you be willing to provide a copy?
                        </Label>
                        <RadioGroup defaultValue="" className="mt-2 flex gap-6">
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="yes" id="iep-copy-yes" />
                            <Label htmlFor="iep-copy-yes" className="font-normal">
                              Yes
                            </Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="no" id="iep-copy-no" />
                            <Label htmlFor="iep-copy-no" className="font-normal">
                              No
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    {/* Psycho-Ed */}
                    <div className="rounded-xl border border-border bg-card p-6">
                      <Label className="text-sm font-medium">
                        Has your child had a psycho-ed evaluation done?{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <RadioGroup defaultValue="" className="mt-3 flex gap-6">
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="yes" id="psycho-yes" />
                          <Label htmlFor="psycho-yes" className="font-normal">
                            Yes
                          </Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="no" id="psycho-no" />
                          <Label htmlFor="psycho-no" className="font-normal">
                            No
                          </Label>
                        </div>
                      </RadioGroup>
                      <div className="mt-4 border-t border-border pt-4">
                        <Label className="text-sm text-muted-foreground">
                          If yes, will you be willing to provide a copy?
                        </Label>
                        <RadioGroup defaultValue="" className="mt-2 flex gap-6">
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="yes" id="psycho-copy-yes" />
                            <Label
                              htmlFor="psycho-copy-yes"
                              className="font-normal"
                            >
                              Yes
                            </Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="no" id="psycho-copy-no" />
                            <Label
                              htmlFor="psycho-copy-no"
                              className="font-normal"
                            >
                              No
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    {/* Medications */}
                    <div className="rounded-xl border border-border bg-card p-6">
                      <Label className="text-sm font-medium">
                        Is your child currently taking any medications that support
                        their learning (e.g. for focus, anxiety, etc.)?{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <RadioGroup defaultValue="" className="mt-3 flex gap-6">
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="yes" id="meds-yes" />
                          <Label htmlFor="meds-yes" className="font-normal">
                            Yes
                          </Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="no" id="meds-no" />
                          <Label htmlFor="meds-no" className="font-normal">
                            No
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Handedness */}
                    <div>
                      <Label className="text-sm font-medium">
                        Is your child right-handed or left-handed?{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <RadioGroup defaultValue="" className="mt-3 flex gap-6">
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="right" id="hand-right" />
                          <Label htmlFor="hand-right" className="font-normal">
                            Right
                          </Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="left" id="hand-left" />
                          <Label htmlFor="hand-left" className="font-normal">
                            Left
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Your Child's Story */}
              {currentStep === 5 && (
                <div className="animate-fade-in">
                  <div className="mb-8">
                    <h2 className="font-serif text-2xl text-foreground">
                      {"Your Child's"} Story
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                      Help us see the whole child -- their personality, their
                      spark, and how we can best support them.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="strengths" className="text-sm font-medium">
                        Tell us about your child! What are they great at, what
                        lights them up, and what makes them uniquely them?{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="strengths"
                        required
                        rows={4}
                        className="mt-2 border-border bg-card"
                        placeholder="e.g. They love animals, are incredibly creative, have a great sense of humor..."
                      />
                    </div>

                    <div>
                      <Label htmlFor="growth-areas" className="text-sm font-medium">
                        Where could your child use a little extra support or
                        encouragement? (Academics and beyond){" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="growth-areas"
                        required
                        rows={4}
                        className="mt-2 border-border bg-card"
                        placeholder="e.g. Building confidence in reading, staying focused on homework, feeling more comfortable in class..."
                      />
                    </div>

                    <div>
                      <Label htmlFor="hopes" className="text-sm font-medium">
                        What would a breakthrough look like for your child
                        academically? What would make you feel relieved and
                        hopeful?{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="hopes"
                        required
                        rows={4}
                        className="mt-2 border-border bg-card"
                        placeholder="e.g. Seeing them pick up a book on their own, feeling confident before a test, enjoying school again..."
                      />
                    </div>

                    <div>
                      <Label htmlFor="goals" className="text-sm font-medium">
                        What do you hope your child will gain from working with
                        us?{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="goals"
                        required
                        rows={4}
                        className="mt-2 border-border bg-card"
                        placeholder="e.g. A love for reading, stronger self-belief, skills to succeed independently..."
                      />
                    </div>

                    <div>
                      <Label htmlFor="referral" className="text-sm font-medium">
                        How did you hear about us?
                      </Label>
                      <Input
                        id="referral"
                        className="mt-2 border-border bg-card"
                        placeholder="e.g. Google, a friend, school recommendation"
                      />
                    </div>

                    {/* Terms */}
                    <div className="rounded-xl border border-border bg-card p-6">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="terms"
                          checked={agreedToTerms}
                          onCheckedChange={(checked) =>
                            setAgreedToTerms(checked === true)
                          }
                          className="mt-0.5"
                        />
                        <Label
                          htmlFor="terms"
                          className="text-sm font-normal leading-relaxed text-muted-foreground"
                        >
                          I agree to the{" "}
                          <Link
                            href="#"
                            className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
                          >
                            Terms & Conditions
                          </Link>{" "}
                          and consent to Reading Resolved collecting and using the
                          information provided above to support my child&apos;s
                          learning.{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="mt-10 flex items-center justify-between border-t border-border pt-8">
                <div>
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePrev}
                      size="lg"
                    >
                      Back
                    </Button>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {submitError && (
                    <p className="text-sm text-destructive">{submitError}</p>
                  )}
                  <span className="text-sm text-muted-foreground">
                    Step {currentStep} of {totalSteps}
                  </span>
                  {currentStep < totalSteps ? (
                    <Button type="button" onClick={handleNext} size="lg">
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      size="lg"
                      disabled={!agreedToTerms || submitting}
                      className="shadow-lg shadow-primary/20"
                    >
                      {submitting ? (
                        <>
                          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Submit Registration
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}
