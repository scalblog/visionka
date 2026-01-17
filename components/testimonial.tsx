
interface TestimonialInterface {
  id: string
  name: string
  handle: string
  avatar: string
  initial: string
  text: string
  verified: boolean
}

const data: TestimonialInterface[] = [
  {
    id: "1",
    name: "Alice Johnson",
    handle: "@alicej",
    avatar: "/avatars/alice.jpg",
    initial: "A",
    text: "This product completely changed the way I work. Clean UI, fast, and reliable.",
    verified: true,
  },
  {
    id: "2",
    name: "Brian Smith",
    handle: "@briansmith",
    avatar: "/avatars/brian.jpg",
    initial: "B",
    text: "Excellent experience from start to finish. Support was responsive and helpful.",
    verified: true,
  },
  {
    id: "3",
    name: "Carla Mendes",
    handle: "@carlam",
    avatar: "/avatars/carla.jpg",
    initial: "C",
    text: "The attention to detail is impressive. Everything feels well thought out.",
    verified: false,
  },
  {
    id: "4",
    name: "David Lee",
    handle: "@davidlee",
    avatar: "/avatars/david.jpg",
    initial: "D",
    text: "Performance is solid and the DX is top-notch. I’d recommend it without hesitation.",
    verified: true,
  },
  {
    id: "5",
    name: "Emma Wilson",
    handle: "@emmaw",
    avatar: "/avatars/emma.jpg",
    initial: "E",
    text: "Simple to use, yet powerful. Exactly what I needed for my project.",
    verified: false,
  },
  {
    id: "6",
    name: "Frank Martin",
    handle: "@frankmartin",
    avatar: "/avatars/frank.jpg",
    initial: "F",
    text: "Great value for money. The quality clearly stands above competitors.",
    verified: true,
  },
]

export default function Testimonial() {

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Ce que disent nos clients
        </h2>
        <p className="text-lg text-muted-foreground">
          Nos clients sont ravis
        </p>
      </div>
    </main>
  )
}
