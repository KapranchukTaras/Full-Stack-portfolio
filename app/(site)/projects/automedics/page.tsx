import ProjectDisplay from "@/app/components/ProjectSection/ProjectDisplay"
import { automedicsKirkland } from "@/app/data/project-data"
import { Metadata } from "next"
import { SITE_SLUGS } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: "Kapranchuk Taras - Projects AutoMedics Kirkland",
  description: "How I transformed AutoMedics Kirkland's online presence with 960% traffic growth through conversion-focused web design and local SEO.",
  keywords: ["Kapranchuk Taras", "AutoMedics", "Kirkland", "Auto Repair", "Next.js", "Web Design", "Local SEO"],
  alternates: {
    canonical: SITE_SLUGS.projectLinks.automedics,
  },
}

const AutomedicsKirklandPage: React.FC = () => {
  return (
    <>
      <ProjectDisplay projectData={automedicsKirkland} />
    </>
  )
}

export default AutomedicsKirklandPage
