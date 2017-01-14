import React from 'react'

import SelectedGifsContainer from './SelectedGifsContainer'
import GifFinderContainer from './GifFinderContainer'

class NewContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      title: "",
      searchResultUrls: [],
      selectedGifUrls: []
    }
    this.handleTitleChanged = this.handleTitleChanged.bind( this )
    this.updateSearchResults = this.updateSearchResults.bind( this )
  }

  handleTitleChanged( ev ) {
    var newTitle = ev.target.value
    this.setState({
      title: newTitle
    })
  }

  updateSearchResults( newSearchResults ) {
    this.setState({
      searchResultUrls: newSearchResults
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
          <SelectedGifsContainer

          />
          <GifFinderContainer
            gifsToDisplay={ this.state.searchResultUrls }
            updateSearchResults={ this.updateSearchResults }
          />
        </div>
      </div>
    )
  }

}

export default NewContainer
