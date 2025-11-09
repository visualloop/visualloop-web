export type Page = 'home' | 'portfolio' | 'services' | 'about' | 'contact'

export interface Project {
  id: number
  title: string
  client: string
  genre: string
  description: string
  videoUrl?: string
  thumbnail?: string
  youtubeId?: string
  duration?: string
  views?: string
  rating?: number
  category?: string
}

export interface Service {
  title: string
  description: string
}

