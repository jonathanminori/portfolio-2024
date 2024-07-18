'use client'

import { useState, useEffect } from 'react'
// import NavItem from '@/components/nav-item'
import { Moon, SunMedium } from 'lucide-react'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const prefersDarkScheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    if (storedTheme === 'dark' || (!storedTheme && prefersDarkScheme)) {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    if (newDarkMode) {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
    setDarkMode(newDarkMode)
  }
  return (
    <header className='fixed right-0 top-0 z-30 px-8 py-4'>
      <nav>
        <ul className='mt-2 flex space-x-8'>
          {/* <li>
            <NavItem href='/' label='Profile' />
          </li>

          <li>
            <NavItem href='/works' label='Works' />
          </li> */}
          {/* <li className='mt-[2px]'>
            <button
              onClick={() => toggleDarkMode()}
              className='cursor-pointer text-neutral-700 hover:opacity-60 dark:text-neutral-200'
            >
              {darkMode && (
                <SunMedium size={13} strokeWidth={1.25} absoluteStrokeWidth />
              )}
              {!darkMode && (
                <Moon size={13} strokeWidth={1.25} absoluteStrokeWidth />
              )}
            </button>
          </li> */}
          <li>
            <button onClick={() => toggleDarkMode()} className='group'>
              <div className='relative m-2 aspect-square w-[10px] cursor-pointer overflow-hidden rounded-full opacity-70 outline outline-[1.5px] outline-offset-1 outline-neutral-800 transition-all duration-200 group-hover:opacity-100 dark:outline-neutral-200'>
                {darkMode && (
                  <div className='absolute left-1/2 top-0 h-full w-1/2 bg-neutral-200 transition-all duration-200 group-hover:left-0 group-hover:w-full'>
                    <p className='sr-only'>Switch to light mode</p>
                  </div>
                )}
                {!darkMode && (
                  <div className='absolute left-0 top-0 h-full w-1/2 bg-neutral-800 transition-all duration-200 group-hover:w-full'>
                    <p className='sr-only'>Switch to dark mode</p>
                  </div>
                )}
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
