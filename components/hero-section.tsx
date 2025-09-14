import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/romantic-black-and-white-wedding-couple-intimate-m.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          THE BEGINNING OF
          <br />A NEW STORY
        </h1>
        <Button
          className="mt-8 bg-transparent border border-foreground hover:bg-accent hover:border-accent transition-all duration-300"
          size="lg"
        >
          BOOKING A PHOTOSHOOT
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
