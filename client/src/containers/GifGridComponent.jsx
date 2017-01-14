import React from 'react'

class GifGridComponent extends React.Component {

  constructor() {
    super()
    this.handleGifClicked = this.handleGifClicked.bind( this )
  }

  handleGifClicked( ev ) {
    if ( this.props.onGifSelected ) this.props.onGifSelected( ev.target.src )
  }

  render() {
    const imageElements = this.props.imageUrls.map( (imageUrl, index) => {
      return (
        <img
          key={ index }
          src={ imageUrl }
          onClick={ this.handleGifClicked }
        />
      )
    })

    return (
      <div>
        { imageElements }
      </div>
    )
  }
}

export default GifGridComponent
