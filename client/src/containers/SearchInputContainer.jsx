import React from 'react'

class SearchInputContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      searchTerm: "",
      getImagesDisabled: true
    }
    this.handleInputChanged = this.handleInputChanged.bind( this )
    this.handleButtonClicked = this.handleButtonClicked.bind( this )
  }

  handleInputChanged( ev ) {
    const newSearchTerm = ev.target.value
    this.setState({
      searchTerm: newSearchTerm,
      getImagesDisabled: newSearchTerm.length < 4
    })
  }

  handleButtonClicked() {
    this.props.urlEnteredCallback( this.state.searchTerm )
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={ this.handleInputChanged }
          value={ this.state.searchTerm }
          placeholder="Enter search term"
        />
        <button
          onClick={ this.handleButtonClicked }
          disabled={ this.state.getImagesDisabled }
        >
          Get Images
        </button>
      </div>
    )
  }

}

export default SearchInputContainer
