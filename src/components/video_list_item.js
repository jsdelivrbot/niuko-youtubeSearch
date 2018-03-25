import React from 'react'

const getVideoJsx = (videos) => {
  return videos.map((movie) => {
    const key = movie.etag
    const snippet = movie.snippet
    const {title, description} = snippet
    const thumbUrl = snippet.thumbnails.default.url
    return (
      <div key={key}>
        <div>{title}</div> <br />
        <div>{description}</div>
        <img src={thumbUrl}/>
      </div>
    )
  })
}

const VideoList = ({videos}) => {
  return (
    <div>
      {getVideoJsx(videos)}
    </div>
  )
}

export default VideoList
