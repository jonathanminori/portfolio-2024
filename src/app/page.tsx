'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ArrowUpRight, LucideHeading1, Minus } from 'lucide-react'
import TestimonialsBadge from '@/components/testimonials-badge'
import AnimatedText from '@/components/animatedtext'
import BackgroundVideo from '@/components/backgroundvideo'
import Sticky from '@/components/sticky'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

export default function Home() {
  const h2Ref = useRef<HTMLHeadingElement>(null)
  const preMinoRef = useRef<HTMLSpanElement>(null)
  const minoRef = useRef<HTMLSpanElement>(null)
  const postMinoRef = useRef<HTMLSpanElement>(null)
  const tl = useRef<GSAPTimeline>(gsap.timeline({ paused: true }))

  const skills = [
    'Creative Leadership',
    'Product Strategy',
    'User Research',
    'Brand Strategy',
    'Creative Direction',
    'Art Direction',
    'Product Design',
    'Prototyping',
    'Design Systems',
    'Talent Development'
  ]

  const classes = ['skill-a', 'skill-b', 'skill-c']

  const getRandomClass = () =>
    classes[Math.floor(Math.random() * classes.length)]

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
            opacty: 0,
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
        <article id='intro' className='mb-14 cursor-help'>
          <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className='cursor-default'
          >
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
          className='mb-28 text-neutral-950 dark:text-neutral-200'
        >
          <h3 className='info-headline sr-only'>Bio</h3>
          <AnimatedText
            text="I'm a hands-on leader and startup founder with two decades of experience driving innovation and creative excellence."
            startChar={80}
            endChar={1200}
          />
          <p>Read my full CV here</p>
          {/* <p className='text-3xl font-light leading-snug'>
            I&apos;m a hands-on leader and startup founder with two decades of
            experience driving innovation and creative excellence.
          </p> */}
          {/* <p>
            I&apos;ve held pivotal roles across design, product, engineering,
            and marketing, excelling at the intersection of brand and product
            experiences, particularly in the realm of emerging technologies.
          </p> */}
        </article>
        <article
          id='curently'
          className='relative mb-20 text-neutral-950 dark:text-neutral-200'
        >
          <h3 className='info-headline'>Currently</h3>
          {/* <p>
            In my independent practice, I serve as a fractional design leader
            for startups and Fortune 100 companies in fintech, blockchain,
            creative tools, and climate sectors. My expertise lies in product
            design, strategy, and creative leadership.
          </p>
          <p>
            I seek out opportunities where I can contribute to delivering
            outstanding product experiences and cultivating a culture of
            innovation and excellence.
          </p> */}
          <p className='text-pretty'>
            In my independent design practice, I help organizations launch
            products, build creative teams, and mentor designers. I seek
            opportunities to deliver exceptional products and foster a culture
            of innovation and excellence.
          </p>

          {/* <TestimonialsBadge /> */}
        </article>
        <article
          id='core'
          className='group mb-20 w-168 -translate-x-8 p-8 text-neutral-950 dark:text-neutral-200'
        >
          <h3 className='info-headline mt-0'>Core Skills</h3>
          <ul className='relative m-0 flex list-none flex-wrap items-baseline justify-start gap-0.5 p-0'>
            {skills.map((skill, index) => (
              <Sticky key={index}>
                <li className={`skill ${getRandomClass()}`}>{skill}</li>
              </Sticky>
            ))}
          </ul>
        </article>
        <article
          id='extra'
          className='mb-28 text-neutral-950 dark:text-neutral-200'
        >
          <h3 className='info-headline !mb-5'>Extracurriculars</h3>
          <p>A few things I work on outside of my day job.</p>
          <div className='grid grid-cols-1 gap-1 sm:grid-cols-2'>
            <a
              href='http://www.ableworks.co'
              title='Able'
              className='group no-underline'
            >
              <div
                id='able'
                className='relative flex h-96 w-full flex-col justify-end overflow-hidden rounded-lg bg-[#FCFFDE]'
              >
                <BackgroundVideo videoSrc='videos/picklethumbs.mp4' />
                <div className='z-10 bg-gradient-to-t from-[#FCFFDE]/95 from-40% to-[#FCFFDE]/0 px-6 pb-2 pt-12'>
                  <h3 className='readable mb-1.5 text-lg font-normal'>Able</h3>
                  <p className='readable text-base font-normal leading-snug opacity-90 group-hover:opacity-100'>
                    AI-edited instructional videos for frontline teams.
                  </p>
                </div>
              </div>
            </a>
            <a
              href='http://www.picklethumbs.com'
              title='Pickle Thumbs'
              className='group no-underline'
            >
              <div
                id='pickle-thumbs'
                className='relative flex h-96 w-full flex-col justify-end overflow-hidden rounded-lg bg-[#08A24B]'
              >
                <BackgroundVideo videoSrc='videos/picklethumbs2.mp4' />
                <div className='z-10 bg-gradient-to-t from-[#08A24B]/95 from-20% to-[#08A24B]/0 px-6 pb-2 pt-12'>
                  <h3 className='readable mb-1.5 text-lg font-normal text-white'>
                    Pickle Thumbs
                  </h3>
                  <p className='readable text-base font-normal leading-snug text-white opacity-90 group-hover:opacity-100'>
                    Making things to help gardeners find their green thumb.
                  </p>
                </div>
              </div>
            </a>
            <a
              href='https://adplist.org/mentors/jonathan-minori'
              title='View my ADPList profile'
              className='group no-underline'
            >
              <div
                id='able'
                className='relative flex h-96 w-full flex-col justify-end overflow-hidden rounded-lg bg-slate-900'
              >
                <BackgroundVideo videoSrc='videos/adplist.mp4' />
                <div className='z-10 bg-gradient-to-t from-slate-900/95 from-40% to-slate-900/0 px-6 pb-2 pt-12'>
                  <h3 className='readable mb-1.5 text-lg font-normal text-white'>
                    ADPList
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
              className='group no-underline'
            >
              <div
                id='able'
                className='relative flex h-96 w-full flex-col justify-end overflow-hidden rounded-lg bg-slate-700'
              >
                <BackgroundVideo videoSrc='videos/seasons.mp4' />
                <div className='z-10 bg-gradient-to-t from-slate-700/95 from-40% to-slate-700/0 px-6 pb-2 pt-12'>
                  <h3 className='readable mb-1.5 text-lg font-normal text-white'>
                    Seasons
                  </h3>
                  <p className='readable text-base font-normal leading-snug text-white opacity-90 group-hover:opacity-100'>
                    Advising the team on product design and development.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </article>
        <article
          id='recognition'
          className='mb-28 text-neutral-950 dark:text-neutral-200'
        >
          <h3 className='info-headline'>Recognition</h3>
          <p>
            My work has won notable industry awards, including Cannes, One Show,
            Webby, SXSW, and FWA.
          </p>
        </article>
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
                className='contact-label group'
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
                className='contact-label group'
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
                className='contact-label group'
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
                className='contact-label group'
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
            Type by{' '}
            <a
              href='https://pangrampangram.com/products/neue-montreal'
              title='Neue Montreal by Pangram Pangram Foundry'
              className='colophon-link'
              target='_blank'
            >
              Neue Montreal
            </a>{' '}
            by Pangram Pangram Foundry
            <br />
            Icons by{' '}
            <a
              href='https://lucide.dev/icons/'
              title='Icons by Lucide'
              className='colophon-link'
              target='_blank'
            >
              Lucide
            </a>
          </p>
        </article>
      </div>
    </div>
  )
}
