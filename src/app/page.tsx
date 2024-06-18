'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ArrowUpRight, Minus } from 'lucide-react'
import Testimonial from '@/components/testimonial'
import { EmblaOptionsType } from 'embla-carousel'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

const testimonial_options: EmblaOptionsType = { align: 'start', loop: true }

export default function Home() {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: '#wrapper',
      content: '#content',
      smooth: 1.2,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: true
    })
  }, [])
  return (
    <div id='wrapper' className='container z-0'>
      <div id='content' className='prose pb-48 pt-24 text-xl font-normal'>
        <article id='intro' className='mb-14 cursor-help'>
          <h1 className='group text-base font-medium text-neutral-950 dark:text-neutral-200'>
            <span className='delay-800 transition-opacity duration-[1600ms] ease-linear group-hover:opacity-10'>
              Jonathan{' '}
            </span>
            Mino
            <span className='delay-800 transition-opacity duration-[1600ms] ease-linear group-hover:opacity-10'>
              ri
            </span>
            <br />
            <span className='text-sm font-normal opacity-60'>
              Design Director based in Portland, Oregon
            </span>
          </h1>
        </article>
        <article
          id='bio'
          className='mb-24 text-neutral-950 dark:text-neutral-200'
        >
          <h2 className='info-headline sr-only'>Bio</h2>
          <p className='text-balance'>
            A hands-on design leader and startup founder with two decades of
            experience driving innovation and creative excellence.
          </p>
          <p>
            I&apos;ve held pivotal roles across design, product, engineering,
            and marketing, excelling at the intersection of brand and product
            experiences, particularly in the realm of emerging technologies.
          </p>
        </article>
        <article
          id='curently'
          className='mb-24 text-neutral-950 dark:text-neutral-200'
        >
          <h2 className='info-headline'>Currently</h2>
          <p>
            In my independent practice, I serve as a fractional design leader
            for startups and Fortune 100 companies in fintech, blockchain,
            creative tools, and climate sectors. My expertise lies in product
            design, strategy, and creative leadership.
          </p>
          <p>
            I seek opportunities where I can contribute to delivering
            outstanding product experiences and cultivating a culture of
            innovation and excellence.
          </p>
          <Testimonial options={testimonial_options} />
        </article>
        <article
          id='extra'
          className='mb-24 text-neutral-950 dark:text-neutral-200'
        >
          <h2 className='info-headline'>Extracurriculars</h2>
          <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
            <a
              href='https://adplist.org/mentors/jonathan-minori'
              title='View my ADPList profile'
              className='no-underline'
            >
              <div
                id='able'
                className='flex w-full flex-col justify-between rounded-xl bg-slate-900'
              >
                <div className='aspect-4/3 w-full'></div>
                <div className='px-8 pb-3'>
                  <h3 className='mb-1.5 text-xl font-medium text-neutral-100'>
                    ADPList
                  </h3>
                  <p className='text-base leading-snug text-neutral-100 opacity-80'>
                    1,000+ minutes mentoring designers to land their next role
                    or pursue a career in freelance.
                  </p>
                </div>
              </div>
            </a>
            <a
              href='http://www.ableworks.co'
              title='Able'
              className='no-underline'
            >
              <div
                id='able'
                className='aspect-4/3 flex w-full flex-col justify-between rounded-xl bg-[#FCFFDE]'
              >
                <div className='aspect-4/3 w-full'></div>
                <div className='px-8 pb-3'>
                  <h3 className='mb-1.5 text-xl font-medium'>Able</h3>
                  <p className='text-base leading-snug opacity-80'>
                    Easily record and share AI-edited instructional videos with
                    your frontline teams.
                  </p>
                </div>
              </div>
            </a>
            <a
              href='http://www.picklethumbs.com'
              title='Pickle Thumbs'
              className='no-underline'
            >
              <div
                id='pickle-thumbs'
                className='flex w-full flex-col justify-between rounded-xl bg-[#08A24B]'
              >
                <div className='aspect-4/3 w-full'></div>
                <div className='px-8 pb-3'>
                  <h3 className='mb-1.5 text-xl font-medium text-neutral-100'>
                    Pickle Thumbs
                  </h3>
                  <p className='text-base leading-snug text-neutral-100 opacity-80'>
                    Making things to help gardeners find their green thumb.
                  </p>
                </div>
              </div>
            </a>
            <div
              id='secret'
              className='flex h-full w-full select-none items-center justify-center rounded-xl bg-neutral-50 text-sm text-neutral-400 dark:bg-neutral-900 dark:text-neutral-500'
            >
              Coming Soon
            </div>
          </div>
        </article>
        <article
          id='core'
          className='mb-24 text-neutral-950 dark:text-neutral-200'
        >
          <h2 className='info-headline'>Core Skills</h2>
          <p>
            Product Design, Product Strategy, Prototyping, Creative Direction,
            User Research, Design Systems, Creative Leadership, Talent
            Development
          </p>
        </article>
        <article
          id='recognized'
          className='mb-24 text-neutral-950 dark:text-neutral-200'
        >
          <h2 className='info-headline'>Recognized</h2>
          <p>
            Cannes Cyber Lion, Fast Co. Design, Wired, SXSW, One Show,
            Communication Arts, Webby, IxDA, and multiple FWA Awards
          </p>
        </article>
        <article id='contact' className='mb-24'>
          <h2 className='info-headline'>Connect</h2>
          <ul className='list-outside list-none p-0 font-sans'>
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
                href='https://read.cv/mino'
                title='My CV'
                className='contact-label group'
              >
                CV
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
        <article id='colophon' className='text-xs text-neutral-500'>
          <h2 className='sr-only'>Colophon</h2>
          <Minus
            size={16}
            strokeWidth={1.25}
            absoluteStrokeWidth
            className='-translate-x-[4px] opacity-50'
          />
          <p className='leading-relaxed'>
            Hand coded with a little help from ChatGPT
            <br />
            Type by Neue Montreal by Pangram Pangram
            <br />
            Icons by Lucide
          </p>
        </article>
      </div>
    </div>
  )
}
