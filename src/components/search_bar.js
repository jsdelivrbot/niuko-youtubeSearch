import React from 'react'

const SearchBar = ({searchInput, onChangeInput}) => {
  return (
    <div className="search-bar">
      <input
        type="string"
        value={searchInput}
        onChange={(e)=>{
          onChangeInput(e.target.value)
        }}
      />
    </div>
  )
}

export default SearchBar
