import React from 'react'

import StorageManager from '../helpers/StorageManager'
import GifGridComponent from './GifGridComponent'
import QuestionListContainer from './QuestionListContainer'

class QuestionEditContainer extends React.Component {

  render () {

    const title = this.props.params.title
    const gifSet = StorageManager.loadGifSet( title )

    return (
      <div>
        <h2>{ title }</h2>
        <div className="content-container">
          <div className="half-width">
            <GifGridComponent
              imageUrls={ gifSet }
              gifCount={ gifSet.length }
              onGifSelected={ "" }
            />
          </div>
          <QuestionListContainer />
        </div>
      </div>
    )
  }

}

export default QuestionEditContainer
