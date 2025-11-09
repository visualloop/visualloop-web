import { useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Portfolio } from '@/pages/Portfolio'
import { Services } from '@/pages/Services'
import { Contact } from '@/pages/Contact'
import { useTheme } from '@/lib/use-theme'
import type { Page } from '@/types/project'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useTheme() // Initialize theme hook

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'portfolio':
        return <Portfolio />
      case 'services':
        return <Services />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  )
}

export default App

