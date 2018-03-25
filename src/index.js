import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list_item'
import Ysearch from './fetchYoutube'

const API_KEY_YOUTUBE = 'AIzaSyAgFZc8KejemmzoR6qzunRH4OyoYWXg34Y'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }
    Ysearch({key: API_KEY_YOUTUBE, term: 'Marvel Movies'}).then((res) => {
      console.log(res.items)
      this.setState(() => {
        return {videos: res.items}
      })
    }).catch((e) => console.log(e))
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <br/>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.querySelector('.container'))
