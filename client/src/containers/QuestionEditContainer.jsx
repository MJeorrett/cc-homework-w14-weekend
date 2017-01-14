import React from 'react'

import StorageManager from '../helpers/StorageManager'
import GifGridComponent from './GifGridComponent'

class QuestionEditContainer extends React.Component {

  render () {

    const title = this.props.params.title
    const gifSet = StorageManager.loadGifSet( title )

    return (
      <div>
        <p>Editing gif-set: { title }</p>
        <div className="half-width">
          <GifGridComponent
            imageUrls={ gifSet }
            gifCount={ gifSet.length }
            onGifSelected={ "" }
          />
        </div>
      </div>
    )
  }

}

export default QuestionEditContainer
