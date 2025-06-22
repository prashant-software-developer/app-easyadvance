import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, DollarSign, TrendingUp } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Get Your Freelance Invoices Paid <span className="text-blue-600">Today</span> — Not 90 Days Later
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Upload your invoice, get paid in minutes, and let us chase your client. Stop waiting for payments and start
            growing your business.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/onboarding">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Try Fast Pay for ₹1
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              See How It Works
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-blue-100 p-3">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 font-semibold">Get Paid in Minutes</h3>
              <p className="text-sm text-gray-600">Upload invoice, get instant advance</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-green-100 p-3">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-4 font-semibold">Up to 97% Advance</h3>
              <p className="text-sm text-gray-600">Get most of your money upfront</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-purple-100 p-3">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mt-4 font-semibold">Transparent Fees</h3>
              <p className="text-sm text-gray-600">From ₹5 + 1% - no hidden costs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
