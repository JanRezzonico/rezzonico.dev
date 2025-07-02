import { useState, useEffect } from 'react'

// Breakpoints object for reference
const breakpoints: { [key: string]: number } = {
  sm: 640, // 40rem
  md: 768, // 48rem
  lg: 1024, // 64rem
  xl: 1280, // 80rem
  '2xl': 1536, // 96rem
}

type Size = number | keyof typeof breakpoints

const useWindowSize = (size: Size): boolean => {
  const [isMatch, setIsMatch] = useState(false)
  const [resizeTimeout, setResizeTimeout] = useState<NodeJS.Timeout | null>(
    null
  )

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const threshold = typeof size === 'string' ? breakpoints[size] : size
      setIsMatch(width >= threshold)
    }

    handleResize()

    const debounceResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }
      const timeoutId = setTimeout(handleResize, 100) // 100ms debounce
      setResizeTimeout(timeoutId)
    }

    window.addEventListener('resize', debounceResize)
    return () => {
      window.removeEventListener('resize', debounceResize)
      if (resizeTimeout) {
        clearTimeout(resizeTimeout)
      }
    }
  }, [size, resizeTimeout])

  return isMatch
}

export default useWindowSize
