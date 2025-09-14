import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-20 px-4 max-w-7xl mx-auto text-center border-t border-border">
      <div className="mb-8">
        <h3 className="text-3xl font-bold mb-2">
          Will
          <br />
          Barbezan
        </h3>
      </div>

      <div className="flex justify-center space-x-8 mb-8 text-sm">
        <a href="#" className="hover:text-accent transition-colors">
          MAIN PAGE
        </a>
        <a href="#about" className="hover:text-accent transition-colors">
          ABOUT ME
        </a>
        <a href="#pricing" className="hover:text-accent transition-colors">
          SERVICE AND PRICE
        </a>
        <a href="#contact" className="hover:text-accent transition-colors">
          BOOKING
        </a>
      </div>

      <Button
        className="mb-8 bg-transparent border border-foreground hover:bg-accent hover:border-accent transition-all duration-300"
        size="lg"
      >
        CONTACT ME
      </Button>

      <div className="flex justify-center space-x-6 mb-8">
        <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
          WHATSAPP
        </a>
        <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
          TELEGRAM
        </a>
        <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
          FACEBOOK
        </a>
        <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
          INSTAGRAM
        </a>
      </div>

      <div className="text-xs text-muted-foreground space-y-1">
        <p>Personal data processing policy</p>
        <p>© 2024 All rights reserved</p>
        <p>Design by Will Barbezan</p>
      </div>
    </footer>
  )
}
