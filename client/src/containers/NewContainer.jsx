import React from 'react'

import SelectedGifsContainer from './SelectedGifsContainer'
import GifFinderContainer from './GifFinderContainer'
import ImageGridComponent from './ImageGridComponent'

class NewContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      title: "",
      searchResultUrls: [],
      selectedGifUrls: [],
      gifCount: 0
    }
    this.handleTitleChanged = this.handleTitleChanged.bind( this )
    this.updateSearchResults = this.updateSearchResults.bind( this )
    this.handleGifSelected = this.handleGifSelected.bind( this )
  }

  handleTitleChanged( ev ) {
    var newTitle = ev.target.value
    this.setState({
      title: newTitle
    })
  }

  updateSearchResults( newSearchResults ) {
    this.setState({
      searchResultUrls: newSearchResults,
      gifCount: Math.max( newSearchResults.length, this.state.selectedGifUrls.length )
    })
  }

  handleGifSelected( gifUrl ) {
    const newSelectedGifUrls = this.state.selectedGifUrls.slice(0)
    newSelectedGifUrls.push( gifUrl )
    this.setState({
      selectedGifUrls: newSelectedGifUrls,
      gifCount: Math.max( this.state.searchResultUrls.length, newSelectedGifUrls.length )
    })
  }

  render() {
    return (
      <div>
        <nav>
          <input
            type="text"
            onChange={ this.handleTitleChanged }
            value={ this.props.title }
            placeholder="Enter title for card set"
          />
        </nav>
        <div>
          <div className="half-width">
            <ImageGridComponent
              imageUrls={ this.state.selectedGifUrls }
              gifCount={ this.state.gifCount }
            />
          </div>
          <GifFinderContainer
            gifsToDisplay={ this.state.searchResultUrls }
            updateSearchResults={ this.updateSearchResults }
            onGifSelected={ this.handleGifSelected }
            gifCount={ this.state.gifCount }
          />
        </div>
      </div>
    )
  }

}

export default NewContainer
