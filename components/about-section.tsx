import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/professional-photographer-portrait-black-and-white.jpg"
            alt="Will Barbezan Portrait"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">ABOUT ME</h2>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">
              I'M A PHOTOGRAPHER
              <br />
              WILL BARBEZAN.
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I specialise in bridals, portraits and family photography, creating bold, creative photographs that stand
              out for their unique style.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I believe in the power of photography to capture the essence of special moments and freeze them in time.
              Based in the UK, I work with couples and families to create timeless memories that will be treasured for
              generations.
            </p>
          </div>

          <Button
            className="mt-8 bg-transparent border border-foreground hover:bg-accent hover:border-accent transition-all duration-300"
            size="lg"
          >
            BOOKING A PHOTOSHOOT
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
