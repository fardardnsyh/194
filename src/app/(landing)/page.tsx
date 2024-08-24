import { BackgroundEffect } from "@/components/background-effect"
import { FAQSection } from "@/components/landing/faq-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { HeroSection } from "@/components/landing/hero-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { ProcessSection } from "@/components/landing/process-section"

export default function Home(): JSX.Element {
  return (
    <main className="relative h-full min-h-screen">
      <BackgroundEffect />
      <HeroSection />
      <ProcessSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
    </main>
  )
}
