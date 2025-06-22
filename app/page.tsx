import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { PricingComparison } from "@/components/pricing-comparison"
import { CashFlowCalculator } from "@/components/cash-flow-calculator"
import { TrustSection } from "@/components/trust-section"
import { FinalCTA } from "@/components/final-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TrustSection />
      <HowItWorks />
      <PricingComparison />
      <CashFlowCalculator />
      <FinalCTA />
    </div>
  )
}
