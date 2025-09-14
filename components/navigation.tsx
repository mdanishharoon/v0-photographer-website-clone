"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold tracking-wider">WB</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#portfolio" className="text-foreground hover:text-accent transition-colors">
              PORTFOLIO
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              ABOUT ME
            </a>
            <a href="#pricing" className="text-foreground hover:text-accent transition-colors">
              PRICE AND SERVICE
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              BOOKING
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a href="#portfolio" className="block px-3 py-2 text-foreground hover:text-accent transition-colors">
                PORTFOLIO
              </a>
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-accent transition-colors">
                ABOUT ME
              </a>
              <a href="#pricing" className="block px-3 py-2 text-foreground hover:text-accent transition-colors">
                PRICE AND SERVICE
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-accent transition-colors">
                BOOKING
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
