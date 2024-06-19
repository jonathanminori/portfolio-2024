'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

export default function TestimonialsBadge() {
  const badgeRef = useRef(null)
  const labelRef = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      badgeRef.current,
      { scale: 0 },
      { scale: 1, delay: 0.5, duration: 1, ease: 'back.out(3)' }
    )

    tl.fromTo(
      labelRef.current,
      { attr: { startOffset: '100%' } },
      { attr: { startOffset: '16%' }, duration: 2.5, ease: 'back.inOut(1)' },
      '-=2'
    )
  }, [])
  return (
    <button
      ref={badgeRef}
      data-speed='1.1'
      className='absolute -bottom-16 right-0 aspect-square w-24 overflow-hidden rounded-full bg-[#3E1EFF] dark:bg-neutral-200'
    >
      <svg
        width='132'
        height='66'
        viewBox='0 0 132 66'
        className='-translate-x-[52px] translate-y-[1px] overflow-visible'
        fill='currentColor'
      >
        <path
          id='t-path'
          d='M90.4549 64.3925C82.4845 62.2568 75.6249 57.1694 71.2675 50.1621C66.9101 43.1548 65.3812 34.7525 66.991 26.6595C68.6008 18.5665 73.2288 11.3888 79.936 6.58243C86.6433 1.77608 94.9277 -0.299032 103.109 0.778027C111.29 1.85509 118.755 6.00367 123.989 12.3822C129.224 18.7608 131.837 26.8917 131.297 35.1256C130.757 43.3595 127.106 51.0798 121.083 56.7205C115.061 62.3612 107.118 65.4999 98.8664 65.4999H0.5'
          stroke='transparent'
          fill='transparent'
        />
        <text>
          <textPath
            ref={labelRef}
            className='select-none text-xs font-semibold uppercase tracking-tight text-[#DDEBF2] dark:text-neutral-950'
            href='#t-path'
          >
            Client Testimonials
          </textPath>
        </text>
      </svg>
    </button>
  )
}
