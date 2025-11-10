import { useEffect } from 'react'
import { setSEO, pageSEO, type SEOData } from '@/utils/seo'
import type { Page } from '@/types/project'

/**
 * Hook to manage SEO metadata for different pages
 */
export function useSEO(page: Page, customSEO?: Partial<SEOData>) {
    useEffect(() => {
        const pageData = pageSEO[page] || pageSEO.home
        const seoData: SEOData = {
            ...pageData,
            ...customSEO,
        }

        setSEO(seoData)
    }, [page, customSEO])
}

