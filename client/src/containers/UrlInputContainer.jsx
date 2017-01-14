import React from 'react'

class UrlInputContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      url: ""
    }
    this.handleUrlChanged = this.handleUrlChanged.bind( this )
  }

  handleUrlChanged( ev ) {
    const newUrl = ev.target.value
    this.setState({
      url: newUrl
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={ this.handleUrlChanged }
          value={ this.state.url }
          placeholder="Enter images API Url"
        />
      </div>
    )
  }

}

export default UrlInputContainer
