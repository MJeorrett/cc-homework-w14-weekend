import React from 'react'

class SearchInputContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      searchTerm: ""
    }
    this.handleInputChanged = this.handleInputChanged.bind( this )
    this.handleButtonClicked = this.handleButtonClicked.bind( this )
  }

  handleInputChanged( ev ) {
    const newSearchTerm = ev.target.value
    this.setState({
      searchTerm: newSearchTerm
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
        >
          Get Images
        </button>
      </div>
    )
  }

}

export default SearchInputContainer
