import { Metadata } from "next"
import { ProgramsHero } from "@/components/programs-hero"
import { ProgramsOverview } from "@/components/programs-overview"
import { ProgramDetail } from "@/components/program-detail"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Programs | Reading Resolved",
  description:
    "Explore our specialized programs: Dyslexia Intervention, Structured Math Support, Advanced Academic Support, and Life Coaching for students with learning differences.",
}

const dyslexiaProgram = {
  id: "dyslexia",
  label: "Dyslexia Intervention",
  title: "Dyslexia Intervention",
  subtitle: "From Avoiding Books to Reading With Ease",
  intro: [
    "Reading may feel impossible right now -- but it won't be forever.",
    "This program is for the child who feels stuck while everyone else moves ahead -- the child who avoids books, guesses at words, or melts down over homework. We remove the guessing and the anxiety by teaching reading the way your child's brain actually learns.",
    'As Orton-Gillingham trained practitioners, we don\'t help children simply cope with dyslexia -- we help them conquer it. This is where symbols begin to make sense, frustration turns into "I got it!", and your child discovers something powerful: "I can actually read."',
  ],
  whatChildReceives: [
    "1-on-1 sessions (45 minutes) tailored to your child's specific learning profile",
    "Instruction focused on phonemic awareness, systematic phonics, fluency, and spelling",
    "Flexible options: Online or in-person (Mississauga)",
  ],
  parentWin: {
    title: "The Parent Win",
    text: "No more nightly tears. No more guessing. Just a child who finally has the keys to the world of books -- and the confidence to open them.",
  },
  image: "/images/program-dyslexia.jpg",
  imageAlt: "Child reading with tutor guidance",
}

const dyscalculiaProgram = {
  id: "dyscalculia",
  label: "Dyscalculia Support",
  title: "Structured Math Support",
  subtitle: "45 Min Sessions",
  intro: [
    "Numbers feel impossible. Math facts won't stick. Word problems create panic.",
    "For students with dyscalculia or math learning differences, traditional tutoring doesn't address the root issue: a difference in how their brain processes numbers.",
    "We use structured, multisensory methods designed for students with dyscalculia, teaching number sense and mathematical thinking in a way that finally makes sense.",
  ],
  whatChildReceives: [
    "1-on-1 structured math sessions (45 minutes)",
    "Multisensory instruction for number sense and place value",
    "Strategies for math fact fluency",
    "Support for word problems and reasoning",
    "Online or in-person (Mississauga)",
  ],
  parentWin: {
    title: "The Parent Win",
    text: "From \"I'm just bad at math\" to \"I get it now.\"",
  },
  image: "/images/program-academic.jpg",
  imageAlt: "Student working on math with tutor support",
}

const academicProgram = {
  id: "academic",
  label: "Advanced Academic Support for Learning Differences",
  title: "Advanced Academic Support for Learning Differences",
  subtitle: "Grades 3-12",
  intro: [
    "Your child has built reading confidence through dyslexia intervention. Now they're ready for the next level.",
    "Students with learning differences face unique academic challenges -- but with the right strategies and support, they don't just keep up, they excel.",
    "We provide specialized academic coaching designed for how students with learning differences learn best -- from middle school success to university admissions, we help them advocate for themselves and own their educational future.",
  ],
  whatChildReceives: [
    "1-on-1 academic tutoring (45 minutes) across all core subjects",
    "Subject support: Math, writing, reading comprehension, science, test prep",
    "Study skills & executive functioning: Organization, time management, critical thinking",
    "University planning & admissions support: Essay coaching, program selection, scholarship guidance",
    "IEP consultation & advocacy: Navigate the system and secure the support your child deserves",
    "Educational planning: Strategic guidance for academic success",
    "Flexible options: Online or in-person (Mississauga)",
  ],
  parentWin: {
    title: "The Parent Win",
    text: "Watching your child stop dreading school and start owning their future. From navigating report cards to choosing a university -- you'll finally have a partner who gets it.",
  },
  image: "/images/program-academic.jpg",
  imageAlt: "Teenager studying confidently",
}

const coachingProgram = {
  id: "coaching",
  label: "Life Coaching for Students with Learning Differences",
  title: "Life Coaching for Students with Learning Differences",
  subtitle: "From Self-Doubt to Self-Advocacy",
  intro: [
    "Students with learning differences have worked harder than their peers just to keep up. The skills are there. But they still second-guess themselves, lack clarity on their goals, and compare themselves to others.",
    "This program builds the confidence, emotional intelligence, and self-advocacy skills that students with learning differences need to navigate peer pressure, speak up for themselves, and shape their own future.",
    "We don't provide therapy. We provide a safe space where they develop the mindset and tools to stop being defined by their struggle and start being defined by their own power.",
  ],
  whatChildReceives: [
    "1-on-1 coaching sessions (60 minutes) tailored to their needs",
    "Focus areas: Building confidence, navigating peer pressure, goal-setting, emotional intelligence",
    "Self-advocacy skills: Speaking up in class, communicating with teachers, owning their learning",
    "Flexible options: Online or in-person (Mississauga)",
  ],
  parentWin: {
    title: "The Parent Win",
    text: "No more watching them hold back. No more worrying they'll give up. Just a young person who knows their worth, stands their ground, and believes in their ability to shape their own future.",
  },
  image: "/images/program-coaching.jpg",
  imageAlt: "Teen in coaching session with mentor",
}

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      <ProgramsHero />
      <ProgramsOverview />
      <ProgramDetail {...dyslexiaProgram} />
      <ProgramDetail {...dyscalculiaProgram} reversed bgClass="bg-muted/50" />
      <ProgramDetail {...academicProgram} />
      <ProgramDetail {...coachingProgram} reversed bgClass="bg-muted/50" />
      <CTASection />
    </main>
  )
}
