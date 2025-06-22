"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { InvoiceUpload } from "@/components/dashboard/invoice-upload"
import { InvoiceList } from "@/components/dashboard/invoice-list"
import { PayoutOptions } from "@/components/dashboard/payout-options"

export default function DashboardPage() {
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null)
  const [showPayoutOptions, setShowPayoutOptions] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <DashboardStats />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <InvoiceUpload />
            <div className="mt-8">
              <InvoiceList
                onSelectInvoice={(invoice) => {
                  setSelectedInvoice(invoice)
                  setShowPayoutOptions(true)
                }}
              />
            </div>
          </div>

          <div>
            {showPayoutOptions && selectedInvoice && (
              <PayoutOptions invoice={selectedInvoice} onClose={() => setShowPayoutOptions(false)} />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
