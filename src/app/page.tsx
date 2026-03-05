import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { ProgramsSection } from '@/components/ProgramsSection'
import { ARLASection } from '@/components/ARLASection'
import { CalculatorCTA } from '@/components/CalculatorCTA'
import { BranchLocator } from '@/components/BranchLocator'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProgramsSection />
        <ARLASection />
        <CalculatorCTA />
        <TestimonialsSection />
        <BranchLocator />
      </main>
      <Footer />
    </>
  )
}
