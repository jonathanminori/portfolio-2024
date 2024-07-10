'use client'
import { useRef, useState, useEffect, RefObject, MouseEvent } from 'react'

const workSamples: { src: string; alt: string }[] = [
  { src: '../../img/work/kfc/vr/ingame-1.webp', alt: 'Example Image 1' },
  { src: '../../img/work/kfc/vr/ingame-2.webp', alt: 'Example Image 2' },
  { src: '../../img/work/kfc/vr/room-sketch.webp', alt: 'Example Image 3' },
  { src: '../../img/work/kfc/vr/ingame-4.webp', alt: 'Example Image 4' }
]

export default function Works() {
  const [steps, setSteps] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const refs = useRef<(HTMLImageElement | null)[]>([])

  useEffect(() => {
    refs.current = refs.current.slice(0, workSamples.length)
  }, [])

  const manageMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, movementX, movementY } = e
    const movementSteps = Math.abs(movementX) + Math.abs(movementY)

    setSteps(prevSteps => {
      const newSteps = prevSteps + movementSteps
      if (newSteps >= currentIndex * 150) {
        moveImage(clientX, clientY)
        return 0 // Reset steps after moving the image
      }
      return newSteps
    })
  }

  const moveImage = (x: number, y: number) => {
    const currentImage = refs.current[currentIndex]
    if (currentImage) {
      currentImage.style.left = `${x}px`
      currentImage.style.top = `${y}px`
      currentImage.style.display = 'block'
    }
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex + 1
      return newIndex % refs.current.length
    })
  }

  return (
    <div
      onMouseMove={manageMouseMove}
      className='relative h-screen overflow-hidden'
    >
      {workSamples.map((sample, index) => (
        <img
          key={index}
          // ref={el => (refs.current[index] = el as HTMLImageElement)}
          src={sample.src}
          alt={sample.alt}
          className='absolute hidden w-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      ))}
    </div>
  )
}
