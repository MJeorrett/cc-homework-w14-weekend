import React from 'react'

import StorageManager from '../helpers/StorageManager'
import GifGridComponent from './GifGridComponent'
import QuestionSelectComponent from '../components/QuestionSelectComponent'

class PlayContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      selectedGif: undefined,
      gifUrls: [],
      questions: [],
      selectedQuestion: "please-select",
      originalUrls: [],
      message: "",
      askedQuestions: []
    }
    this.handleGifSelected = this.handleGifSelected.bind( this )
    this.handleQuestionSelected = this.handleQuestionSelected.bind( this )
  }

  componentDidMount() {
    this.gifSetModel = StorageManager.loadGifSet( this.props.params.title )
    const gifs = this.gifSetModel.state.gifs
    const selectedGifIndex = Math.floor( Math.random() * gifs.length )
    this.setState({
      selectedGif: gifs[selectedGifIndex],
      gifUrls: this.gifSetModel.gifUrls(),
      questions: this.gifSetModel.state.questions
    })
  }

  handleGifSelected( url, index ) {
    const newGifUrls = this.state.gifUrls.slice(0)
    if ( newGifUrls[index] === "/eliminated.jpg" ) {
      newGifUrls[index] = this.gifSetModel.gifUrls()[index]
    }
    else {
      newGifUrls[index] = '/eliminated.jpg'
    }
    this.setState({
      gifUrls: newGifUrls
    })
  }

  handleQuestionSelected( question ) {
    const trueGifs = this.gifSetModel.gifsWithQuestion( question )
    let message = "false"
    if ( trueGifs.indexOf( this.state.selectedGif.url ) !== -1 ) message = "true"
    const askedQuestions = this.state.askedQuestions
    askedQuestions.push( question )
    this.setState({
      message: message,
      selectedQuestion: question,
      askedQuestions: askedQuestions
    })
  }

  render() {
    return (
      <div>
        <h2>{ this.props.params.title }</h2>
        <QuestionSelectComponent
          options={ this.state.questions }
          onQuestionSelected={ this.handleQuestionSelected }
          selectedQuestion={ this.state.selectedQuestion }
          askedQuestions={ this.state.askedQuestions }
        />
      <span>{ this.state.message }</span>
        <GifGridComponent
          imageUrls={ this.state.gifUrls }
          onGifSelected={ this.handleGifSelected }
          selectedGifs={ [] }
        />
      </div>
    )
  }

}

export default PlayContainer
