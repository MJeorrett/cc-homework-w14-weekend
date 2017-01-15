import React from 'react'

import StorageManager from '../helpers/StorageManager'
import GifGridComponent from './GifGridComponent'
import QuestionEditContainer from './QuestionEditContainer'
var GifSetModel = require('../models/GifSetModel')

class GifSetEditContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      questions: [],
      gifUrls: [],
      selectedQuestion: ""
    }
    this.addQuestion = this.addQuestion.bind( this )
    this.handleQuestionSelected = this.handleQuestionSelected.bind( this )
  }

  componentDidMount() {
    this.gifSetModel = StorageManager.loadGifSet( this.props.params.title )
    console.log("gifSetModel:", this.gifSetModel);
    this.setState({
      title: this.gifSetModel.state.title,
      questions: this.gifSetModel.state.questions.slice(0),
      gifUrls: this.gifSetModel.gifUrls()
    })
  }

  addQuestion( question ) {
    this.gifSetModel.addQuestion( question )
    this.setState({
      questions: this.gifSetModel.state.questions,
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
        <h2>{ this.state.title }</h2>
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
