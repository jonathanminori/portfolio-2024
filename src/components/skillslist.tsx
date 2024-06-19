import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SkillsList: React.FC = () => {
  useEffect(() => {
    const skills = document.querySelectorAll('.skill')

    skills.forEach(skill => {
      const skillClass = skill.classList[1] // e.g., 'a', 'b', 'c'
      const colors: { [key: string]: { background: string; text: string } } = {
        a: { background: '#FFDDC1', text: '#333333' },
        b: { background: '#C1FFD7', text: '#333333' },
        c: { background: '#C1E1FF', text: '#333333' }
      }
      const color = colors[skillClass]

      ScrollTrigger.create({
        trigger: '#skills',
        start: 'top center',
        end: 'top 10%',
        markers: false,
        onEnter: () => {
          gsap.to(skill, {
            backgroundColor: color.background,
            color: color.text,
            duration: 1,
            ease: 'power1,inOut'
          })
        },
        onLeave: () => {
          gsap.to(skill, {
            backgroundColor: '#f5f5f5',
            color: '#171717',
            duration: 2,
            ease: 'power1,in'
          })
        },
        onLeaveBack: () => {
          gsap.to(skill, {
            backgroundColor: '#f5f5f5',
            color: '#171717',
            duration: 2,
            ease: 'power1,in'
          })
        }
      })
    })
  }, [])

  return (
    <ul
      id='skills'
      className='relative m-0 flex list-none flex-wrap items-baseline justify-start gap-1 p-0'
    >
      <li className='skill a'>Product Strategy</li>
      <li className='skill a'>Brand Strategy</li>
      <li className='skill a'>User Research</li>
      <li className='skill a'>Product Design</li>
      <li className='skill b'>Prototyping</li>
      <li className='skill b'>Creative Direction</li>
      <li className='skill b'>Design Systems</li>
      <li className='skill c'>Creative Leadership</li>
      <li className='skill c'>Talent Development</li>
    </ul>
  )
}

export default SkillsList
