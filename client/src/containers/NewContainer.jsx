import React from 'react'

import SelectedGifsContainer from './SelectedGifsContainer'
import GifFinderContainer from './GifFinderContainer'

class NewContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      title: ""
    }
    this.handleTitleChanged = this.handleTitleChanged.bind( this )
  }

  handleTitleChanged( ev ) {
    var newTitle = ev.target.value
    this.setState({
      title: newTitle
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
          <SelectedGifsContainer />
          <GifFinderContainer />
        </div>
      </div>
    )
  }

}

export default NewContainer
