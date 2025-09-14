import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { iao } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Kapranchuk Taras - Projects Iron & Oak Seattle",
  description: "How I created a storytelling-focused website for Iron & Oak Seattle, achieving 4100% traffic growth and 290% increase in job applicants.",
  keywords: ["Kapranchuk Taras", "Iron & Oak", "Private Security", "Next.js", "Web Design", "Storytelling"],
  alternates: {
    canonical: SITE_SLUGS.projectLinks.iao,
  },
}

const IaoPage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={iao} />
    </>
  )
}

export default IaoPage
