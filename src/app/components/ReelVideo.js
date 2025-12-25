'use client'

export default function ReelVideo({ src, poster }) {
  const handleFullscreenChange = (e) => {
    const video = e.currentTarget

    if (document.fullscreenElement) {
      video.style.objectFit = 'contain'
      video.style.backgroundColor = 'black'
    } else {
      video.style.objectFit = 'cover'
      video.style.backgroundColor = 'transparent'
    }
  }

  return (
    <video
      className="w-full h-full object-cover transition-all"
      src={src}
      poster={poster}
      muted
      playsInline
      loop
      preload="metadata"
      controls
      onFullscreenChange={handleFullscreenChange}
    />
  )
}
