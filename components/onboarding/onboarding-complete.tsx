import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

interface OnboardingCompleteProps {
  userData: any
}

export function OnboardingComplete({ userData }: OnboardingCompleteProps) {
  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <CardTitle className="text-2xl">Welcome to Cash Flow Companion!</CardTitle>
        <p className="text-gray-600">
          Your account is set up and ready to go. Start uploading invoices to get paid faster.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Your Trial Benefits:</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• First 5 payments at just ₹1 per transaction</li>
            <li>• Up to 97% advance on your invoices</li>
            <li>• Instant to 48-hour payout options</li>
            <li>• No hidden fees or surprises</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Next Steps:</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
              <span>Upload your first invoice</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
              <span>Choose your payout option</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
              <span>Get paid instantly</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/dashboard" className="flex-1">
            <Button className="w-full">
              Go to Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
