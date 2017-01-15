import React from 'react'

import StorageManager from '../helpers/StorageManager'
import GifGridComponent from './GifGridComponent'
import QuestionEditContainer from './QuestionEditContainer'
var GifSetModel = require('../models/GifSetModel')

class GifSetEditContainer extends React.Component {

  constructor() {
    super()
    this.gifSetModel = new GifSetModel( StorageManager.loadGifSet( title ) )
    this.state = {
      questions: [],
      gifUrls: [],
      selectedQuestion: ""
    }
    this.addQuestion = this.addQuestion.bind( this )
    this.handleQuestionSelected = this.handleQuestionSelected.bind( this )
  }

  componentDidLoad() {
    this.gifSetModel = StorageManager.loadGifSet( this.props.params.title )
    this.setState({
      questions: this.gifSetModel.state.questions.slice(0),
      gifUrls: this.gifSetModel.gifUrls()
    })
  }

  addQuestion( question ) {
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
    return (
      <div>
        <h2>{ title }</h2>
        <div className="content-container">
          <div className="half-width">
            <GifGridComponent
              imageUrls={ this.state.gifUrls }
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
