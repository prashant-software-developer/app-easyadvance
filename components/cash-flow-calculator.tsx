"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator } from "lucide-react"

export function CashFlowCalculator() {
  const [invoiceAmount, setInvoiceAmount] = useState("")
  const [results, setResults] = useState<{
    instant: number
    delayed: number
    fee: number
  } | null>(null)

  const calculateAdvance = () => {
    const amount = Number.parseFloat(invoiceAmount)
    if (!amount || amount <= 0) return

    const instantAdvance = amount * 0.85
    const delayedAdvance = amount * 0.97
    const fee = Math.max(5, amount * 0.01)

    setResults({
      instant: instantAdvance,
      delayed: delayedAdvance,
      fee: fee,
    })
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Cash Flow Calculator</h2>
          <p className="mt-4 text-lg text-gray-600">See how much you can earn today from your pending invoices</p>
        </div>

        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Calculate Your Advance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="invoice-amount">Invoice Amount (₹)</Label>
              <Input
                id="invoice-amount"
                type="number"
                placeholder="Enter your invoice amount"
                value={invoiceAmount}
                onChange={(e) => setInvoiceAmount(e.target.value)}
                className="mt-2"
              />
            </div>

            <Button onClick={calculateAdvance} className="w-full">
              Calculate My Advance
            </Button>

            {results && (
              <div className="space-y-4 pt-4 border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900">Instant (85%)</h3>
                    <p className="text-2xl font-bold text-blue-600">₹{results.instant.toLocaleString("en-IN")}</p>
                    <p className="text-sm text-blue-700">Available immediately</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900">48 Hours (97%)</h3>
                    <p className="text-2xl font-bold text-green-600">₹{results.delayed.toLocaleString("en-IN")}</p>
                    <p className="text-sm text-green-700">Available in 48 hours</p>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-600">
                  Fee: ₹{results.fee.toFixed(2)} + processing charges
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
