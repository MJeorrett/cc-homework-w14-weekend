import React from 'react'

import StorageManager from '../helpers/StorageManager'

class QuestionEditContainer extends React.Component {

  render () {

    const title = this.props.params.title
    const gifSet = StorageManager.loadGifSet( title )

    return (
      <div>
        <p>Editing gif-set { title }</p>
        <p>Data: { gifSet }</p>
      </div>
    )
  }

}

export default QuestionEditContainer
