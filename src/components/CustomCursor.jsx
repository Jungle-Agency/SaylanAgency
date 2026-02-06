import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = (e) => {
      if (e.target.closest('a, button, [data-cursor="hover"]')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e) => {
      if (e.target.closest('a, button, [data-cursor="hover"]')) {
        setIsHovering(false)
      }
    }

    const handleMouseOut = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null
  }

  return (
    <div className={`cursor ${isHovering ? 'hover' : ''}`} style={{ opacity: isVisible ? 1 : 0 }}>
      <div
        className="cursor-dot"
        style={{ left: position.x, top: position.y, position: 'fixed' }}
      />
    </div>
  )
}
