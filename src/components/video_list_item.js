import React from 'react'

const videos = [
  {
    title: 'Avengers',
    url: 'https://video.youtube'
  },
  {
    title: 'Spiderman',
    url: 'https://video.youtube'
  },
  {
    title: 'Thor',
    url: 'https://video.youtube'
  }
]

const getVideoJsx = () => {
  return videos.map((movie) => {
    return (
      <div>
        <div> movie.title</div>
        <video src={movie.url}/>
      </div>
    )
  })
}

const VideoList = () => {
  return (
    <div>
      {getVideoJsx()}
    </div>
  )
}

export default VideoList
