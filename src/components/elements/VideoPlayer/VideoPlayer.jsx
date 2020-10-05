import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

export const VideoPlayer = ({ url }) => {
  const id = getYouTubeId(url)

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }

  return (
    <div className="relative h-0 my-10 pt-9/16">
      <YouTube
        videoId={id}
        opts={opts}
        containerClassName="absolute inset-0 w-full h-full"
      />
    </div>
  )
}
