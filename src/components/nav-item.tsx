'use client'

import { useRouter, usePathname } from 'next/navigation'
import { animatePageOut } from '@/utils/animations'

export default function NavItem({
  href,
  label
}: {
  href: string
  label: string
}) {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router)
    }
  }

  return (
    <a
      className='cursor-pointer text-sm font-medium text-neutral-950 dark:text-neutral-200'
      onClick={handleClick}
    >
      {label}
    </a>
  )
}
