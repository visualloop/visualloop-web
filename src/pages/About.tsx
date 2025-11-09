import { GradientMesh } from '@/components/ui/gradient-mesh'

export function About() {
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 text-foreground tracking-tighter">
              About Visual Loop
            </h1>
            <div className="h-1 w-24 bg-foreground mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-8 sm:space-y-10 text-lg sm:text-xl text-foreground/90">
            <p className="text-xl sm:text-2xl font-light leading-relaxed">
              Visual Loop is a professional videography and post-production studio specializing in cinematic storytelling, music videos, short films, commercials, and event highlights.
            </p>

            <p className="leading-relaxed">
              Our team provides full-cycle production — from pre-production planning and on-set cinematography to editing, color grading, and sound design.
            </p>

            {/* Quote Section */}
            <div className="relative py-8 sm:py-12">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-foreground via-foreground/50 to-foreground"></div>
              <blockquote className="pl-8 sm:pl-12 italic text-2xl sm:text-3xl font-light text-foreground leading-relaxed">
                "Emotion, precision, and storytelling in every frame."
              </blockquote>
            </div>

            <p className="leading-relaxed">
              We believe in crafting stories that resonate, combining technical expertise with creative vision to deliver compelling visual narratives.
            </p>

            {/* Values Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
              <div className="text-center p-6 rounded-lg bg-card/50 border border-border backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Creativity</h3>
                <p className="text-sm text-muted-foreground">Pushing boundaries with innovative storytelling</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-card/50 border border-border backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Precision</h3>
                <p className="text-sm text-muted-foreground">Meticulous attention to every detail</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-card/50 border border-border backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Passion</h3>
                <p className="text-sm text-muted-foreground">Dedicated to bringing visions to life</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

