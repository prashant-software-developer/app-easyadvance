import { Badge } from "@/components/ui/badge"

export function TrustSection() {
  const integrations = ["QuickBooks", "PayPal", "FreshBooks", "Stripe", "Razorpay"]

  const testimonials = [
    {
      quote: "I stopped worrying about rent. Cash Flow Companion gave me the freedom to focus on my work.",
      author: "Priya S., Graphic Designer",
    },
    {
      quote: "Finally, a solution that understands freelancers. Got paid the same day I uploaded my invoice.",
      author: "Rahul M., Web Developer",
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Integrations */}
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Trusted Integrations</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {integrations.map((integration) => (
              <Badge key={integration} variant="outline" className="px-4 py-2">
                {integration}
              </Badge>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-12">What Freelancers Say</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <blockquote className="text-gray-700 italic">"{testimonial.quote}"</blockquote>
                <cite className="mt-4 block text-sm font-semibold text-gray-900">— {testimonial.author}</cite>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
