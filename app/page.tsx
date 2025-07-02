import { PresentationSection } from './home/components/presentation/PresentationSection'
import { SkillsSection } from './home/components/skills/SkillsSection'
import { ProjectsSection } from './home/components/projects/ProjectsSection'
import { Banner } from './home/components/banner/BannerSection'
// import { useTranslations } from 'next-intl'
import { TestimonialsSection } from './home/components/testimonials/TestimonialsSection'

export default function HomePage() {
  // const t = useTranslations('HomePage')
  return (
    <>
      <Banner />
      <PresentationSection />
      <SkillsSection />
      <TestimonialsSection />
      <ProjectsSection />
    </>
  )
}
