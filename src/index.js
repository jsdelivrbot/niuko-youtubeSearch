import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list_item'

const API_KEY_YOUTUBE = 'AIzaSyAgFZc8KejemmzoR6qzunRH4OyoYWXg34Y'

const App = () => {
  return <div>
    <SearchBar/>
    <br />
    <VideoList />
  </div>
}


ReactDOM.render(<App/>, document.querySelector('.container'))
