// components/SkillList.tsx
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const SkillList: React.FC = () => {
  const listRef = useRef<HTMLUListElement>(null)
  const colorPairs = [
    { background: '#8A8659', text: '#FFFF00' },
    { background: '#FCE5CD', text: '#CC0100' },
    { background: '#DDEBF2', text: '#3E1EFF' }
  ]
  const assignedColors = useRef<{ background: string; text: string }[]>([])

  const getRandomColorPair = () => {
    return colorPairs[Math.floor(Math.random() * colorPairs.length)]
  }

  useEffect(() => {
    if (listRef.current) {
      const items = Array.from(listRef.current.querySelectorAll('.skill'))
      assignedColors.current = items.map(() => getRandomColorPair())
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (listRef.current) {
        const items = Array.from(listRef.current.querySelectorAll('.skill'))

        items.forEach((item, index) => {
          const rect = item.getBoundingClientRect()
          const distance = Math.hypot(
            event.clientX - (rect.left + rect.width / 2),
            event.clientY - (rect.top + rect.height / 2)
          )

          const { background: endBackgroundColor, text: endTextColor } =
            assignedColors.current[index]

          if (distance < 300) {
            const progress = Math.round(1 - distance / 300)
            gsap.to(item, {
              backgroundColor: gsap.utils.interpolate(
                '#f5f5f5',
                endBackgroundColor,
                progress
              ),
              color: gsap.utils.interpolate('#0a0a0a', endTextColor, progress),
              ease: 'linear',
              duration: 1
            })
          } else {
            gsap.to(item, {
              ease: 'linear',
              duration: 1
            })
          }
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ul
      ref={listRef}
      className='relative flex list-none flex-wrap items-center justify-start space-x-1 space-y-1 p-0'
    >
      <li className='skill'>Product Strategy</li>
      <li className='skill'>Brand Strategy</li>
      <li className='skill'>User Research</li>
      <li className='skill'>Product Design</li>
      <li className='skill'>Prototyping</li>
      <li className='skill'>Creative Direction</li>
      <li className='skill'>Design Systems</li>
      <li className='skill'>Creative Leadership</li>
      <li className='skill'>Talent Development</li>
    </ul>
  )
}

export default SkillList
