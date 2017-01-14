import React from 'react'

import UrlInputContainer from './UrlInputContainer'

class NewContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      title: ""
    }
    this.handleTitleChanged = this.handleTitleChanged.bind( this )
    this.getImagesdFromApi = this.getImagesdFromApi.bind( this )
  }

  handleTitleChanged( ev ) {
    var newTitle = ev.target.value
    this.setState({
      title: newTitle
    })
    console.log( "Title changed to:", newTitle )
  }

  getImagesdFromApi( apiUrl ) {
    console.log( "getting images from", apiUrl );
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
        <UrlInputContainer
          urlEnteredCallback={ this.getImagesdFromApi }
        />
      </nav>
    )
  }

}

export default NewContainer
