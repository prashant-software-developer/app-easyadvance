import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Receipt } from "lucide-react"

export function BillingHistory() {
  const transactions = [
    {
      id: "TXN-001",
      date: "2024-01-15",
      description: "Invoice advance - Tech Startup Inc.",
      amount: 1,
      status: "completed",
      type: "transaction",
    },
    {
      id: "TXN-002",
      date: "2024-01-10",
      description: "Invoice advance - Design Agency Ltd.",
      amount: 1,
      status: "completed",
      type: "transaction",
    },
    {
      id: "SUB-001",
      date: "2024-01-01",
      description: "Trial activation",
      amount: 0,
      status: "completed",
      type: "subscription",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Receipt className="h-5 w-5" />
          Billing History
        </CardTitle>
        <p className="text-gray-600">View all your transactions and payments</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-medium">{transaction.description}</h3>
                  <Badge className={getStatusColor(transaction.status)}>{transaction.status}</Badge>
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  {transaction.date} • {transaction.id}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="font-semibold">{transaction.amount === 0 ? "Free" : `₹${transaction.amount}`}</div>
                  <div className="text-xs text-gray-500 capitalize">{transaction.type}</div>
                </div>

                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Button variant="outline">Load More Transactions</Button>
        </div>
      </CardContent>
    </Card>
  )
}
