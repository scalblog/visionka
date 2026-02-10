"use client"

import { IconBrandTwitter } from "@tabler/icons-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Twitter } from "lucide-react"
import { motion, transformValue } from "framer-motion"

interface TestimonialInterface {
  id: string
  name: string
  handle: string
  avatar: string
  initial: string
  text: string
  verified: boolean
}
// exercice : add Motion 
const data: TestimonialInterface[] = [
  {
    id: "1",
    name: "Alice Johnson",
    handle: "@alicej",
    avatar: "/avatars/default-avatar.png",
    initial: "A",
    text: "This product completely changed the way I work. Clean UI, fast, and reliable.",
    verified: true,
  },
  {
    id: "2",
    name: "Brian Smith",
    handle: "@briansmith",
    avatar: "/avatars/default-avatar.png",
    initial: "B",
    text: "Excellent experience from start to finish. Support was responsive and helpful.",
    verified: true,
  },
  {
    id: "3",
    name: "Carla Mendes",
    handle: "@carlam",
    avatar: "/avatars/default-avatar.png",
    initial: "C",
    text: "The attention to detail is impressive. Everything feels well thought out.",
    verified: false,
  },
  {
    id: "4",
    name: "David Lee",
    handle: "@davidlee",
    avatar: "/avatars/default-avatar.png",
    initial: "D",
    text: "Performance is solid and the DX is top-notch. I’d recommend it without hesitation.",
    verified: true,
  },
  {
    id: "5",
    name: "Emma Wilson",
    handle: "@emmaw",
    avatar: "/avatars/default-avatar.png",
    initial: "E",
    text: "Simple to use, yet powerful. Exactly what I needed for my project.",
    verified: false,
  },
  {
    id: "6",
    name: "Frank Martin",
    handle: "@frankmartin",
    avatar: "/avatars/default-avatar.png",
    initial: "F",
    text: "Great value for money. The quality clearly stands above competitors.",
    verified: true,
  },
]

export default function Testimonial() {

  return (
    <main className="min-h-screen bg-background">
      <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.6}} className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Ce que disent nos clients
        </h2>
        <p className="text-lg text-muted-foreground">
          Nos clients sont ravis
        </p>
      </motion.div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((testimonial) => {
            return (
              <motion.div whileHover={{y: -8, transition: {duration: 0.2}}} className="pascal-glass border border-border rounded-lg p-6 px-2 bg-card hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name}></AvatarImage>
                      <AvatarFallback>{testimonial.initial}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <p className="font-semibold text-sm truncate">{testimonial.name}</p>
                        {testimonial.verified && (
                          <svg className="h-4 w-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{testimonial.handle}</p>
                    </div>
                  </div>
                  <div className="h-10  flex items-center">
                    <Twitter className="h-4 w-4 text-blue-400 flex-shrink-0"></Twitter>
                  </div>
                </div>
                <p className="text-sm text-foreground leading-relaxed">{testimonial.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
