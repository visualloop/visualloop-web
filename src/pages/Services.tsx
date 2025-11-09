import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { GradientMesh } from '@/components/ui/gradient-mesh'
import { cn } from '@/lib/utils'
import type { Service } from '@/types/project'

const services: Service[] = [
  {
    title: 'Pre-Production',
    description: 'Planning, scripting, storyboarding, location scouting, and production coordination.'
  },
  {
    title: 'Cinematography',
    description: 'On-set filming with professional equipment, lighting, and camera work.'
  },
  {
    title: 'Post-Production',
    description: 'Editing, color grading, sound design, and final delivery in multiple formats.'
  }
]

export function Services() {
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 text-foreground tracking-tighter">
              Services
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              Full-cycle production from concept to delivery
            </p>
            <div className="h-1 w-24 bg-foreground mx-auto"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className={cn(
                  'hover:border-border/80 hover:shadow-lg transition-all duration-300 ease-in-out',
                  'focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background',
                  'bg-card/80 backdrop-blur-sm group'
                )}
              >
                <CardHeader>
                  <div className="text-4xl font-bold text-foreground/20 group-hover:text-foreground/40 transition-colors mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              className="h-12 md:h-14 rounded-full cursor-pointer px-8 md:px-10"
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

