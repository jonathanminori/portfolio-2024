'use client'

import React from 'react'

interface BackgroundVideoProps {
  videoSrc: string
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ videoSrc }) => {
  return (
    <video
      className='absolute inset-0 mt-0 h-full w-full object-cover opacity-50 transition-transform duration-500 ease-in-out group-hover:scale-110'
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={videoSrc} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  )
}

export default BackgroundVideo
