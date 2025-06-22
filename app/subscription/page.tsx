import { SubscriptionPlans } from "@/components/subscription/subscription-plans"
import { UsageStats } from "@/components/subscription/usage-stats"
import { BillingHistory } from "@/components/subscription/billing-history"

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Subscription & Billing</h1>
          <p className="mt-2 text-gray-600">Manage your subscription and view billing history</p>
        </div>

        <div className="space-y-8">
          <UsageStats />
          <SubscriptionPlans />
          <BillingHistory />
        </div>
      </div>
    </div>
  )
}
