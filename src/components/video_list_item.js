import React from 'react'
import VideoItem from './video_item'

/**
 * Vd. https://getbootstrap.com/ per maggiori dettagli su classi CSS
 * usate per decorare il markup dei seguenti componenti funzionali.
 * @param videos
 */
const getVideoJsx = (videos) => {
    return videos.map((video) => {
      return (
        <VideoItem video={video} key={video.etag}/>
      )
    })
}

const VideoList = ({videos}) => {
  console.log('VideoList',videos)
  return (
    <div>
      {getVideoJsx(videos)}
    </div>
  )
}

export default VideoList
