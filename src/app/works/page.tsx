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
  const [nbOfImages, setNbOfImages] = useState(0)
  const maxNumberOfImages = workSamples.length
  const refs: RefObject<HTMLImageElement>[] = Array.from(
    { length: maxNumberOfImages },
    () => useRef<HTMLImageElement>(null)
  )

  const manageMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, movementX, movementY } = e
    const movementSteps = Math.abs(movementX) + Math.abs(movementY)

    setSteps(prevSteps => {
      const newSteps = prevSteps + movementSteps
      if (newSteps >= currentIndex * 150) {
        moveImage(clientX, clientY)

        if (nbOfImages === maxNumberOfImages) {
          removeImage()
        }
      }

      if (currentIndex === refs.length) {
        setCurrentIndex(0)
        return -150
      }
      console.log(newSteps)
      return newSteps
    })
  }

  const moveImage = (x: number, y: number) => {
    const currentImage = refs[currentIndex].current
    if (currentImage) {
      currentImage.style.left = `${x}px`
      currentImage.style.top = `${y}px`
      currentImage.style.display = 'block'
    }
    setCurrentIndex(prevIndex => prevIndex + 1)
    setNbOfImages(prevNbOfImages => prevNbOfImages + 1)
    setZIndex()
  }

  const setZIndex = () => {
    const images = getCurrentImages()
    images.forEach((image, index) => {
      image.style.zIndex = `${index}`
    })
  }

  const removeImage = () => {
    const images = getCurrentImages()
    if (images.length > 0) {
      images[0].style.display = 'none'
      setNbOfImages(prevNbOfImages => prevNbOfImages - 1)
    }
  }

  const getCurrentImages = () => {
    let images: HTMLImageElement[] = []
    let indexOfFirst = currentIndex - nbOfImages
    for (let i = indexOfFirst; i < currentIndex; i++) {
      let targetIndex = i
      if (targetIndex < 0) targetIndex += refs.length
      const image = refs[targetIndex].current
      if (image) images.push(image)
    }
    return images
  }

  return (
    <div
      onMouseMove={manageMouseMove}
      className='relative h-screen overflow-hidden'
    >
      {workSamples.map((sample, index) => (
        <img
          key={index}
          ref={refs[index]}
          src={sample.src}
          alt={sample.alt}
          className='absolute hidden w-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      ))}
    </div>
  )
}
