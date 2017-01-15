import React from 'react'

import StorageManager from '../helpers/StorageManager'
import GifGridComponent from './GifGridComponent'
import QuestionEditContainer from './QuestionEditContainer'

class GifSetEditContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      questions: [],
      selectedQuestion: ""
    }
    this.addQuestion = this.addQuestion.bind( this )
    this.handleQuestionSelected = this.handleQuestionSelected.bind( this )
  }

  addQuestion( question ) {
    const newQuestions = this.state.questions.slice(0)
    newQuestions.push( question )
    this.setState({
      questions: newQuestions,
      selectedQuestion: question
    })
  }

  handleQuestionSelected( question ) {
    this.setState({
      selectedQuestion: question
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
          <QuestionEditContainer
            addQuestionCallback={ this.addQuestion }
            questions={ this.state.questions }
            selectedQuestion={ this.state.selectedQuestion }
            onQuestionSelected={ this.handleQuestionSelected }
          />
        </div>
      </div>
    )
  }

}

export default GifSetEditContainer
