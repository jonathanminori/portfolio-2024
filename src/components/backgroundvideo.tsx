'use client'

import React from 'react'

interface BackgroundVideoProps {
  videoSrc: string
  className: string
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoSrc,
  className
}) => {
  return (
    <video className={className} autoPlay muted loop playsInline>
      <source src={videoSrc} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  )
}

export default BackgroundVideo
