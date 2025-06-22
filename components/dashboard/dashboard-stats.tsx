import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Clock, TrendingUp, FileText } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      title: "Total Advanced",
      value: "₹2,45,000",
      change: "+12% from last month",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Pending Invoices",
      value: "8",
      change: "₹1,25,000 total value",
      icon: FileText,
      color: "text-blue-600",
    },
    {
      title: "Avg. Payout Time",
      value: "2.5 hours",
      change: "45% faster than industry",
      icon: Clock,
      color: "text-purple-600",
    },
    {
      title: "Success Rate",
      value: "98.5%",
      change: "All payments processed",
      icon: TrendingUp,
      color: "text-orange-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
