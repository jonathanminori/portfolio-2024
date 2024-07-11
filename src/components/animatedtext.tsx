import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import SplitText from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

type AnimatedTextProps = {
  text: string
  startChar?: number
  endChar?: number
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  startChar = 0,
  endChar
}) => {
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const splitTextInstance = new SplitText(textRef.current, {
      type: 'words,chars'
    })
    const chars = splitTextInstance.chars
    const words = splitTextInstance.words

    const endIndex = endChar !== undefined ? endChar : chars.length

    gsap.fromTo(
      chars.slice(startChar, endIndex),
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.03,
        ease: 'power2.out'
      }
    )

    // Cleanup on unmount
    return () => {
      gsap.killTweensOf(chars)
      splitTextInstance.revert()
    }
  }, [startChar, endChar])

  return (
    <p ref={textRef} className='mb-16 text-3xl font-light leading-snug'>
      {text}
    </p>
  )
}

export default AnimatedText
