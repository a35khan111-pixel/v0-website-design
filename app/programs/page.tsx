import { Metadata } from "next"
import { ProgramsHero } from "@/components/programs-hero"
import { ProgramsOverview } from "@/components/programs-overview"
import { ProgramDetail } from "@/components/program-detail"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Programs | Reading Resolved",
  description:
    "Explore our specialized programs: Dyslexia Support, Academic Tutoring, and Life Coaching. Tailored 1-on-1 sessions designed to help your child thrive.",
}

const dyslexiaProgram = {
  id: "dyslexia",
  label: "Dyslexia Support",
  title: "Dyslexia Support",
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

const academicProgram = {
  id: "academic",
  label: "Academic Tutoring & Educational Consulting",
  title: "Academic Tutoring & Educational Consulting",
  subtitle: "Grades 3-12",
  intro: [
    "Your child has built reading confidence. Now it's time to help them soar.",
    "Whether they're navigating middle school challenges, preparing for high school success, or planning for university -- this program provides the academic support and strategic guidance your family needs.",
    "We don't just tutor subjects. We teach students how to learn, advocate for themselves, and make confident decisions about their educational future.",
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
  label: "Life Coaching",
  title: "Life Coaching (Pre-Teens & Teens)",
  subtitle: "From Self-Doubt to Self-Advocacy",
  intro: [
    "Your child has worked so hard. The skills are there. But they still second-guess their answers, lack clarity on their goals, and compare themselves to others.",
    "This program is for students who need more than academic support -- they need to build the confidence, emotional intelligence, and self-advocacy skills to navigate peer pressure, speak up for themselves, and shape their own future.",
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
      <ProgramDetail {...academicProgram} reversed bgClass="bg-muted/50" />
      <ProgramDetail {...coachingProgram} />
      <CTASection />
    </main>
  )
}
