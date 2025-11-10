import { useState } from 'react'
import { Dialog, DialogHeader, DialogTitle, DialogClose, DialogContent } from '@/components/ui/Dialog'
import { GradientMesh } from '@/components/ui/gradient-mesh'
import { Card, CardContent } from '@/components/ui/Card'
import { Play, Eye } from 'lucide-react'
import type { Project } from '@/types/project'

// Helper function to get YouTube thumbnail
const getYouTubeThumbnail = (youtubeId?: string, fallback?: string): string => {
  if (youtubeId) {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
  }
  return fallback || '/posters/TS_JIJI_POSTER.webp'
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'ACHU EBE BI TU || Lyrical Song || Soulful theme song of FIVE YEARS',
    client: 'Visual Loop',
    genre: 'Lyrical Song',
    category: 'Lyrical Song',
    description: 'A soulful lyrical song celebrating five years of memories and emotions',
    youtubeId: '-GPPsDpceuQ',
    duration: '4:32',
    views: '7.6K',
    rating: 4.9
  },
  {
    id: 2,
    title: 'ALTER | अल्टर | Short Film | Amitabh Patra',
    client: 'Visual Loop',
    genre: 'Short Film',
    category: 'Short Film',
    description: 'A compelling short film directed by Amitabh Patra',
    youtubeId: 'IzCDH3R8Q0Q',
    duration: '8:15',
    views: '1.8K',
    rating: 4.8
  },
  {
    id: 3,
    title: 'MAHARAJ - Mama Kare Twerk (Official Music Video) | Hindi Rap | MKT',
    client: 'Visual Loop',
    genre: 'Music Video',
    category: 'Music Video',
    description: 'Official Hindi rap music video featuring MAHARAJ',
    youtubeId: 'rgMg8XL9qVw',
    duration: '3:45',
    views: '8.2K',
    rating: 4.9
  },
  {
    id: 4,
    title: 'Baja Mora Bhai Re || Official Video || Subham Riku || Odia Rap Song',
    client: 'Visual Loop',
    genre: 'Music Video',
    category: 'Music Video',
    description: 'Official Odia rap song video featuring Subham Riku',
    youtubeId: 'FPhNYXiSwzs',
    duration: '6:20',
    views: '10.2K',
    rating: 4.7
  },
  {
    id: 5,
    title: 'Dr Smitashree Das - My First YouTube Video | Channel Introduction',
    client: 'Visual Loop',
    genre: 'Introduction',
    category: 'Introduction',
    description: 'Dr. Smitashree Das introduces her YouTube channel',
    youtubeId: 'GF8_Qr4KKvI',
    duration: '2:45',
    views: '5.7K',
    rating: 4.9
  },
  {
    id: 6,
    title: "Gayatri & Vikram's Engagement Sangeet Highlights",
    client: 'Visual Loop',
    genre: 'Wedding',
    category: 'Wedding',
    description: "Beautiful engagement sangeet highlights from Gayatri & Vikram's celebration",
    youtubeId: 'e4tFcFYZEm0',
    duration: '4:15',
    views: '2.5K',
    rating: 4.6
  },
]

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openVideoModal = (youtubeId: string) => {
    setSelectedVideo(youtubeId)
    setIsModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
  }

  return (
    <>
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
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 text-foreground tracking-tighter">
                Portfolio
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
                Explore our collection of cinematic projects
              </p>
              <div className="h-1 w-24 bg-foreground mx-auto"></div>
            </div>

            {/* Featured Projects Grid */}
            <div className="mb-16 sm:mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {featuredProjects.map((project) => (
                  <Card key={project.id} className="group overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border-border/50">
                    <div className="relative aspect-video overflow-hidden bg-card">
                      <img
                        src={getYouTubeThumbnail(project.youtubeId, project.thumbnail)}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to hqdefault if maxresdefault fails
                          if (project.youtubeId) {
                            e.currentTarget.src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`
                          } else if (project.thumbnail) {
                            e.currentTarget.src = project.thumbnail
                          } else {
                            e.currentTarget.src = '/posters/TS_JIJI_POSTER.webp'
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 flex items-center justify-center transition-all duration-300">
                        <button
                          onClick={() => project.youtubeId && openVideoModal(project.youtubeId)}
                          className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer border border-white/30 shadow-2xl hover:shadow-white/20 group/play"
                          aria-label={`Play ${project.title}`}
                        >
                          <Play className="h-8 w-8 text-white group-hover/play:scale-110 transition-transform duration-300" />
                        </button>
                      </div>
                      {project.duration && (
                        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                          {project.duration}
                        </div>
                      )}
                      {project.category && (
                        <div className="absolute bottom-3 left-3 bg-primary/90 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                          {project.category}
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <h4 className="font-semibold text-sm sm:text-base mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2 text-foreground">
                        {project.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      {project.views && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Eye className="h-3 w-3" />
                          {project.views}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal for YouTube */}
      {isModalOpen && selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeVideoModal}
        >
          <div
            className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] bg-background rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Close video"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
                title="Video Player"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <>
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogClose onClick={() => setSelectedProject(null)} />
            </DialogHeader>
            <DialogContent>
              <div className="aspect-video bg-card rounded-lg overflow-hidden mb-4">
                {selectedProject.thumbnail ? (
                  <img
                    src={selectedProject.thumbnail}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-muted-foreground/70 text-sm">Video Player Placeholder</p>
                  </div>
                )}
              </div>
              <p className="text-muted-foreground mb-2">Client: {selectedProject.client}</p>
              <p className="text-muted-foreground mb-4">Genre: {selectedProject.genre}</p>
              <p className="text-foreground/90">{selectedProject.description}</p>
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  )
}

