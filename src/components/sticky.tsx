import React, { useEffect, useRef, ReactNode } from 'react'
import { gsap } from 'gsap'

interface Props {
  children: ReactNode
}

const Sticky: React.FC<Props> = ({ children }) => {
  const magnetic = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentMagnetic = magnetic.current;
    
    const xTo = gsap.quickTo(currentMagnetic, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)'
    })
    const yTo = gsap.quickTo(currentMagnetic, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)'
    })

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { height, width, left, top } =
        currentMagnetic?.getBoundingClientRect() || {
          height: 0,
          width: 0,
          left: 0,
          top: 0
        }
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      xTo(x)
      yTo(y)
    }

    const handleMouseLeave = () => {
      xTo(0)
      yTo(0)
    }

    currentMagnetic?.addEventListener('mousemove', handleMouseMove)
    currentMagnetic?.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      currentMagnetic?.removeEventListener('mousemove', handleMouseMove)
      currentMagnetic?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return React.cloneElement(children as React.ReactElement, { ref: magnetic })
}

export default Sticky
