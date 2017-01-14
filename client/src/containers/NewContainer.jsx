import React from 'react'

import SearchInputContainer from './SearchInputContainer'

import fetchGifs from '../helpers/GifFetcher'

class NewContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      title: ""
    }
    this.handleTitleChanged = this.handleTitleChanged.bind( this )
    this.getImages = this.getImages.bind( this )
  }

  handleTitleChanged( ev ) {
    var newTitle = ev.target.value
    this.setState({
      title: newTitle
    })
  }

  getImages( searchTerm ) {
    console.log( "getting images for search term:", searchTerm )
    fetchGifs( searchTerm, ( images ) => {
      console.log( "found images:", images )
    })
  }

  render() {
    return (
      <nav>
        <input
          type="text"
          onChange={ this.handleTitleChanged }
          value={ this.props.title }
          placeholder="Enter title for card set"
        />
      <SearchInputContainer
          urlEnteredCallback={ this.getImages }
        />
      </nav>
    )
  }

}

export default NewContainer
