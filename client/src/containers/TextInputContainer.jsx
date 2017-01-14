import React from 'react'

class TextInputContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      searchTerm: "",
      buttonDisabled: true
    }
    this.handleInputChanged = this.handleInputChanged.bind( this )
    this.handleButtonClicked = this.handleButtonClicked.bind( this )
  }

  handleInputChanged( ev ) {
    const newSearchTerm = ev.target.value
    this.setState({
      searchTerm: newSearchTerm,
      buttonDisabled: newSearchTerm.length < 4
    })
  }

  handleButtonClicked() {
    this.props.textEnteredCallback( this.state.searchTerm )
    this.setState({
      searchTerm: "",
      buttonDisabled: true
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={ this.handleInputChanged }
          value={ this.state.searchTerm }
          placeholder={ this.props.placeholder || "Enter text" }
        />
        <button
          onClick={ this.handleButtonClicked }
          disabled={ this.state.buttonDisabled }
        >
          { this.props.buttonText || "Submit" }
        </button>
      </div>
    )
  }

}

export default TextInputContainer
