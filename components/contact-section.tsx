import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-muted-foreground mb-2">WANT WORK WITH ME?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            CONTACT
            <br />
            ME
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Choose idea</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select photography type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding Photography</SelectItem>
                  <SelectItem value="bridal">Bridal Portraits</SelectItem>
                  <SelectItem value="family">Family Photography</SelectItem>
                  <SelectItem value="individual">Individual Portraits</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <Input placeholder="Your full name" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input type="email" placeholder="your.email@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <Input type="tel" placeholder="+44 7XXX XXXXXX" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Type your message</label>
              <Textarea
                placeholder="Tell me about your vision, preferred dates, and any special requirements..."
                rows={5}
              />
            </div>

            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 transition-all duration-300" size="lg">
              SEND A REQUEST
            </Button>
          </form>
        </div>

        <div className="relative">
          <img src="/artistic-portrait-photography-dramatic-lighting.jpg" alt="Contact" className="w-full h-[700px] object-cover rounded-lg" />
        </div>
      </div>
    </section>
  )
}
