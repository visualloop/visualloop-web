import { Youtube, Instagram } from 'lucide-react'
import type { Page } from '@/types/project'

interface FooterProps {
  onNavigate: (page: Page) => void
}

const navigation = [
  { id: 'home' as Page, label: 'Home' },
  { id: 'portfolio' as Page, label: 'Portfolio' },
  { id: 'services' as Page, label: 'Services' },
  { id: 'about' as Page, label: 'About' },
  { id: 'contact' as Page, label: 'Contact' }
] as const

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col gap-6 sm:gap-4">
          {/* Top Row: Navigation and Social Media */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-sm text-muted-foreground order-3 sm:order-1">
              © {currentYear} Visual Loop. All rights reserved.
            </p>
            <nav className="flex flex-wrap gap-4 sm:gap-6 justify-center order-2" aria-label="Footer navigation">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            {/* Social Media Links */}
            <div className="flex items-center gap-3 order-1 sm:order-3">
              <a
                href="https://www.youtube.com/@visualloopofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-md p-2"
                aria-label="Visit our YouTube channel"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/visualloopfilms/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-md p-2"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          {/* Bottom Row: Made with love */}
          <div className="flex justify-center sm:justify-end">
            <p className="text-sm text-muted-foreground/70">
              Made with ❤️ by{' '}
              <a
                href="https://trerons.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-md px-1 py-0.5 underline-offset-4 hover:underline"
              >
                Trerons
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

