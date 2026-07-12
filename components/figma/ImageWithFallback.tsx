import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNCIvPjxwYXRoIGQ9Im0xNiA1NiAxNi0xNiAxMiAxMiAxNi0yMCAxMiAxMiIvPjxjaXJjbGUgY3g9IjM2IiBjeT0iMzYiIHI9IjYiLz48L3N2Zz4='

type Props = {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
}

export default function ImageWithFallback({ src, alt, className, style }: Props) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={style}
      onError={() => setImgSrc(ERROR_IMG_SRC)}
    />
  )
}
