'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function PodcastThumbnail({ title, youtubeId }) {
  const [imgSrc, setImgSrc] = useState(`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`)

  return (
    <div className="relative aspect-video">
      <Image
        src={imgSrc}
        alt={`${title} Thumbnail`}
        fill
        className="object-cover"
        onError={() => {
          setImgSrc(`/placeholder.svg?height=720&width=1280`)
        }}
      />
    </div>
  )
}