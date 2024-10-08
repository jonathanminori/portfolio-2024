'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ArrowUpRight, LucideHeading1, Minus } from 'lucide-react'
// import TestimonialsBadge from '@/components/testimonials-badge'
import AnimatedText from '@/components/animatedtext'
import BackgroundVideo from '@/components/backgroundvideo'
import Sticky from '@/components/sticky'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

const skillList = [
  'Creative Leadership',
  'Product Strategy',
  'Product Management',
  'User Research',
  'Creative Direction',
  'Art Direction',
  'Product Design',
  'Prototyping',
  'Design Systems',
  'Talent Development'
]

const skillStyles = ['skill-a', 'skill-b', 'skill-c']

const getRandomClass = () =>
  skillStyles[Math.floor(Math.random() * skillStyles.length)]

export default function Home() {
  const h2Ref = useRef<HTMLHeadingElement>(null)
  const preMinoRef = useRef<HTMLSpanElement>(null)
  const minoRef = useRef<HTMLSpanElement>(null)
  const postMinoRef = useRef<HTMLSpanElement>(null)
  const tl = useRef<GSAPTimeline>(gsap.timeline({ paused: true }))
  const [classes, setClasses] = useState(skillList.map(() => getRandomClass()))

  useEffect(() => {
    if (
      h2Ref.current &&
      preMinoRef.current &&
      minoRef.current &&
      postMinoRef.current
    ) {
      // Calculate the offset width needed to move h2Ref left
      const preMinoWidth = preMinoRef.current.offsetWidth

      // Clear any existing animations
      tl.current.clear()

      // Setup and synchronize animations
      tl.current
        .to(
          preMinoRef.current,
          {
            y: 20,
            duration: 0.5,
            opacity: 0,
            ease: 'power3.inOut'
          },
          0
        ) // Start time label "0" ensures synchronous start
        .to(
          postMinoRef.current,
          {
            y: -20,
            duration: 0.5,
            opacity: 0,
            ease: 'power3.inOut'
          },
          0
        ) // Same start time for synchronization
        .to(
          h2Ref.current,
          {
            x: -preMinoWidth,
            duration: 0.8,
            ease: 'back.inOut'
          },
          0
        ) // Same start time to move h2Ref left simultaneously
    }
  }, [])

  const handleMouseOver = () => {
    tl.current.play()
  }

  const handleMouseOut = () => {
    tl.current.reverse()
  }

  return (
    <div id='wrapper' className='container z-10'>
      <div id='content' className='prose pb-48 pt-24 text-xl font-normal'>
        <article id='intro' className='mb-14'>
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <h1
              ref={h2Ref}
              className='mb-1.5 h-5 overflow-hidden text-base font-medium leading-tight text-neutral-950 dark:text-neutral-200'
            >
              <span ref={preMinoRef} className='inline-block'>
                {'Jonathan '.split('').map((char, index) => (
                  <span key={index} className='inline-block'>
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
              <span ref={minoRef} className='inline-block'>
                {'Mino'.split('').map((char, index) => (
                  <span key={index} className='inline-block'>
                    {char}
                  </span>
                ))}
              </span>
              <span ref={postMinoRef} className='inline-block'>
                {'ri'.split('').map((char, index) => (
                  <span key={index} className='inline-block'>
                    {char}
                  </span>
                ))}
              </span>
            </h1>
            <h2 className='mt-0 text-sm font-normal text-neutral-950 opacity-60 dark:text-neutral-200'>
              Design Director based in Portland, Oregon
            </h2>
          </div>
        </article>
        <article
          id='bio'
          className='relative mb-28 text-neutral-950 dark:text-neutral-200'
        >
          <h3 className='info-headline sr-only'>Overview</h3>
          <AnimatedText
            text="I'm a hands-on leader and startup founder with two decades of experience driving innovation and creative excellence."
            startChar={80}
            endChar={1200}
          />
          <div className='w-full sm:w-180 sm:-translate-x-14'>
            <BackgroundVideo
              videoSrc='videos/work-montage.mp4'
              className='my-0 aspect-video rounded-lg object-cover'
            />
            <p className='text-center text-xs text-neutral-500'>
              Please{' '}
              <a
                href='mailto:jonathan.minori@gmail.com'
                title='Email me'
                className='caption-link'
              >
                e-mail me
              </a>{' '}
              or{' '}
              <a
                href='https://x.com/jonminori'
                target='blank'
                title='Slide into my DMs'
                className='caption-link'
              >
                slide into my DMs
              </a>{' '}
              for access to case studies.
            </p>
          </div>
        </article>
        <article
          id='currently'
          className='relative mb-24 text-neutral-950 dark:text-neutral-200'
        >
          <h3 className='info-headline'>Currently</h3>
          <p className='text-balance sm:text-pretty'>
            In my independent design practice, I help organizations think about
            the future, launch products, and develop creative teams. I seek
            opportunities to deliver exceptional products and foster a culture
            of innovation and excellence.
          </p>
          {/* <TestimonialsBadge /> */}
        </article>
        <article
          id='core-skill'
          className='group relative mb-24 w-full text-neutral-950 dark:text-neutral-200 sm:w-168'
        >
          <h3 className='info-headline mt-0'>Core Skills</h3>
          <ul className='relative m-0 flex list-none flex-wrap items-baseline justify-start gap-1 p-0'>
            {skillList.map((skill, index) => (
              <Sticky key={index}>
                <li className={`skill-item ${classes[index]}`}>{skill}</li>
              </Sticky>
            ))}
          </ul>
        </article>
        <article
          id='extra'
          className='mb-28 text-neutral-950 dark:text-neutral-200'
        >
          <h3 className='info-headline !mb-5'>Side Quests</h3>
          <p>A few things I do in my off hours.</p>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-1'>
            <a
              href='http://www.ableworks.co'
              title='Able'
              target='_blank'
              className='group cursor-alias no-underline'
            >
              <div
                id='able'
                className='relative flex h-96 flex-col justify-end overflow-hidden rounded-lg bg-[#966037]'
              >
                <BackgroundVideo
                  videoSrc='videos/able.mp4'
                  className='absolute inset-0 mt-0 h-full w-full object-cover'
                />
                <div className='z-10 bg-gradient-to-t from-[#966037]/95 from-40% to-[#966037]/0 px-6 pb-2 pt-12 transition-all duration-200 ease-in-out group-hover:pb-4'>
                  <h3 className='readable mb-1.5 text-lg font-normal text-white'>
                    Able
                  </h3>
                  <p className='readable text-base font-normal leading-snug text-white opacity-90 group-hover:opacity-100'>
                    Building an AI-powered camera to record and edit
                    instructional videos.
                  </p>
                </div>
              </div>
            </a>
            <a
              href='http://www.picklethumbs.com'
              title='Pickle Thumbs'
              target='_blank'
              className='group cursor-alias no-underline'
            >
              <div
                id='pickle-thumbs'
                className='relative flex h-96 flex-col justify-end overflow-hidden rounded-lg bg-[#08A24B]'
              >
                <BackgroundVideo
                  videoSrc='videos/picklethumbs.mp4'
                  className='absolute inset-0 mt-0 h-full w-full object-cover'
                />
                <div className='z-10 bg-gradient-to-t from-[#08A24B]/95 from-20% to-[#08A24B]/0 px-6 pb-2 pt-12 transition-all duration-200 ease-in-out group-hover:pb-4'>
                  <h3 className='readable mb-1.5 text-lg font-normal text-white'>
                    Pickle Thumbs
                  </h3>
                  <p className='readable text-base font-normal leading-snug text-white opacity-90 group-hover:opacity-100'>
                    Experiments to help gardeners find their green thumb.
                  </p>
                </div>
              </div>
            </a>
            <a
              href='https://adplist.org/mentors/jonathan-minori'
              title='View my ADPList profile'
              target='_blank'
              className='group cursor-alias no-underline'
            >
              <div
                id='able'
                className='relative flex h-96 flex-col justify-end overflow-hidden rounded-lg bg-slate-900'
              >
                <BackgroundVideo
                  videoSrc='videos/adplist.mp4'
                  className='absolute inset-0 mt-0 h-full w-full object-cover'
                />
                <div className='z-10 bg-gradient-to-t from-slate-900/95 from-40% to-slate-900/0 px-6 pb-2 pt-12 transition-all duration-200 ease-in-out group-hover:pb-4'>
                  <h3 className='readable mb-1.5 text-lg font-normal text-white'>
                    Mentorship
                  </h3>
                  <p className='readable text-base font-normal leading-snug text-white opacity-90 group-hover:opacity-100'>
                    1,000+ minutes mentoring designers on career moves.
                  </p>
                </div>
              </div>
            </a>
            <a
              href='https://www.trainseasons.com'
              title='Check out Seasons'
              target='_blank'
              className='group cursor-alias no-underline'
            >
              <div
                id='able'
                className='relative flex h-96 flex-col justify-end overflow-hidden rounded-lg bg-slate-700'
              >
                <BackgroundVideo
                  videoSrc='videos/seasons.mp4'
                  className='absolute inset-0 mt-0 h-full w-full object-cover'
                />
                <div className='z-10 bg-gradient-to-t from-slate-700/95 from-40% to-slate-700/0 px-6 pb-2 pt-12 transition-all duration-200 ease-in-out group-hover:pb-4'>
                  <h3 className='readable mb-1.5 text-lg font-normal text-white'>
                    Advising
                  </h3>
                  <p className='readable text-base font-normal leading-snug text-white opacity-90 group-hover:opacity-100'>
                    Advising the team at Seasons on product design and
                    development.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </article>
        {/* <article
          id='recognition'
          className='mb-28 text-neutral-950 dark:text-neutral-200'
        >
          <h3 className='info-headline'>Recognition</h3>
          <p>
            My work has won notable industry awards, including Cannes, One Show,
            Webby Awards, SXSW, and FWA.
          </p>
        </article> */}
        <article
          id='contact'
          className='mb-28 text-neutral-950 dark:text-neutral-200'
        >
          <h3 className='info-headline'>Connect</h3>
          <p>
            Currently available for both contract and full-time opportunities.
          </p>
          <ul className='list-outside list-none p-0'>
            <li className='contact-list'>
              <a
                href='mailto:jonathan.minori@gmail.com'
                title='Email me'
                className='contact-label'
              >
                Email
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.25}
                  absoluteStrokeWidth
                  className='contact-icon'
                />
              </a>
            </li>

            <li className='contact-list'>
              <a
                href='https://www.linkedin.com/in/jonathanminori/'
                title='Connect on LinkedIn'
                className='contact-label'
              >
                LinkedIn
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.25}
                  absoluteStrokeWidth
                  className='contact-icon'
                />
              </a>
            </li>
            <li className='contact-list'>
              <a
                href='https://read.cv/mino'
                title='Read.cv'
                className='contact-label'
              >
                Read.cv
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.25}
                  absoluteStrokeWidth
                  className='contact-icon'
                />
              </a>
            </li>
            <li className='contact-list'>
              <a
                href='https://x.com/jonminori'
                title='Connect on Twitter'
                className='contact-label'
              >
                Twitter
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.25}
                  absoluteStrokeWidth
                  className='contact-icon'
                />
              </a>
            </li>
          </ul>
        </article>
        <article id='colophon' className='relative text-xs text-neutral-400'>
          {/* <OpenToWork /> */}
          <h3 className='sr-only'>Colophon</h3>
          <Minus
            size={16}
            strokeWidth={1.25}
            absoluteStrokeWidth
            className='-translate-x-[4px] opacity-50'
          />
          <p className='leading-relaxed'>
            Hand coded with a little help from{' '}
            <a
              href='https://chatgpt.com/'
              title='Had a little help from my friend ChatGPT 4o'
              className='colophon-link'
              target='_blank'
            >
              ChatGPT
            </a>{' '}
            and{' '}
            <a
              href='https://blog.olivierlarose.com/'
              title="Check out Oli's tutorials"
              className='colophon-link'
              target='_blank'
            >
              Olivier Larose
            </a>
            <br />
            Typeface is{' '}
            <a
              href='https://pangrampangram.com/products/neue-montreal'
              title='Neue Montreal by Pangram Pangram Foundry'
              className='colophon-link'
              target='_blank'
            >
              Neue Montreal
            </a>{' '}
            by Pangram Pangram Foundry
          </p>
        </article>
      </div>
    </div>
  )
}
