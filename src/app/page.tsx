'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ArrowUpRight, Minus } from 'lucide-react'
import TestimonialsBadge from '@/components/testimonials-badge'
import AnimatedText from '@/components/animatedtext'
import BackgroundVideo from '@/components/backgroundvideo'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

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
    <div id='wrapper' className='container z-10'>
      <div id='content' className='prose pb-48 pt-24 text-lg font-normal'>
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
          className='mb-28 text-neutral-950 dark:text-neutral-200'
        >
          <h2 className='info-headline sr-only'>Bio</h2>
          <AnimatedText
            text="I'm a hands-on leader and startup founder with two decades of experience driving innovation and creative excellence."
            startChar={80}
            endChar={1200}
          />
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
          <h2 className='info-headline'>Currently</h2>
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
          <p>Let’s build something extraordinary together. </p>
          {/* <TestimonialsBadge /> */}
        </article>
        <article
          id='core'
          className='group mb-20 w-168 -translate-x-8 p-8 text-neutral-950 dark:text-neutral-200'
        >
          <h2 className='info-headline mt-0'>Core Skills</h2>
          <ul className='relative m-0 flex list-none flex-wrap items-baseline justify-start gap-1 p-0'>
            <li className='skill skill-a'>Product Strategy</li>
            <li className='skill skill-a'>Brand Strategy</li>
            <li className='skill skill-a'>Creative Direction</li>
            <li className='skill skill-a'>Art Direction</li>
            <li className='skill skill-a'>User Research</li>
            <li className='skill skill-b'>Product Design</li>
            <li className='skill skill-b'>Prototyping</li>
            <li className='skill skill-b'>Design Systems</li>
            <li className='skill skill-c'>Creative Leadership</li>
            <li className='skill skill-c'>Talent Development</li>
          </ul>
        </article>
        <article
          id='extra'
          className='mb-28 text-neutral-950 dark:text-neutral-200'
        >
          <h2 className='info-headline !mb-5'>Extracurriculars</h2>
          <div className='grid grid-cols-1 gap-1 sm:grid-cols-2'>
            <a
              href='https://adplist.org/mentors/jonathan-minori'
              title='View my ADPList profile'
              className='group no-underline'
            >
              <div
                id='able'
                className='flex w-full flex-col justify-between rounded-md bg-slate-900'
              >
                <div className='aspect-4/3 w-full'></div>
                <div className='px-8 pb-3'>
                  <h3 className='readable mb-1.5 font-normal text-white'>
                    ADPList
                  </h3>
                  <p className='readable text-base leading-snug text-white/80'>
                    1,000+ minutes mentoring designers on career moves.
                  </p>
                </div>
              </div>
            </a>
            <a
              href='http://www.ableworks.co'
              title='Able'
              className='group no-underline'
            >
              <div
                id='able'
                className='flex aspect-4/3 w-full flex-col justify-between rounded-md bg-[#FCFFDE]'
              >
                <div className='aspect-4/3 w-full'></div>
                <div className='px-8 pb-3'>
                  <h3 className='readable mb-1.5 font-normal'>Able</h3>
                  <p className='readable text-base leading-snug opacity-80'>
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
                className='relative flex h-96 w-full flex-col justify-end overflow-hidden rounded-md bg-[#08A24B]'
              >
                <BackgroundVideo videoSrc='videos/picklethumbs.mp4' />
                {/* <Image
                  src={ExtraPickleThumbBG}
                  placeholder='blur'
                  fill
                  alt='Pickle Thumbs BG'
                  className='z-0 mt-0 object-cover opacity-40 transition-transform duration-500 ease-in-out group-hover:scale-105'
                /> */}
                <div className='z-10 bg-gradient-to-t from-[#08A24B]/80 from-20% to-[#08A24B]/0 px-6 pb-2 pt-12'>
                  <h3 className='readable mb-1.5 font-normal text-white'>
                    Pickle Thumbs
                  </h3>
                  <p className='readable text-base leading-snug text-white/80'>
                    Making things to help gardeners find their green thumb.
                  </p>
                </div>
              </div>
            </a>
            {/* <a
              href='http://www.picklethumbs.com'
              title='Pickle Thumbs'
              className='group no-underline'
            >
              <div
                id='pickle-thumbs'
                className='flex h-96 w-full flex-col justify-between overflow-hidden rounded-md bg-[#08A24B]'
              >
                <div className='relative aspect-4/3 overflow-hidden'>
                  <Image
                    src={ExtraPickleThumb}
                    placeholder='blur'
                    width={450}
                    height={400}
                    alt='Pickle Thumbs'
                    className='relative z-30 mt-0 -translate-y-4 transition-all duration-300 ease-in-out group-hover:scale-110'
                  />
                  <div className='absolute bottom-0 left-0 z-20 h-full w-full bg-gradient-to-t from-[#08A24B] to-[#08A24B]/0 to-40%'></div>
                  <Image
                    src={ExtraPickleThumbBG}
                    placeholder='blur'
                    fill
                    alt='Pickle Thumbs BG'
                    className='z-10 mt-0 object-cover opacity-40'
                  />
                </div>
                <div className='px-8 pb-3'>
                  <h3 className='mb-1.5  font-medium text-white'>
                    Pickle Thumbs
                  </h3>
                  <p className=' leading-snug text-white opacity-80'>
                    Making things to help gardeners find their green thumb.
                  </p>
                </div>
              </div>
            </a> */}
            <div
              id='secret'
              className='flex h-full w-full select-none items-center justify-center rounded-md bg-neutral-50 text-sm text-neutral-400 dark:bg-neutral-900 dark:text-neutral-500'
            ></div>
          </div>
        </article>
        <article
          id='recognition'
          className='mb-28 text-neutral-950 dark:text-neutral-200'
        >
          <h2 className='info-headline'>Recognition</h2>
          <p>
            My work has won notable industry awards, including One Show, Webby,
            SXSW, and FWA.
          </p>
        </article>
        <article id='contact' className='mb-28'>
          <h2 className='info-headline'>Connect</h2>
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
        <article id='colophon' className='relative text-xs text-neutral-500'>
          {/* <OpenToWork /> */}
          <h2 className='sr-only'>Colophon</h2>
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
