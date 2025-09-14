import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingSection() {
  const pricingTiers = [
    {
      title: "INDIVIDUAL | LITE",
      price: "200",
      features: [
        "Selection of references",
        "Consulting on choosing a location/studio",
        "Assistance in image selection/correction",
        "Assistance with posing",
        "All successful shots in the author's color correction",
        "5 photos in retouching",
        "Processing up to 7 days",
      ],
    },
    {
      title: "INDIVIDUAL | PREMIUM",
      price: "400",
      popular: true,
      features: [
        "Consulting on choosing a location/studio",
        "50 photos/make-up artist",
        "Writing ideas/shooting script",
        "Assistance with posing",
        "All successful shots in the author's color correction",
        "15 photos in retouching",
        "Processing up to 5 days",
      ],
    },
    {
      title: "COUPLE",
      price: "300",
      features: [
        "Consulting on choosing a location/studio",
        "Selection of references",
        "Writing ideas/shooting script",
        "Assistance with posing",
        "All successful shots in the author's color correction",
        "10 photos in retouching",
        "Processing up to 7 days",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">SERVICE & PRICE</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {pricingTiers.map((tier, index) => (
          <Card key={index} className={`relative ${tier.popular ? "border-accent" : ""}`}>
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  POPULAR
                </span>
              </div>
            )}

            <CardHeader className="text-center">
              <CardTitle className="text-lg font-semibold mb-4">{tier.title}</CardTitle>
              <div className="text-3xl font-bold">
                £{tier.price}
                <span className="text-sm font-normal text-muted-foreground"> | HOUR</span>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full mt-6 ${tier.popular ? "bg-accent hover:bg-accent/90" : "bg-transparent border border-foreground hover:bg-accent hover:border-accent"} transition-all duration-300`}
              >
                BOOK NOW
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
