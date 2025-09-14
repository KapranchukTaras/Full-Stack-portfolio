export const DOMAIN_URL = "https://www.kapranchuktaras.com"

export const SITE_CONFIG = {
  title: "Kapranchuk Taras",
  description: "Portfolio of Kapranchuk Taras, Seattle-based full-stack engineer. Specializing in Next.js, React, TypeScript, and Tailwind CSS.",
  url: DOMAIN_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL ?? "http://localhost:3000",
  siteName: "Kapranchuk Taras",
  keywords: ["Kapranchuk Taras", "Serbyte", "React Zero-UI", "Next.js", "React", "TypeScript", "Full-Stack Engineer", "Seattle"],
  ogImage: "/assets/bg-home-poster-optimized.webp",
  logo: "/serbyte-logo.png",
} as const

export const SITE_NAP = {
  name: "Kapranchuk Taras",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Kapranchuk Taras",
  contactTitle: "CEO",
  email: "@serbyte.net",
  phone: "+12066596727",
  formattedPhone: "+1 (206) 659-6727",
  addressLink: "https://www.google.com/maps/search/?api=1&query=serbyte+development",
  street: "12601 NE 124th ST",
  city: "Kirkland",
  state: "WA",
  zipCode: "98034",
  openingHours: [{ days: "Mon - Sat", hours: "8am - 6pm" }] as const,
  googleReviewLink: "https://g.page/r/CXHVs1ony_76EAI/review",
  profiles: {
    facebook: "https://www.facebook.com/serbytedevelopment/",
    linkedIn: "https://www.linkedin.com/in/kapranchuk-taras/",
    yelp: "https://www.yelp.com/biz/serbyte-development-kirkland-3",
    pinterest: "https://www.pinterest.com/serbytedevelopment",
    gbp: "https://g.co/kgs/ay2r1wp",
    github: "https://github.com/KapranchukTaras",
    x: "https://x.com/kapranchuktaras",
  } as const,
  logo: "/serbyte-logo.png",
  favicon: "/favicon.ico",
  images: ["https://www.serbyte.net/serbyte-logo.png", "https://www.serbyte.net/assets/bg-home-poster-optimized.webp"],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/#contact",
  about: "/#about-kapranchuk-taras",
  projectLinks: {
    iao: "/projects/iron-and-oak",
    automedics: "/projects/automedics",
    bespoke: "/projects/bespoke",
  },
} as const

export const externalLinks = {
  vetsChoice: "https://vetschoiceinsurance.com/",
  zeroIconSprite: "#",
  // zeroIconSprite: "https://github.com/react-zero-ui/icon-sprite",
  zeroCore: "#",
  // zeroCore: "https://github.com/react-zero-ui/core",
  entitled: "https://be-entitled.com/",
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
