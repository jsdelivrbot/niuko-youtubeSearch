import React from 'react'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: ''
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input type="string" onChange={(e) => {
          console.log(e.target.value)
          this.setState({
            searchInput: e.target.value
          })
        }}/> <br/>
        {this.state.searchInput}
      </div>
    )
  }
}

export default SearchBar
