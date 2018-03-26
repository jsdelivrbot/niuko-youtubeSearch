import React from 'react'

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>
  }
  const videoId = video.id.videoId
  // Nota bene: sto usanto la sintassi template-string di ES6
  const url = `https://www.youtube.com/embed/${videoId}`

  console.log(url)
  return (
    <div className="video-detail col-md-8">
      <div className="embed-response embed-response-16by9">
        <iframe className="embed-response-item" src={url}/>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail
