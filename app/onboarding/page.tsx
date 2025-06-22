"use client"

import { useState } from "react"
import { OnboardingSteps } from "@/components/onboarding/onboarding-steps"
import { SignupForm } from "@/components/onboarding/signup-form"
import { KYCForm } from "@/components/onboarding/kyc-form"
import { BankLinking } from "@/components/onboarding/bank-linking"
import { OnboardingComplete } from "@/components/onboarding/onboarding-complete"

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState({})

  const steps = [
    { id: 1, name: "Sign Up", component: SignupForm },
    { id: 2, name: "Verification", component: KYCForm },
    { id: 3, name: "Bank Account", component: BankLinking },
    { id: 4, name: "Complete", component: OnboardingComplete },
  ]

  const CurrentStepComponent = steps.find((step) => step.id === currentStep)?.component || SignupForm

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <OnboardingSteps currentStep={currentStep} steps={steps} />

        <div className="mt-12">
          <CurrentStepComponent
            onNext={() => setCurrentStep((prev) => prev + 1)}
            onBack={() => setCurrentStep((prev) => prev - 1)}
            userData={userData}
            setUserData={setUserData}
          />
        </div>
      </div>
    </div>
  )
}
