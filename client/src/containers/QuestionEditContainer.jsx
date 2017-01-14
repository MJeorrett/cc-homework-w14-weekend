import React from 'react'

import StorageManager from '../helpers/StorageManager'
import GifGridComponent from './GifGridComponent'
import QuestionListContainer from './QuestionListContainer'

class QuestionEditContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      questions: []
    }
    this.addQuestion = this.addQuestion.bind( this )
  }

  addQuestion( question ) {
    const newQuestions = this.state.questions.slice(0)
    newQuestions.push( question )
    this.setState({
      questions: newQuestions
    })
  }

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
          <QuestionListContainer
            addQuestionCallback={ this.addQuestion }
          />
        </div>
      </div>
    )
  }

}

export default QuestionEditContainer
