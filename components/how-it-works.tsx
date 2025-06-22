import { Upload, CreditCard, Banknote } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Upload Invoice",
      description: "Connect or upload directly",
      icon: Upload,
      detail: "Upload PDF or connect QuickBooks/FreshBooks/PayPal to fetch invoices automatically",
    },
    {
      step: 2,
      title: "Choose Offer",
      description: "Instant vs 48-hour payout",
      icon: CreditCard,
      detail: "Select 85% instantly or 97% in 48 hours based on your cash flow needs",
    },
    {
      step: 3,
      title: "Get Paid",
      description: "Funds sent to your bank",
      icon: Banknote,
      detail: "Receive money directly in your bank account via secure payment gateway",
    },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">Get paid in 3 simple steps</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <div className="mt-6">
                <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Step {step.step}</div>
                <h3 className="mt-2 text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
                <p className="mt-4 text-sm text-gray-500">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
