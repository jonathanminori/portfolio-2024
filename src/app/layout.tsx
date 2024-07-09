import type { Metadata } from 'next'

import './globals.css'
import Header from './header'
import Testimonials from '@/components/testimonials'
import { EmblaOptionsType } from 'embla-carousel'

export const metadata: Metadata = {
  title: 'Jonathan Minori',
  description: 'Design Director based in Portland, Oregon',
  generator: 'Next.js',
  applicationName: 'Portfolio 2024',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'designer',
    'design director',
    'design leader',
    'head of design',
    'principal designer',
    'portfolio'
  ],
  creator: 'Jonathan Minori',
  icons: {
    icon: 'img/favicon.svg'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jonathan Minori',
    description: 'Design Director based in Portland, Oregon',
    creator: '@jonminori',
    images: ['https://www.mino.xyz/img/twitter.jpg'] // Must be an absolute URL
  },
  openGraph: {
    title: 'Jonathan Minori',
    description: 'Design Director based in Portland, Oregon',
    url: 'https://www.mino.xyz',
    siteName: 'Jonathan Minori',
    images: [
      // {
      //   url: 'https://www.mino.xyz/img/opengraph-image-800x600.jpg', // Must be an absolute URL
      //   width: 800,
      //   height: 600,
      //   alt: 'Jonathan Minori - Design Director based in Portland, Oregon'
      // },
      // {
      //   url: 'https://www.mino.xyz/img/opengraph-image-1200x630.jpg', // Must be an absolute URL
      //   width: 1200,
      //   height: 630,
      //   alt: 'Jonathan Minori - Design Director based in Portland, Oregon'
      // },
      {
        url: 'https://www.mino.xyz/img/opengraph-image-1800x1600.jpg', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Jonathan Minori - Design Director based in Portland, Oregon'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

// const testimonial_options: EmblaOptionsType = { align: 'start', loop: true }

export default function Home({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        {/* <Testimonials options={testimonial_options} /> */}
        <Header />
        {children}
      </body>
    </html>
  )
}
