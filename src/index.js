import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list_item'
import Ysearch from './fetchYoutube'
import VideoDetail from './components/video_detail'
import _ from 'lodash'

const API_KEY_YOUTUBE = 'AIzaSyAgFZc8KejemmzoR6qzunRH4OyoYWXg34Y'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null,
      searchInput: 'Marvel Movies'
    }
  }

  searchYoutube(searchInput) {
    Ysearch({key: API_KEY_YOUTUBE, term: searchInput}).then((res) => {
      const videos = res.items
      this.setState({videos, selectedVideo: videos[0]})
    }).catch((e) => console.log(e))
  }

  componentDidMount() {
    this.searchYoutube(this.state.searchInput)
  }

  render() {
    const videoSearch = _.debounce((newInput) => {
      this.searchYoutube((newInput))
    }, 300)

    return (
      <div>
        <SearchBar
          searchInput={this.state.searchInput}
          initialSearch={this.state.searchInput}
          onVideoSearch={videoSearch}
        />
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
