import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list_item'
import Ysearch from './fetchYoutube'
import VideoDetail from './components/video_detail'

const API_KEY_YOUTUBE = 'AIzaSyAgFZc8KejemmzoR6qzunRH4OyoYWXg34Y'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  componentDidMount() {
    Ysearch({key: API_KEY_YOUTUBE, term: 'Marvel Movies'}).then((res) => {
      const videos = res.items
      this.setState({videos, selectedVideo: videos[0]})
    }).catch((e) => console.log(e))
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={(video) => {
            this.setState(() => ({
              selectedVideo: video
            }))
          }}
        />
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.querySelector('.container'))
