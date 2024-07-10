'use client'
import Image from 'next/image'
// import styles from './page.module.scss'
import { MouseEvent, useRef } from 'react'
import gsap from 'gsap'
import AnimatedText from '@/components/animatedtext'
import {
  floating1,
  floating2,
  floating3,
  floating4,
  floating5,
  floating6,
  floating7,
  floating8
} from '../data-works'

export default function Works() {
  const plane1 = useRef(null)
  const plane2 = useRef(null)
  const plane3 = useRef(null)
  let requestAnimationFrameId: number | null = null
  let xForce = 0
  let yForce = 0
  const easing = 0.04
  const speed = 0.01

  const manageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { movementX, movementY } = e
    xForce += movementX * speed
    yForce += movementY * speed

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate)
    }
  }

  const lerp = (start: number, target: number, amount: number) =>
    start * (1 - amount) + target * amount

  const animate = () => {
    xForce = lerp(xForce, 0, easing)
    yForce = lerp(yForce, 0, easing)
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` })
    gsap.set(plane2.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` })
    gsap.set(plane3.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`
    })

    if (Math.abs(xForce) < 0.01) xForce = 0
    if (Math.abs(yForce) < 0.01) yForce = 0

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate)
    } else {
      cancelAnimationFrame(requestAnimationFrameId as number)
      requestAnimationFrameId = null
    }
  }

  return (
    <section
      onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => manageMouseMove(e)}
      className='matrix fixed bottom-0 left-0 right-0 top-0 z-0 text-neutral-950 dark:text-neutral-200'
    >
      <div ref={plane1} className='absolute h-full w-full brightness-75'>
        <Image
          src={floating1}
          alt='image'
          width={500}
          className='absolute left-[90%] top-[70%]'
        />
        <Image
          src={floating2}
          alt='image'
          width={220}
          className='absolute left-[5%] top-[65%]'
        />
        <Image
          src={floating7}
          alt='image'
          width={425}
          className='absolute left-[35%] top-[0%]'
        />
      </div>
      <div ref={plane2} className='brightness-60 absolute h-full w-full'>
        <Image
          src={floating4}
          alt='image'
          width={250}
          className='absolute left-[5%] top-[10%]'
        />
        <Image
          src={floating6}
          alt='image'
          width={200}
          className='absolute left-[80%] top-[5%]'
        />
        <Image
          src={floating8}
          alt='image'
          width={225}
          className='absolute left-[60%] top-[60%]'
        />
      </div>
      <div ref={plane3} className='absolute h-full w-full brightness-50'>
        <Image
          src={floating3}
          alt='image'
          width={220}
          className='absolute left-[65%] top-[2.5%]'
        />
        <Image
          src={floating5}
          alt='image'
          width={200}
          className='absolute left-[40%] top-[75%]'
        />
      </div>
      <div className='fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center text-center'>
        <div className='w-168'>
          <AnimatedText
            text="Injest data from Nike's API to display user's activity data."
            startChar={40}
            endChar={1200}
          />
        </div>
      </div>
      <div className='fixed bottom-8 flex w-screen items-center justify-center'>
        <p className='w-fit bg-white px-5 py-1.5 text-sm font-medium text-neutral-500 dark:bg-neutral-950'>
          Get in touch for full case studies
        </p>
      </div>
    </section>
  )
}
