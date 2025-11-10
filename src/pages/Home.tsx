import { useState, useEffect } from 'react'
import { GradientMesh } from '@/components/ui/gradient-mesh'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Project } from '@/types/project'

const showcaseProjects: Project[] = [
  { id: 7, title: 'TS JIJI - Lyrical Song', category: 'Music Video', thumbnail: '/posters/TS_JIJI_POSTER.webp', client: 'Visual Loop', genre: 'Music Video', description: 'Soulful lyrical song with emotional storytelling' },
  { id: 8, title: 'ALTER - Alternative Music', category: 'Music Video', thumbnail: '/posters/ALTER_POSTER.webp', client: 'Visual Loop', genre: 'Music Video', description: 'Alternative music video with unique visual style' },
  { id: 9, title: 'Marketing Thumbnail Final', category: 'Commercial', thumbnail: '/posters/MKT_Thumbnail_finall1.webp', client: 'Visual Loop', genre: 'Commercial', description: 'Professional marketing and promotional content' },
  { id: 10, title: 'KIRANA - Brand Story', category: 'Corporate', thumbnail: '/posters/KIRANA_20250810164213.webp', client: 'Visual Loop', genre: 'Corporate', description: 'Brand storytelling for KIRANA products' },
  { id: 11, title: 'Social Media Content', category: 'Digital Content', thumbnail: '/posters/380514374_862344365604407_6172203292596849654_n.webp', client: 'Visual Loop', genre: 'Digital Content', description: 'Engaging social media content creation' },
  { id: 12, title: 'Creative Visual Story', category: 'Short Film', thumbnail: '/posters/332496630_766824294787603_8908340302102459593_n.webp', client: 'Visual Loop', genre: 'Short Film', description: 'Creative visual storytelling with artistic direction' },
  { id: 13, title: 'Professional Photography', category: 'Photography', thumbnail: '/posters/316768516_2140921719630767_643034833981839033_n.webp', client: 'Visual Loop', genre: 'Photography', description: 'Professional photography and visual content' },
  { id: 14, title: 'Creative Design Work', category: 'Design', thumbnail: '/posters/029cb452-2a0c-4a46-91f9-bc9fcdcdf6d9.webp', client: 'Visual Loop', genre: 'Design', description: 'Creative design and visual arts showcase' },
  { id: 15, title: 'Kitne Saal - Musical Journey', category: 'Music Video', thumbnail: '/posters/POSTER_KITNE_SAAL.webp', client: 'Visual Loop', genre: 'Music Video', description: 'Musical journey through time and memories' },
]

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Section with Gradient Mesh Background */}
      <div className="h-screen flex items-center justify-center relative">
        {/* Animated Gradient Mesh Background */}
        <GradientMesh
          colors={["#000000", "#1a1a2e", "#16213e"]}
          distortion={5}
          swirl={0.5}
          speed={1.0}
          scale={1.2}
          rotation={90}
          waveAmp={0.15}
          waveFreq={8.0}
          waveSpeed={0.3}
          grain={0.04}
        />

        {/* Hero Content */}
        <div className="flex flex-col text-center relative z-10 px-4 sm:px-6 lg:px-8">
          {/* Logo Placeholder */}
          <div className="mb-8">
            {/* <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Visual Loop
            </h1> */}
          </div>

          {/* Main Heading */}
          <h1 className="font-extrabold pt-4 text-foreground mix-blend-overlay tracking-tighter text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-6">
            Crafting <br /> Stories in Motion
          </h1>

          {/* Description and CTA */}
          <div className="space-y-6 z-10 pt-8 flex justify-center items-center flex-col text-center max-w-2xl mx-auto">
            <p className="text-foreground/90 w-full max-w-lg font-light text-base sm:text-lg md:text-xl">
              Professional videography and post-production studio specializing in cinematic storytelling, music videos, short films, commercials, and event highlights.
            </p>
            {/* <div className="flex gap-3 mt-6 flex-wrap justify-center">
              <Button
                variant="default"
                size="lg"
                className="h-12 md:h-14 rounded-full cursor-pointer px-8 md:px-10"
              >
                Watch Showreel
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 md:h-14 cursor-pointer rounded-full px-8 md:px-10"
              >
                Book a Shoot
              </Button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Hero Video Area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-24">
        {/* <div className="max-w-6xl mx-auto aspect-video bg-card border border-border rounded-lg overflow-hidden">
          <img
            src="/posters/MKT_Thumbnail_finall1.webp"
            alt="Visual Loop Showreel"
            className="w-full h-full object-cover"
          />
        </div> */}
      </div>

      {/* Project Showcase Carousel */}
      <div className="relative w-full py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-foreground tracking-tighter">
              Project Showcase
            </h3>
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: 3 }, (_, slideIndex) => {
                    const startIndex = slideIndex === 2 ? 6 : slideIndex * 3
                    const endIndex = slideIndex === 2 ? showcaseProjects.length : startIndex + 3
                    const slideProjects = showcaseProjects.slice(startIndex, endIndex)

                    if (slideProjects.length === 0) return null

                    return (
                      <div key={slideIndex} className="flex-shrink-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {slideProjects.map((project) => (
                          <div
                            key={project.id}
                            className="group cursor-pointer"
                          >
                            <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden mb-4 group-hover:scale-105 transition-all duration-300">
                              <img
                                src={project.thumbnail || '/posters/TS_JIJI_POSTER.webp'}
                                alt={project.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                onError={(e) => {
                                  const fallbackImages = [
                                    '/posters/TS_JIJI_POSTER.webp',
                                    '/posters/POSTER_KITNE_SAAL.webp',
                                    '/posters/MKT_Thumbnail_finall1.webp'
                                  ]
                                  const randomFallback = fallbackImages[Math.floor(Math.random() * fallbackImages.length)]
                                  e.currentTarget.src = randomFallback
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Navigation Arrow */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-background transition-all duration-300 group border border-border z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5 text-foreground group-hover:text-primary transition-colors duration-300" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: 3 }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      'w-3 h-3 rounded-full transition-all duration-300',
                      index === currentSlide
                        ? 'bg-primary scale-125'
                        : 'bg-muted-foreground/50 hover:bg-muted-foreground'
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

