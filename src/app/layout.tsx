import type { Metadata } from 'next'

import './globals.css'
import Header from './header'
import OpenToWork from '@/components/opentowork'

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
  openGraph: {
    title: 'Jonathan Minori',
    description: 'Design Director based in Portland, Oregon',
    url: 'https://www.mino.xyz',
    siteName: 'Jonathan Minori',
    images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'Jonathan Minori - Design leader from Portland, Oregon'
      },
      {
        url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Jonathan Minori - Design leader from Portland, Oregon'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
}

export default function Home({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <OpenToWork />
        {children}
      </body>
    </html>
  )
}
