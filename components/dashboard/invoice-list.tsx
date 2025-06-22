"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Eye } from "lucide-react"

interface Invoice {
  id: string
  clientName: string
  amount: number
  status: "pending" | "verified" | "advanced" | "paid"
  uploadDate: string
  dueDate: string
}

interface InvoiceListProps {
  onSelectInvoice: (invoice: Invoice) => void
}

export function InvoiceList({ onSelectInvoice }: InvoiceListProps) {
  const invoices: Invoice[] = [
    {
      id: "INV-001",
      clientName: "Tech Startup Inc.",
      amount: 45000,
      status: "verified",
      uploadDate: "2024-01-15",
      dueDate: "2024-02-15",
    },
    {
      id: "INV-002",
      clientName: "Design Agency Ltd.",
      amount: 32000,
      status: "advanced",
      uploadDate: "2024-01-10",
      dueDate: "2024-02-10",
    },
    {
      id: "INV-003",
      clientName: "E-commerce Co.",
      amount: 28000,
      status: "pending",
      uploadDate: "2024-01-12",
      dueDate: "2024-02-12",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-green-100 text-green-800"
      case "advanced":
        return "bg-blue-100 text-blue-800"
      case "paid":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-yellow-100 text-yellow-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Your Invoices
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {invoices.map((invoice) => (
            <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold">{invoice.clientName}</h3>
                  <Badge className={getStatusColor(invoice.status)}>{invoice.status}</Badge>
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  ₹{invoice.amount.toLocaleString("en-IN")} • Due: {invoice.dueDate}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                {invoice.status === "verified" && (
                  <Button size="sm" onClick={() => onSelectInvoice(invoice)}>
                    Get Advance
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
