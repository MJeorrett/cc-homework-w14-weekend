import React from 'react'

import TextInputContainer from './TextInputContainer'
import GifGridComponent from './GifGridComponent'

import fetchGifs from '../helpers/GifFetcher'

class GifFinderContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      imageUrls: []
    }
    this.getImages = this.getImages.bind( this )
  }

  getImages( searchTerm ) {
    console.log( "getting images for search term:", searchTerm )
    fetchGifs( searchTerm, ( imageUrls ) => {
      this.props.updateSearchResults( imageUrls )
    })
  }

  render() {
    return (
      <div className="half-width">
        <TextInputContainer
          urlEnteredCallback={ this.getImages }
        />
      <GifGridComponent
        imageUrls={ this.props.gifsToDisplay }
        onGifSelected={ this.props.onGifSelected }
        gifCount={ this.props.gifCount }
      />
      </div>
    )
  }

}

export default GifFinderContainer
