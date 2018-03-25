import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list_item'
import youtubeSearch from 'youtube-api-search'

const API_KEY_YOUTUBE = 'AIzaSyAgFZc8KejemmzoR6qzunRH4OyoYWXg34Y'

youtubeSearch(API_KEY_YOUTUBE,{
  q:'nodejs',
  part:'snippet',
  type:'video'
}, (videos)=> {
  console.log(videos)
})

const App = () => {
  return <div>
    <SearchBar/>
    <br />
    <VideoList />
  </div>
}


ReactDOM.render(<App/>, document.querySelector('.container'))
