import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, DollarSign } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Still waiting on that ₹45,000 invoice?</h2>
          <p className="mt-4 text-xl text-gray-300">Get up to 97% today and let us handle the wait.</p>

          <div className="mt-8">
            <Link href="/onboarding">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Your ₹1 Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-blue-400" />
              <h3 className="mt-4 font-semibold text-white">Bank-Level Security</h3>
              <p className="text-sm text-gray-400">Your data is protected</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-green-400" />
              <h3 className="mt-4 font-semibold text-white">Quick Setup</h3>
              <p className="text-sm text-gray-400">Get started in minutes</p>
            </div>
            <div className="flex flex-col items-center">
              <DollarSign className="h-8 w-8 text-yellow-400" />
              <h3 className="mt-4 font-semibold text-white">No Hidden Fees</h3>
              <p className="text-sm text-gray-400">Transparent pricing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
