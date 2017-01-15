import React from 'react'

import StorageManager from '../helpers/StorageManager'
import GifGridComponent from './GifGridComponent'
import QuestionEditContainer from './QuestionEditContainer'
import ButtonLinkComponent from '../components/ButtonLinkComponent'
var GifSetModel = require('../models/GifSetModel')

class GifSetEditContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      questions: [],
      gifUrls: [],
      selectedQuestion: "",
      gifsWithSelectedQuestion: []
    }
    this.addQuestion = this.addQuestion.bind( this )
    this.handleQuestionSelected = this.handleQuestionSelected.bind( this )
    this.addSelectedQuestionToGif = this.addSelectedQuestionToGif.bind( this )
    this.handleSaveClicked = this.handleSaveClicked.bind( this )
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
      selectedQuestion: question,
      gifsWithSelectedQuestion: []
    })
  }

  handleQuestionSelected( question ) {
    this.setState({
      selectedQuestion: question,
      gifsWithSelectedQuestion: this.gifSetModel.gifsWithQuestion( question )
    })
  }

  addSelectedQuestionToGif( gifUrl ) {
    const selectedQuestion = this.state.selectedQuestion
    if ( selectedQuestion ) this.gifSetModel.addQuestionToGif( gifUrl, selectedQuestion )
    this.setState({
      gifsWithSelectedQuestion: this.gifSetModel.gifsWithQuestion( selectedQuestion )
    })
  }

  handleSaveClicked() {
    StorageManager.saveGifSet( this.gifSetModel )
  }

  render () {
    return (
      <div>
        <nav>
          <h2>{ this.state.title }</h2>
          <ButtonLinkComponent
            href="/"
            disabled={ false }
            text="Save"
            onClickCallback={ this.handleSaveClicked }
          />
        </nav>
        <div className="content-container">
          <div className="half-width">
            <GifGridComponent
              imageUrls={ this.state.gifUrls }
              onGifSelected={ this.addSelectedQuestionToGif }
              selectedGifs={ this.state.gifsWithSelectedQuestion }
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
