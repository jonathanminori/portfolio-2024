'use client'

import AnimatedText from '@/components/animatedtext'

export default function Works() {
  return (
    <section>
      <div className='matrix fixed bottom-0 left-0 right-0 top-0 z-0 cursor-cell p-5 text-neutral-950 dark:text-neutral-200'>
        {/* <div className='grid gap-5'>
          <div className='h-auto w-60 max-w-full rounded-md bg-neutral-900 p-5 text-neutral-200'>
            <h3 className='mb-1 text-sm font-medium leading-none tracking-wide'>
              Sport Pulse
            </h3>
            <h4 className='mb-2 pr-5 text-xs tracking-wide text-neutral-400'>
              Nike
            </h4>
            <p className='pr-5 text-xs tracking-wide'>
              Injest data from Nike's API to display user's activity data.
            </p>
          </div>
          <div className='w-60 rounded-md bg-neutral-900 p-5 text-neutral-200'>
            <h3 className='mb-1 text-sm font-medium leading-none tracking-wide'>
              Sport Pulse
            </h3>
            <h4 className='mb-2 pr-5 text-xs tracking-wide text-neutral-400'>
              Nike
            </h4>
            <p className='pr-5 text-xs tracking-wide'>
              Injest data from Nike's API to display user's activity data.
            </p>
          </div>
        </div> */}
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
      </div>
    </section>
  )
}
