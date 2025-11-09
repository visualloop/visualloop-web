import { useEffect } from 'react'

export function useTheme() {
  useEffect(() => {
    // Always set dark theme
    const root = document.documentElement
    root.classList.remove('light')
    root.classList.add('dark')
    // Set color-scheme for browser UI
    root.style.colorScheme = 'dark'
  }, [])
}

