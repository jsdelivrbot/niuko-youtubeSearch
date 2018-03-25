import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list_item'
import Ysearch from './fetchYoutube'

const API_KEY_YOUTUBE = 'AIzaSyAgFZc8KejemmzoR6qzunRH4OyoYWXg34Y'

Ysearch({key: API_KEY_YOUTUBE, term: 'Marvel Movies'}).then((res) => {
  console.log(res.items)
})

const App = () => {
  return <div>
    <SearchBar/>
    <br/>
    <VideoList/>
  </div>
}


ReactDOM.render(<App/>, document.querySelector('.container'))
