import React from 'react'

import SelectedGifsContainer from './SelectedGifsContainer'
import GifFinderContainer from './GifFinderContainer'
import GifGridComponent from './GifGridComponent'

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
    this.handleGifDeselected = this.handleGifDeselected.bind( this )
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
    const newSearchResults = this.state.searchResultUrls.slice(0)
    newSearchResults.splice( newSearchResults.indexOf( gifUrl ), 1 )
    this.updateState( newSelectedGifUrls, newSearchResults )
  }

  handleGifDeselected( gifUrl ) {
    const newSelectedGifUrls = this.state.selectedGifUrls.slice( 0 )
    newSelectedGifUrls.splice( newSelectedGifUrls.indexOf( gifUrl ), 1 )
    const newSearchResults = this.state.searchResultUrls.slice(0)
    newSearchResults.push( gifUrl )
    this.updateState( newSelectedGifUrls, newSearchResults )
  }

  updateState( newSelectedGifUrls, newSearchResults ) {
    this.setState({
      searchResultUrls: newSearchResults,
      selectedGifUrls: newSelectedGifUrls,
      gifCount: Math.max( newSearchResults.length, newSelectedGifUrls.length )
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
            <GifGridComponent
              imageUrls={ this.state.selectedGifUrls }
              gifCount={ this.state.gifCount }
              onGifSelected={ this.handleGifDeselected }
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
