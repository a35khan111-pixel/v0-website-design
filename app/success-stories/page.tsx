import { Metadata } from "next"
import { Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Success Stories | Reading Resolved",
  description:
    "Read how Reading Resolved has helped hundreds of families in Mississauga overcome dyslexia and learning differences. Real stories, real results.",
}

const testimonials = [
  {
    quote: `After going through a number of tutors for my 10-year-old dyslexic daughter without seeing much improvement, we finally found Sakina at Reading Resolved. My daughter started with Sakina about 4 months ago in September 2019. Up until seeing Sakina my daughter strongly resisted reading and became frustrated very quickly.\n\nSince she started tutoring with Sakina I have not only seen a huge difference in her confidence level and her interest in reading, but her reading and writing ability is already improving. About 2 months after starting tutoring, my daughter was planning her sleepover birthday party agenda. What I found brought me to tears. She had written her own party agenda and for the first time, I could understand what she had written. My next "wow" moment came when she recently received a 10th birthday card. She picked it up on her own accord and started reading the words on the card perfectly. My husband and I were in awe. She has come such a long way in her confidence and ability in just a few months. She has a lot of work still ahead and I wouldn\u2019t want anyone else guiding and teaching her other than Sakina. She is making a significant difference in Emily\u2019s life and I\u2019m excited to see how my daughter will continue to develop her reading and writing skills moving forward.\n\nSakina is a warm, welcoming tutor who makes my daughter feel comfortable to move at her own pace. She is fantastic at gauging the level of the child and making sure to keep the child learning at the right level for them, so as not to discourage them from pushing too far or too fast. Anyone would be lucky to get Sakina as their tutor.`,
    author: "Susan White, Parent of Emily",
  },
  {
    quote: `We were at a loss when my son, diagnosed with a learning disability in grade 3, struggled despite trying everything\u2014one-on-one tutoring, Kumon, and other traditional methods. Nothing worked until Sakina became his OG teacher.\n\nHer approach was transformative. Starting from the basics, she used the OG method to meet him where he was and build his skills step by step. In a short time, he went from struggling to pass to writing sentences and thriving in school.\n\nToday, he\u2019s in college\u2014something we couldn\u2019t have imagined a few years ago. Sakina didn\u2019t just teach him; she helped him rebuild his confidence and abilities.\n\nIf your child is struggling and traditional methods aren\u2019t working, try OG\u2014and trust me, Sakina is the best! We\u2019re forever grateful for her life-changing support.`,
    author: "Arshia Khalid",
  },
  {
    quote: `When our daughter turned 8 we had noticed she could read only very simple books that were intended for younger children. It seemed that she could not remember how to read simple words even after she had seen them several times before. When her brother who is two grades below her started to approach the same reading level we knew our daughter needed some extra help. We were introduced to Mrs. Sakina Khan who did an assessment and very clearly explained to us what our daughter could read and spell and what her challenges were. She also explained how she could help our daughter by using the Orton-Gillingham approach. Fast forward one year in which she has worked with Mrs. Sakina 2 hours per week, our daughter is almost finished reading (voluntarily) her first chapter book with over 100 pages!\n\nMrs. Sakina is a very professional, approachable and personable teacher and my daughter loves her. Some days when my daughter is reluctant to start the class (now over Zoom) I only need to get her in the hearing range of Sakina who then manages to calm her down and get her to sit at the computer and work with her. I am truly impressed with the way Sakina works, how she relates to my daughter and the progress she has made as a result. When I asked my daughter what makes Mrs. Sakina different from other teachers she said Mrs. Sakina makes it fun, she tells jokes and helps me a lot.`,
    author: "Judith Versloot, PhD",
  },
  {
    quote: `We had the pleasure of working with Sakina as a tutor for our 10-year-old daughter, who has ADHD and dyslexia. Over the course of a year, Sakina not only helped build the foundational reading skills our daughter needed, but did so in a way that was consistently fun, engaging, and tailored to her unique learning style.\n\nWhat stood out most was how Sakina made reading something our daughter looked forward to\u2014it was never a chore or a struggle. Sakina\u2019s patient, creative, and encouraging approach helped transform our daughter\u2019s confidence and relationship with reading.\n\nToday, she\u2019s reading novels on her own and takes pride in her progress\u2014something that felt far off just a year ago. We\u2019re incredibly grateful for the care and dedication Sakina brought to each session, and for the lasting impact she\u2019s had on our daughter\u2019s academic growth.\n\nHighly recommend Sakina to any family looking for a supportive and skilled tutor, especially for children with learning differences.`,
    author: "Catriona Salman",
  },
  {
    quote: `About 3 years ago I met Sakina and from our first meeting together my daughter immediately felt secure and comfortable to begin to learn. My daughter had difficulty beginning to read but within a few sessions, Sakina got her comfortable with sounding out small words. She was excellent in delivering content but more importantly, she was also excellent in managing my daughter\u2019s behaviour. Not only was she able to introduce her to new content and help to develop her literacy skill-set, but she also made my daughter feel safe, helped her to focus and now after just 3 short years with sessions twice a week, my daughter is now reading chapter books which was a dream of hers. I am so grateful to Sakina for her ability to balance delivering curriculum and being able to motivate my daughter to learn. She is such a kind, caring, loving and professional teacher. I highly recommend her!`,
    author: "Samira Raza-Qureshi, High School Teacher, Toronto",
  },
  {
    quote: `I can\u2019t speak highly enough of the impact that Reading Resolved has had on my daughters\u2019 education over the past four years. My older daughter began with the program when she was in grade 7, and now as a grade 11 student, she still eagerly looks forward to her structured word inquiry sessions. The program has deeply engaged her in learning, and the progress she\u2019s made is remarkable. Not only has it enhanced her understanding of English, but it has also helped her in other subjects by improving her ability to decipher and understand the meaning of almost every word.\n\nThe cherry on top of my older daughter\u2019s learning experience is the mainstream language tutoring she receives as part of the program. Her instructor is incredibly thorough and never fails to guide her on even the smallest details, from organizing her work to writing in various styles. Their combined approach has truly helped my daughter thrive academically and develop a love for learning that I couldn\u2019t have imagined just a few years ago.\n\nAs for my younger daughter, the program\u2019s impact has been nothing short of miraculous. She has developed an incredible interest in reading, spelling, and discovering the meanings of words. It\u2019s hard to believe that she is now excelling as a grade 4 student, when just a short time ago she struggled to read basic texts at her grade level. Thanks to the program\u2019s guidance and structure, she\u2019s made astounding progress.\n\nBoth of my daughters have come a long way in their learning journeys, and I owe a tremendous amount of gratitude to Reading Resolved for providing such a reliable, supportive platform with instructors who truly go above and beyond. The experience has been so positive that my daughters don\u2019t want to miss a single lesson. Reading Resolved has given them the tools to succeed, and I can\u2019t recommend it highly enough!`,
    author: "Shireen Saamir, Parent and Reading Resolved family since 2019",
  },
  {
    quote: `Our son is an intelligent college student who, like many young people, doesn\u2019t read books for pleasure. Mild ADHD runs in the family. In his community college classes with heavier reading assignments, I noticed that he avoided reading his textbooks. Instead, he used a \u201Chunt and peck\u201D method to find answers to his reading assignments. A family member recommended the Orton-Gillingham method to help him become more efficient at reading.\n\nSakina Khan works well with young adults and aspiring professionals who wish to improve their learning efficiency. Using an online format, she understands how to connect with this demographic. She does a very good job keeping the fun in the work while staying on task and getting the work done.\n\nMy son looks forward to working with Sakina. He is making good progress in his reading assignments, and there are fewer complaints about school! He recently (and surprisingly!) decided to attend University after earning his Associate\u2019s Degree. I give credit to Sakina for helping him to develop this new confidence, and to him for doing the exercises with Sakina, to improve his capabilities. As a parent, I am very hopeful about his academic future.`,
    author: "Karen, USA",
  },
  {
    quote: `I can\u2019t recommend Reading Resolved highly enough! This academy is a game-changer for children needing support in reading, writing, math, or comprehension. Their personalized, evidence-based approach, including Orton-Gillingham and Structured Word Inquiry, is truly remarkable.\n\nFrom dyslexia tutoring to dyscalculia and dysgraphia support, their expertise helps students grow into confident, capable learners. Their academic coaching also builds essential skills like time management, exam prep, and post-secondary planning.\n\nWhether your child is catching up or aiming to excel, Reading Resolved is the perfect place to thrive. Highly recommended!`,
    author: "Sana Musaddiqi",
  },
  {
    quote: `We have worked with Sakina Khan and Reading Resolved for many years. My daughter is engaged in her lessons and I truly appreciate the style of teaching used by the instructors. My daughter actually finds the lessons fun.\n\nThey build comfortable relationships and use it as a platform for learning. The attention paid to my daughter makes her feel cared for and has helped to build her confidence. I have definitely seen a positive progression in her reading abilities. Reading Resolved has been a worthwhile investment in my daughter\u2019s success.`,
    author: "Ms. Amuna",
  },
  {
    quote: `Reading Resolved offers excellent tutoring services. My son was a student of Sakina. He can have a hard time focusing and staying engaged, as he hated reading. He made great progress with Sakina and she was always patient and made the lessons fun. Highly recommend!`,
    author: "Lena McKendry",
  },
  {
    quote: `Sakina was extremely professional and helped my daughter with her reading challenges. She was engaging, kind and very creative in her approach. She made learning fun while building on our daughter\u2019s skills and I would highly recommend her. Thank you once again.`,
    author: "Mehernaaz",
  },
  {
    quote: `Sakina and her program have made a big impact on the students that have been lucky enough to work with her. She is patient and caring, which immediately makes her students feel comfortable so they can meet their potential. Sakina finds fun ways to engage her students through fun games and activities which are also helping children learn. Most importantly, students get results and have success while participating in this program. It teaches the foundational skills which allow students to flourish in all areas of the curriculum while at school. Thank you Sakina for all of your amazing work!`,
    author: "Alanna Pomfret, Peel District School Board",
  },
]

function StarRating() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h1 className="mt-4 font-serif text-4xl text-background md:text-5xl lg:text-6xl">
            <span className="text-balance">
              Real Families. Real Stories. Real Success.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-background/70">
            {"See how we\u2019ve helped hundreds of families transform struggle into breakthrough moments, in their own words."}
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-8">
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md md:p-10"
              >
                <StarRating />
                <blockquote className="mt-5">
                  {t.quote.split("\n\n").map((paragraph, pi) => (
                    <p
                      key={pi}
                      className={`text-base leading-relaxed text-muted-foreground ${
                        pi > 0 ? "mt-4" : ""
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </blockquote>
                <div className="mt-6 border-t border-border pt-5">
                  <p className="font-serif text-lg text-foreground">
                    {"— "}{t.author}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            <span className="text-balance">
              Ready to Write Your Own Success Story?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {"Join hundreds of families who\u2019ve transformed struggle into confidence."}
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="text-base shadow-lg shadow-primary/20">
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
  )
}
