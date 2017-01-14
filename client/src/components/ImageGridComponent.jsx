import React from 'react'

const ImageGridComponent = function({ imageUrls }) {
  var imageElements = imageUrls.map( (imageUrl) => {
    return <img key={ imageUrl } src={ imageUrl } />
  })

  return (
    <div>
      { imageElements }
    </div>
  )
}

export default ImageGridComponent
