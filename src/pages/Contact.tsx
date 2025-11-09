import { ContactForm } from '@/components/forms/ContactForm'
import { GradientMesh } from '@/components/ui/gradient-mesh'

export function Contact() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <GradientMesh
          colors={["#000000", "#1a1a2e", "#16213e"]}
          distortion={4}
          swirl={0.3}
          speed={0.8}
          scale={1.5}
          rotation={45}
          waveAmp={0.1}
          waveFreq={6.0}
          waveSpeed={0.2}
          grain={0.03}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-28 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 text-foreground tracking-tighter">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-xl mx-auto">
              Get in touch to discuss your next project
            </p>
            <div className="h-1 w-24 bg-foreground mx-auto"></div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 sm:p-8 lg:p-10">
            <ContactForm />
          </div>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground mb-6">Connect with us:</p>
            <div className="flex gap-6 justify-center">
              {['Instagram', 'YouTube', 'LinkedIn'].map((platform) => (
                <button
                  key={platform}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded-md px-4 py-2 text-sm font-medium"
                  aria-label={`Visit our ${platform} page`}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

