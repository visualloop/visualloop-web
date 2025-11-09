"use client";
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Sheet, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/Sheet'
import type { Page } from '@/types/project'

interface NavbarProps {
  currentPage: Page
  onNavigate: (page: Page) => void
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

const navigation = [
  { id: 'home' as Page, label: 'Home' },
  { id: 'portfolio' as Page, label: 'Portfolio' },
  { id: 'services' as Page, label: 'Services' },
  { id: 'about' as Page, label: 'About' },
  { id: 'contact' as Page, label: 'Contact' }
] as const

export function Navbar({ currentPage, onNavigate, mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (page: Page) => {
    onNavigate(page)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header>
        <nav
          data-state={mobileMenuOpen ? 'active' : undefined}
          className={cn(
            'fixed z-50 w-full px-3 md:px-4 transition-colors duration-300',
            isScrolled ? 'border-transparent' : 'border-b border-border'
          )}
        >
          <div
            className={cn(
              'mx-auto mt-2 transition-all duration-300',
              isScrolled
                ? 'bg-background/95 max-w-5xl rounded-2xl border border-border backdrop-blur-xl px-3 shadow-lg'
                : 'bg-background/95'
            )}
          >
            <div className="relative flex flex-wrap items-center justify-between gap-3 py-3">
              {/* Logo */}
              <div className="flex w-full justify-between lg:w-auto">
                <button
                  onClick={() => handleNavigation('home')}
                  className="flex gap-2 sm:gap-3 items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1"
                  aria-label="Visual Loop - Go to home"
                >
                  <img
                    src="/vl-logo.svg"
                    alt="Visual Loop Logo"
                    className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 object-contain z-10 relative brightness-0 invert"
                  />
                  <span className="text-xl sm:text-2xl font-bold text-foreground tracking-tight z-10 relative">
                    Visual Loop
                  </span>
                </button>

                {/* Mobile Menu Button */}
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                    className="relative z-20 pr-4 block cursor-pointer p-2.5 lg:hidden focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-md"
                  >
                    <svg
                      className={cn(
                        'h-6 w-6 text-foreground transition-all duration-200 z-10 relative',
                        mobileMenuOpen && 'rotate-180 scale-0 opacity-0'
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg
                      className={cn(
                        'h-6 w-6 text-foreground absolute inset-0 m-auto transition-all duration-200 -rotate-180 scale-0 opacity-0 z-10',
                        mobileMenuOpen && 'rotate-0 scale-100 opacity-100'
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="absolute inset-0 m-auto hidden lg:block size-fit">
                <nav className="flex items-center gap-1" aria-label="Desktop navigation">
                  {navigation.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item.id)}
                      className={cn(
                        'inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-xs font-medium transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background z-10 relative',
                        currentPage === item.id
                          ? 'bg-accent text-accent-foreground font-semibold'
                          : 'text-foreground/90 hover:text-foreground hover:bg-accent/50'
                      )}
                      aria-current={currentPage === item.id ? 'page' : undefined}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>

            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Sheet (backup) */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetClose onClick={() => setMobileMenuOpen(false)} />
        </SheetHeader>
        <nav className="flex flex-col gap-2 px-6" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={cn(
                'text-left px-4 py-3 rounded-md text-base font-medium transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
                currentPage === item.id
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}
              aria-current={currentPage === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </Sheet>
    </>
  )
}

