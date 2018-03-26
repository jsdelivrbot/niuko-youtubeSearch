import React from 'react'

const VideoItem = ({video}) => {
  const snippet = video.snippet
  const title = snippet.title
  const thumbUrl = snippet.thumbnails.default.url
  console.log(video)
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={thumbUrl}/>
        </div>
      </div>
      <div className="media-body">
        <div className="media-heading">{title}</div>
      </div>
    </li>
  )
}

export default VideoItem
