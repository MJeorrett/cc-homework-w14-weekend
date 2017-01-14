import React from 'react'

class ImageGridComponent extends React.Component {

  constructor() {
    super()
    this.handleGifClicked = this.handleGifClicked.bind( this )
  }

  handleGifClicked( ev ) {
    if ( this.props.onGifSelected ) this.props.onGifSelected( ev.target.src )
  }

  render() {
    var imageElements = []
    for( let i = 0; i < this.props.gifCount; i++ ) {
      const src = this.props.imageUrls[i] || "";
      imageElements.push(
        <img
          key={ i }
          src={ src }
          onClick={ this.handleGifClicked }
        />
      )
    }

    return (
      <div>
        { imageElements }
      </div>
    )
  }
}

export default ImageGridComponent
