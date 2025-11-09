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
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Visual Loop. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-4 sm:gap-6" aria-label="Footer navigation">
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
    </footer>
  )
}

