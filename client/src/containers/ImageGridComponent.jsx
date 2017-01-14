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
      const url = this.props.imageUrls[i]
      const src = url || "/blank_image.jpg"
      imageElements.push(
        <img
          key={ i }
          className={ url ? 'image' : '' }
          src={ src }
          onClick={ url ? this.handleGifClicked : '' }
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
