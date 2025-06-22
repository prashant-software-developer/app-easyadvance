export function PricingComparison() {
  const methods = [
    {
      method: "Credit Cards",
      time: "Immediate",
      cost: "30–40% APR",
      stress: "😖",
      pros: ["Instant access"],
      cons: ["Extremely high interest", "Debt accumulation"],
    },
    {
      method: "PayPal Working Capital",
      time: "Days",
      cost: "3–5%",
      stress: "😐",
      pros: ["Reasonable rates"],
      cons: ["Still waiting days", "Limited availability"],
    },
    {
      method: "Cash Flow Companion",
      time: "Minutes–48 hrs",
      cost: "From ₹5 + 1%",
      stress: "😊",
      pros: ["Instant to 48hr options", "Transparent pricing", "No debt"],
      cons: ["New platform"],
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Cash Flow Companion?</h2>
          <p className="mt-4 text-lg text-gray-600">Compare your options for getting paid faster</p>
        </div>

        <div className="mt-16 overflow-hidden rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time to Get Paid
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stress Level
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {methods.map((method, index) => (
                <tr key={index} className={method.method === "Cash Flow Companion" ? "bg-blue-50" : ""}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{method.method}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{method.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{method.cost}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-2xl">{method.stress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
