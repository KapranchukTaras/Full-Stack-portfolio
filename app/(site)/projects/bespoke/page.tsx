import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { bespoke } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Kapranchuk Taras - Projects Bespoke Tint & PPF",
  description: "How I helped Bespoke Tint & PPF achieve 966% traffic growth and $1M+ revenue trajectory through SEO-focused web design and development.",
  keywords: ["Kapranchuk Taras", "Bespoke Projects", "Tint", "PPF", "React Zero-UI", "Next.js", "React", "TypeScript"],
  alternates: {
    canonical: SITE_SLUGS.projectLinks.bespoke,
  },
}

const BespokePage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={bespoke} />
    </>
  )
}

export default BespokePage
