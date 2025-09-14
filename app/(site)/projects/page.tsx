import React from "react"
import { WorkHero } from "./WorkHero"
import { ProjectsStatic } from "./ProjectsStatic"
import { RecruiterContact } from "@/app/components/RecruiterContact"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"
import { projectsSchema, breadcrumbSchema } from "@/config/schemas"

export const metadata: Metadata = {
  title: "Kapranchuk Taras - Projects & Case Studies",
  description: "Featured work by Kapranchuk Taras: production Next.js + TypeScript systems, React Zero-UI, and selected client builds. Outcomes, scope, and links.",
  keywords: ["Kapranchuk Taras", "Projects", "Case Studies", "React Zero-UI", "Next.js", "React", "TypeScript"],
  alternates: {
    canonical: SITE_SLUGS.projects,
  },
}
const page = () => {
  return (
    <main className="relative z-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([projectsSchema, breadcrumbSchema]),
        }}
      />
      <WorkHero />
      <ProjectsStatic />
      <RecruiterContact />
    </main>
  )
}

export default page
