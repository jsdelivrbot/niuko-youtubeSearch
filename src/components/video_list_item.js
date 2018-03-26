import React from 'react'
import VideoItem from './video_item'

/**
 * Vd. https://getbootstrap.com/ per maggiori dettagli su classi CSS
 * usate per decorare il markup dei seguenti componenti funzionali.
 * @param videos
 * @param onVideoSelect
 */
const getVideoJsx = (videos, onVideoSelect) => {
  return videos.map((video) => {
    return (
      <VideoItem
        video={video}
        key={video.etag}
        onVideoSelect={onVideoSelect}/>
    )
  })
}

const VideoList = ({videos, onVideoSelect}) => {
  return (
    <ul className="col-md-4 list-group">
      {getVideoJsx(videos, onVideoSelect)}
    </ul>
  )
}

export default VideoList
