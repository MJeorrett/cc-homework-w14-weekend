import React from 'react'

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
    console.log( "Title changed to:", newTitle )
  }

  render() {
    return (
      <nav>
        <input type="text" onChange={ this.handleTitleChanged } value={ this.props.title } />
      </nav>
    )
  }

}

export default NewContainer
