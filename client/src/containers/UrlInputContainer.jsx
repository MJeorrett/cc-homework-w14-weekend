import React from 'react'

class UrlInputContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      url: ""
    }
    this.handleUrlChanged = this.handleUrlChanged.bind( this )
    this.handleButtonClicked = this.handleButtonClicked.bind( this )
  }

  handleUrlChanged( ev ) {
    const newUrl = ev.target.value
    this.setState({
      url: newUrl
    })
  }

  handleButtonClicked() {
    this.props.urlEnteredCallback( this.state.url )
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
        <button
          onClick={ this.handleButtonClicked }
        >
          Get Images
        </button>
      </div>
    )
  }

}

export default UrlInputContainer
