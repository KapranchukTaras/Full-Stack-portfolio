import { StaticImageData } from "next/image"

export interface ReviewProps {
  quote: React.ReactNode
  name: string
  title: string
  img: StaticImageData | string
  id?: string
}

export const REVIEWS = [
  {
    id: "entitled",
    img: "/client-photos/yassine-rhamani-profile-photo.jpeg",
    name: "Yassine Ramani",
    title: "CEO, Entitled",
    quote:
      "Taras's technical leadership transformed our development process. His implementation of React Zero UI improved our UI performance by 10x, and his mentorship helped level up our entire frontend team. He combines deep technical expertise with the rare ability to communicate complex concepts clearly.",
  },
  {
    id: "herba-naturals",
    img: "/brands/herba-naturals-logo.png",
    name: "Sami Raheem",
    title: "Owner, Herba Naturals",
    quote:
      "At the time, Taras was working solo, yet he delivered an e-commerce website that exceeded all our expectations. It was fast, user-friendly, and packed with features like automated shipping labels and AI-powered product management. Finding a Seattle web design company that goes beyond the basics is rare-Taras delivered in every way.",
  },
  {
    id: "vets-choice",
    img: "/brands/vets-choice-insurance-logo.png",
    name: "Rob Dow",
    title: "Co-Founder, Vets Choice Insurance",
    quote:
      "The aftercare is unbeatable. Being an insurance company, we had to go through many rounds of revisions to comply with our legal requirements. Taras was always available to help and make sure we were happy with the final product. I highly recommend them for any web design needs.",
  },
  {
    id: "bespoke",
    img: "/client-photos/bespoke-tint-owner-kris-256.webp",
    name: "Kris Meyer",
    title: "Owner, Bespoke Tint",
    quote:
      "Taras took our vision and built a website that makes our business look as professional online as it is in person. We've already seen a huge increase in calls and bookings. Couldn't recommend Taras enough.",
  },
  {
    id: "iao",
    img: "/client-photos/aleksandr-butowicz-iron-oak-profile-photo.jpg",
    name: "Aleks Butokowitz",
    title: "CEO, Iron & Oak",
    quote:
      "Working with Taras felt like working with an in-house team. They took the time to understand our mission and goals, delivering a site that perfectly blended branding and design with seamless functionality. Their expertise as a web design agency was evident in every detail, from performance to aesthetics.",
  },

  {
    id: "automedics",
    name: "Jeff Egbert",
    title: "Owner, Automedics Kirkland",
    quote: "Taras built our website fast and it works flawlessly. He is always available to answer questions or solve problems. Great experience.",
    img: "/assets/automedics-logo-optimized.png",
  },
] as const satisfies readonly ReviewProps[]

// O(1) lookup
export const REVIEW_MAP: Record<string, ReviewProps> = Object.fromEntries(REVIEWS.map((r) => [r.id, r]))

export function getReview(id: string) {
  return REVIEW_MAP[id]
}
