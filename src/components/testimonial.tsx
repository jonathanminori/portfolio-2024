'use client'

import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './carousel-dot'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

interface TestimonialDataItem {
  quote: string
  name: string
  position: string
}
const testimonial_data: TestimonialDataItem[] = [
  {
    quote:
      'Jonathan has been an invaluable partner, quickly understanding our target customer and product vision. He reframed strategies with clear analogies and kept us informed with timely updates. He also expertly hired our first full-time design leader, strengthening our team.',
    name: 'Jason Semine',
    position: 'Head of Product at Wizard AI'
  },
  {
    quote:
      "Jonathan aligned with us on product vision from day one, moving seamlessly between details and big-picture strategy. His experience and curiosity helped us avoid pitfalls, and his clear communication was invaluable. We're grateful to keep him close as we grow.",
    name: 'Ellie Buckingham & Miri Buckland',
    position: 'Co-founders at Landing'
  },
  {
    quote:
      'No single designer has had a bigger, more profound impact on our businesses than Jonathan Minori. His collaborative spirit, creativity, and curiosity make him an exceptional and valuable team player.',
    name: 'Ryan Wines',
    position: 'Founder & CEO at Marmoset Music & Track Club'
  }
]

const EmblaCarousel: React.FC<PropType> = props => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {testimonial_data.map((item, index) => (
            <div className='embla__slide' key={index}>
              <p className='font-semibold'>&quot;{item.quote}&quot;</p>
              <p className='text-base font-medium leading-snug opacity-80'>
                {item.name}
                <br />
                <span className='text-sm font-normal'>{item.position}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='embla__controls'>
        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={
                index === selectedIndex
                  ? 'embla__dot embla__dot--selected'
                  : 'embla__dot'
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
