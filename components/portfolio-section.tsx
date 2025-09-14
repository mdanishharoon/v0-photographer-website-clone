import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PortfolioSection() {
  const portfolioItems = [
    {
      title: "MARIA",
      image: "/elegant-bridal-portrait-black-and-white.jpg",
    },
    {
      title: "STASYA",
      image: "/artistic-black-and-white-portrait.jpg",
    },
    {
      title: "JOHN & ALISHA",
      image: "/romantic-couple-wedding-photography.jpg",
    },
    {
      title: "ALAN & DEBRA",
      image: "/family-portrait-silhouette.jpg",
    },
    {
      title: "DIANA",
      image: "/fashion-portrait-photography.jpg",
    },
    {
      title: "JIONA",
      image: "/artistic-boudoir-photography.jpg",
    },
    {
      title: "OLIVIA",
      image: "/dramatic-portrait-lighting.jpg",
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">PORTFOLIO</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {portfolioItems.map((item, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4">
                <h3 className="text-white font-semibold text-sm tracking-wider">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button
          className="bg-transparent border border-foreground hover:bg-accent hover:border-accent transition-all duration-300"
          size="lg"
        >
          SEE MORE
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
