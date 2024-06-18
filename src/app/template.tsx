'use client'

import { useEffect } from 'react'
import { animatePageIn } from '@/utils/animations'

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn()
  }, [])

  return (
    <>
      <div
        id='transition-element'
        className='fixed left-0 top-0 z-10 h-screen w-screen bg-neutral-100 dark:bg-neutral-900'
      ></div>
      {children}
    </>
  )
}
