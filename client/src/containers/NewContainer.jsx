import React from 'react'

import SelectedGifsContainer from './SelectedGifsContainer'
import GifFinderContainer from './GifFinderContainer'
import GifGridComponent from './GifGridComponent'
import ButtonLinkComponent from '../components/ButtonLinkComponent'

class NewContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      title: "",
      searchResultUrls: [],
      selectedGifUrls: [],
      gifCount: 0,
      nextDisabled: true
    }
    this.handleTitleChanged = this.handleTitleChanged.bind( this )
    this.updateSearchResults = this.updateSearchResults.bind( this )
    this.handleGifSelected = this.handleGifSelected.bind( this )
    this.handleGifDeselected = this.handleGifDeselected.bind( this )
  }

  handleTitleChanged( ev ) {
    const newTitle = ev.target.value
    const nextDisabled = newTitle.length < 4
    this.setState({
      title: newTitle,
      nextDisabled: nextDisabled
    })
  }

  updateSearchResults( newSearchResults ) {

    this.state.selectedGifUrls.forEach( (gifUrl) => {
      const indexInResults = newSearchResults.indexOf( gifUrl )
      if ( indexInResults !== -1 ) newSearchResults.splice( indexInResults, 1 )
    })

    this.setState({
      searchResultUrls: newSearchResults,
      gifCount: Math.max( newSearchResults.length, this.state.selectedGifUrls.length )
    })
  }

  handleGifSelected( gifUrl ) {
    const newSelectedGifUrls = this.state.selectedGifUrls.slice(0)
    if ( newSelectedGifUrls.indexOf( gifUrl ) === -1 ) {
      newSelectedGifUrls.push( gifUrl )
    }

    const newSearchResults = this.state.searchResultUrls.slice(0)
    newSearchResults.splice( newSearchResults.indexOf( gifUrl ), 1 )

    this._updateState( newSelectedGifUrls, newSearchResults )
  }

  handleGifDeselected( gifUrl ) {
    const newSelectedGifUrls = this.state.selectedGifUrls.slice( 0 )
    newSelectedGifUrls.splice( newSelectedGifUrls.indexOf( gifUrl ), 1 )

    const newSearchResults = this.state.searchResultUrls.slice(0)
    if ( newSearchResults.indexOf( gifUrl ) === -1 ) {
      newSearchResults.push( gifUrl )
    }

    this._updateState( newSelectedGifUrls, newSearchResults )
  }

  _updateState( newSelectedGifUrls, newSearchResults ) {
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
          <ButtonLinkComponent
            href={ `/gif-sets/${this.state.title}` }
            disabled={ this.state.nextDisabled }
            text="Next"
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
