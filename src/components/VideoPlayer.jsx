import { useState } from 'react'

function getYouTubeId(url) {
  if (!url) return null
  // Handle standard, shorts, and short youtu.be links
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/,
    /youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,
  ]
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  return null
}

export default function VideoPlayer({ url }) {
  const [playing, setPlaying] = useState(false)
  const videoId = getYouTubeId(url)
  if (!videoId) return null

  const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

  return (
    <div className="video-player-card">
      {!playing ? (
        <button
          className="video-thumb-btn"
          onClick={() => setPlaying(true)}
          aria-label="Play video"
        >
          <img
            src={thumb}
            alt="Video thumbnail"
            className="video-thumb-img"
          />
          {/* Overlay gradient */}
          <div className="video-thumb-overlay" />
          {/* Play button */}
          <div className="video-play-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="video-watch-label">Watch Demo</span>
        </button>
      ) : (
        <div className="video-iframe-wrap">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-iframe"
          />
        </div>
      )}
    </div>
  )
}
