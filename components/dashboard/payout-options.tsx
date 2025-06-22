"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Zap, X } from "lucide-react"

interface PayoutOptionsProps {
  invoice: any
  onClose: () => void
}

export function PayoutOptions({ invoice, onClose }: PayoutOptionsProps) {
  const instantAmount = invoice.amount * 0.85
  const delayedAmount = invoice.amount * 0.97
  const fee = Math.max(5, invoice.amount * 0.01)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Payout Options</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-sm text-gray-600">Choose your payout option for {invoice.clientName}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Instant Option */}
        <div className="border rounded-lg p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              <h3 className="font-semibold">Instant Payout</h3>
            </div>
            <Badge variant="outline">85%</Badge>
          </div>

          <div className="text-2xl font-bold text-green-600">₹{instantAmount.toLocaleString("en-IN")}</div>

          <div className="text-sm text-gray-600">
            <div>Fee: ₹{fee.toFixed(2)}</div>
            <div>Available: Immediately</div>
          </div>

          <Button className="w-full">Get ₹{instantAmount.toLocaleString("en-IN")} Now</Button>
        </div>

        {/* 48 Hour Option */}
        <div className="border rounded-lg p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <h3 className="font-semibold">48 Hour Payout</h3>
            </div>
            <Badge variant="outline">97%</Badge>
          </div>

          <div className="text-2xl font-bold text-blue-600">₹{delayedAmount.toLocaleString("en-IN")}</div>

          <div className="text-sm text-gray-600">
            <div>Fee: ₹{fee.toFixed(2)}</div>
            <div>Available: Within 48 hours</div>
          </div>

          <Button variant="outline" className="w-full">
            Get ₹{delayedAmount.toLocaleString("en-IN")} in 48hrs
          </Button>
        </div>

        <div className="text-xs text-gray-500 text-center">Remaining amount will be released when client pays</div>
      </CardContent>
    </Card>
  )
}
