import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, DollarSign, FileText, Clock } from "lucide-react"

export function UsageStats() {
  const stats = [
    {
      title: "Transactions Used",
      current: 2,
      total: 5,
      icon: FileText,
      color: "text-blue-600",
    },
    {
      title: "Volume Processed",
      current: 77000,
      total: 1000000,
      icon: DollarSign,
      color: "text-green-600",
      format: "currency",
    },
    {
      title: "Avg Processing Time",
      current: 2.5,
      total: 48,
      icon: Clock,
      color: "text-purple-600",
      format: "hours",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Usage Statistics
        </CardTitle>
        <p className="text-gray-600">Your current usage and limits</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.title} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  <span className="text-sm font-medium">{stat.title}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>
                    {stat.format === "currency"
                      ? `₹${stat.current.toLocaleString("en-IN")}`
                      : stat.format === "hours"
                        ? `${stat.current}h`
                        : stat.current}
                  </span>
                  <span className="text-gray-500">
                    {stat.format === "currency"
                      ? `₹${stat.total.toLocaleString("en-IN")}`
                      : stat.format === "hours"
                        ? `${stat.total}h limit`
                        : `of ${stat.total}`}
                  </span>
                </div>
                <Progress value={(stat.current / stat.total) * 100} className="h-2" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
