import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

export function SubscriptionPlans() {
  const plans = [
    {
      name: "Freelancer Quick Pay Trial",
      price: "₹1",
      period: "per transaction",
      description: "Perfect for getting started",
      features: ["First 5 payments only", "Up to 97% advance", "Instant to 48hr payouts", "Basic support"],
      current: true,
      remaining: 3,
    },
    {
      name: "Core Plan",
      price: "₹2,399",
      period: "per month",
      description: "For regular freelancers",
      features: [
        "7-day payout guarantee",
        "₹10L invoice volume",
        "Priority support",
        "Advanced analytics",
        "Multiple integrations",
      ],
      popular: true,
    },
    {
      name: "Pro Plan",
      price: "₹4,999",
      period: "per month",
      description: "For high-volume freelancers",
      features: [
        "3-day payout guarantee",
        "₹25L invoice volume",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label options",
      ],
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscription Plans</CardTitle>
        <p className="text-gray-600">Choose the plan that works best for you</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
              relative border rounded-lg p-6
              ${plan.current ? "border-blue-500 bg-blue-50" : "border-gray-200"}
              ${plan.popular ? "border-green-500" : ""}
            `}
            >
              {plan.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-500">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}

              {plan.current && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500">Current Plan</Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{plan.description}</p>

                {plan.current && plan.remaining && (
                  <p className="text-sm text-blue-600 mt-2">{plan.remaining} transactions remaining</p>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="w-full" variant={plan.current ? "outline" : "default"} disabled={plan.current}>
                {plan.current ? "Current Plan" : "Upgrade Now"}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
