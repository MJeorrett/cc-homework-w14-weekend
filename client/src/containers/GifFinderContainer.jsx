import React from 'react'

import SearchInputContainer from './SearchInputContainer'

import fetchGifs from '../helpers/GifFetcher'

class GifFinderContainer extends React.Component {

  constructor() {
    super()
    this.getImages = this.getImages.bind( this )
  }

  getImages( searchTerm ) {
    console.log( "getting images for search term:", searchTerm )
    fetchGifs( searchTerm, ( images ) => {
      console.log( "found images:", images )
    })
  }

  render() {
    return (
      <SearchInputContainer
        urlEnteredCallback={ this.getImages }
      />
    )
  }

}

export default GifFinderContainer
