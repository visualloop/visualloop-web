/**
 * SEO utility functions for managing document head metadata
 */

export interface SEOData {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  siteName?: string
}

const defaultSEO: SEOData = {
  title: 'Visual Loop - Cinematic Studio',
  description: 'Professional videography and post-production studio specializing in cinematic storytelling, music videos, short films, commercials, and event highlights.',
  keywords: 'videography, post-production, cinematic storytelling, music videos, short films, commercials, event highlights, video production, film production',
  image: '/vl-logo.svg',
  url: typeof window !== 'undefined' ? window.location.origin : '',
  type: 'website',
  siteName: 'Visual Loop'
}

/**
 * Updates the document title
 */
export function updateTitle(title: string): void {
  if (typeof document !== 'undefined') {
    document.title = title
  }
}

/**
 * Updates or creates a meta tag
 */
export function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name'): void {
  if (typeof document === 'undefined') return

  const selector = attribute === 'name' ? `meta[name="${name}"]` : `meta[property="${name}"]`
  let meta = document.querySelector(selector) as HTMLMetaElement

  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attribute, name)
    document.head.appendChild(meta)
  }

  meta.setAttribute('content', content)
}

/**
 * Updates or creates a link tag
 */
export function updateLinkTag(rel: string, href: string): void {
  if (typeof document === 'undefined') return

  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement

  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', rel)
    document.head.appendChild(link)
  }

  link.setAttribute('href', href)
}

/**
 * Sets comprehensive SEO metadata for a page
 */
export function setSEO(data: SEOData): void {
  const seo = { ...defaultSEO, ...data }
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://visualloop.in'

  // Convert relative URLs to absolute URLs
  let fullUrl = seo.url || baseUrl
  if (fullUrl.startsWith('/')) {
    fullUrl = `${baseUrl}${fullUrl}`
  } else if (!fullUrl.startsWith('http')) {
    fullUrl = `${baseUrl}/${fullUrl}`
  }

  // Ensure image URL is absolute
  let imageUrl = seo.image || defaultSEO.image!
  if (imageUrl.startsWith('/')) {
    imageUrl = `${baseUrl}${imageUrl}`
  } else if (!imageUrl.startsWith('http')) {
    imageUrl = `${baseUrl}/${imageUrl}`
  }

  // Update title
  if (seo.title) {
    updateTitle(seo.title)
  }

  // Basic meta tags
  if (seo.description) {
    updateMetaTag('description', seo.description)
  }

  if (seo.keywords) {
    updateMetaTag('keywords', seo.keywords)
  }

  // Open Graph tags
  updateMetaTag('og:title', seo.title || defaultSEO.title!, 'property')
  updateMetaTag('og:description', seo.description || defaultSEO.description!, 'property')
  updateMetaTag('og:image', imageUrl, 'property')
  updateMetaTag('og:url', fullUrl, 'property')
  updateMetaTag('og:type', seo.type || 'website', 'property')
  updateMetaTag('og:site_name', seo.siteName || defaultSEO.siteName!, 'property')

  // Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image', 'name')
  updateMetaTag('twitter:title', seo.title || defaultSEO.title!, 'name')
  updateMetaTag('twitter:description', seo.description || defaultSEO.description!, 'name')
  updateMetaTag('twitter:image', imageUrl, 'name')

  // Canonical URL
  updateLinkTag('canonical', fullUrl)
}

/**
 * Page-specific SEO configurations
 */
export const pageSEO: Record<string, SEOData> = {
  home: {
    title: 'Visual Loop - Cinematic Studio | Professional Videography & Post-Production',
    description: 'Professional videography and post-production studio specializing in cinematic storytelling, music videos, short films, commercials, and event highlights.',
    keywords: 'videography, post-production, cinematic storytelling, music videos, short films, commercials, event highlights, video production, film production, Visual Loop',
    url: '/',
  },
  about: {
    title: 'About Us - Visual Loop | Cinematic Studio',
    description: 'Learn about Visual Loop, a professional videography and post-production studio. We provide full-cycle production from pre-production planning to post-production editing, color grading, and sound design.',
    keywords: 'about Visual Loop, video production company, videography studio, post-production services, film production team',
    url: '/about',
  },
  services: {
    title: 'Services - Visual Loop | Pre-Production, Cinematography & Post-Production',
    description: 'Full-cycle production services including pre-production planning, on-set cinematography, and post-production editing, color grading, and sound design.',
    keywords: 'video production services, pre-production, cinematography, post-production, video editing, color grading, sound design, film production services',
    url: '/services',
  },
  portfolio: {
    title: 'Portfolio - Visual Loop | Our Work & Projects',
    description: 'Explore our portfolio of cinematic projects including music videos, short films, commercials, and event highlights. See our creative storytelling in action.',
    keywords: 'Visual Loop portfolio, video production portfolio, music videos, short films, commercials, event highlights, video projects',
    url: '/portfolio',
  },
  contact: {
    title: 'Contact Us - Visual Loop | Get in Touch',
    description: 'Get in touch with Visual Loop for your next video production project. Contact us for quotes, consultations, and project inquiries.',
    keywords: 'contact Visual Loop, video production quote, film production consultation, videography services contact',
    url: '/contact',
  },
}

