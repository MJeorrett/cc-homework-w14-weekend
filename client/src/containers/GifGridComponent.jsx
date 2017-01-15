import React from 'react'

class GifGridComponent extends React.Component {

  constructor() {
    super()
    this.handleGifClicked = this.handleGifClicked.bind( this )
  }

  handleGifClicked( ev ) {
    if ( this.props.onGifSelected ) this.props.onGifSelected( ev.target.src, ev.target.id )
  }

  render() {
    const imageElements = this.props.imageUrls.map( (imageUrl, index) => {
      const className = this.props.selectedGifs.indexOf( imageUrl ) !== -1 ? "selected-image" : ""
      return (
        <img
          key={ index }
          id={ index }
          className={ className }
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
