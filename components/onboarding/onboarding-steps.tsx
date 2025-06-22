import { Check } from "lucide-react"

interface Step {
  id: number
  name: string
}

interface OnboardingStepsProps {
  currentStep: number
  steps: Step[]
}

export function OnboardingSteps({ currentStep, steps }: OnboardingStepsProps) {
  return (
    <nav aria-label="Progress">
      <ol className="flex items-center justify-center">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={`${stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20" : ""} relative`}>
            <div className="flex items-center">
              <div
                className={`
                flex h-10 w-10 items-center justify-center rounded-full border-2
                ${
                  step.id < currentStep
                    ? "bg-blue-600 border-blue-600"
                    : step.id === currentStep
                      ? "border-blue-600 bg-white"
                      : "border-gray-300 bg-white"
                }
              `}
              >
                {step.id < currentStep ? (
                  <Check className="h-6 w-6 text-white" />
                ) : (
                  <span
                    className={`
                    text-sm font-medium
                    ${step.id === currentStep ? "text-blue-600" : "text-gray-500"}
                  `}
                  >
                    {step.id}
                  </span>
                )}
              </div>
              <span
                className={`
                ml-4 text-sm font-medium
                ${step.id <= currentStep ? "text-blue-600" : "text-gray-500"}
              `}
              >
                {step.name}
              </span>
            </div>
            {stepIdx !== steps.length - 1 && (
              <div
                className={`
                absolute top-5 left-10 -ml-px h-0.5 w-8 sm:w-20
                ${step.id < currentStep ? "bg-blue-600" : "bg-gray-300"}
              `}
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
