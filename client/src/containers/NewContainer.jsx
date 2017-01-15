import React from 'react'

import GifFinderContainer from './GifFinderContainer'
import GifGridComponent from './GifGridComponent'
import ButtonLinkComponent from '../components/ButtonLinkComponent'
import StorageManager from '../helpers/StorageManager'
var GifSetModel = require('../models/GifSetModel')

class NewContainer extends React.Component {

  constructor() {
    super()
    this.gifSetModel = new GifSetModel()
    this.state = {
      title: "",
      searchResultUrls: [],
      selectedGifUrls: [],
      nextDisabled: true
    }
    this.handleTitleChanged = this.handleTitleChanged.bind( this )
    this.updateSearchResults = this.updateSearchResults.bind( this )
    this.handleGifSelected = this.handleGifSelected.bind( this )
    this.handleGifDeselected = this.handleGifDeselected.bind( this )
    this.handleNextClicked = this.handleNextClicked.bind( this )
  }

  handleTitleChanged( ev ) {
    const newTitle = ev.target.value
    const nextDisabled = newTitle.length < 4
    this.gifSetModel.title = newTitle
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
      searchResultUrls: newSearchResults
    })
  }

  handleGifSelected( gifUrl ) {
    this.gifSetModel.addGif( gifUrl )

    const newSearchResults = this.state.searchResultUrls.slice(0)
    newSearchResults.splice( newSearchResults.indexOf( gifUrl ), 1 )

    this._updateState( newSearchResults )
  }

  handleGifDeselected( gifUrl ) {
    this.gifSetModel.removeGif( gifUrl )

    const newSearchResults = this.state.searchResultUrls.slice(0)
    if ( newSearchResults.indexOf( gifUrl ) === -1 ) {
      newSearchResults.push( gifUrl )
    }

    this._updateState( newSearchResults )
  }

  handleNextClicked() {
    StorageManager.saveGifSet( this.gifSetModel )
  }

  _updateState( newSearchResults ) {
    this.setState({
      searchResultUrls: newSearchResults,
      selectedGifUrls: this.gifSetModel.gifUrls(),
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
            placeholder="Enter title"
          />
          <ButtonLinkComponent
            href={ `/gif-sets/${this.state.title}` }
            disabled={ this.state.nextDisabled }
            text="Next"
            onClickCallback={ this.handleNextClicked }
          />
        </nav>
        <div className="content-container">
          <div className="half-width">
            <GifGridComponent
              imageUrls={ this.state.selectedGifUrls }
              onGifSelected={ this.handleGifDeselected }
              selectedGifs={ [] }
            />
          </div>
          <GifFinderContainer
            gifsToDisplay={ this.state.searchResultUrls }
            updateSearchResults={ this.updateSearchResults }
            onGifSelected={ this.handleGifSelected }
          />
        </div>
      </div>
    )
  }

}

export default NewContainer
