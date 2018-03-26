import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: this.props.initialSearch
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="string"
          value={this.state.term}
          onChange={(e) => {
            this.setState({term: e.target.value})
            this.props.onVideoSearch(e.target.value)
          }}
        />
      </div>
    )
  }
}

export default SearchBar
