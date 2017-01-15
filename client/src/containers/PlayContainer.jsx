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
      faceupGifs: [],
      message: "",
      askedQuestions: [],
      gameFinished: false
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
      questions: this.gifSetModel.state.questions,
      faceupGifs: this.gifSetModel.gifUrls()
    })
  }

  handleGifSelected( url, index ) {

    if ( this.state.gameFinished ) return

    const newGifUrls = this.state.gifUrls.slice(0)
    const faceupGifs = this.state.faceupGifs.slice(0)

    if ( newGifUrls[index] === "/eliminated.jpg" ) {
      newGifUrls[index] = this.gifSetModel.gifUrls()[index]
      faceupGifs.push( url )
    }
    else {
      newGifUrls[index] = '/eliminated.jpg'
      faceupGifs.splice( faceupGifs.indexOf( url ), 1 )
    }

    let winMessage = ""
    let gameFinished = false
    if ( faceupGifs.length === 1 ) {
      gameFinished = true
      winMessage = `You won in ${this.state.askedQuestions.length} moves!`
      if ( faceupGifs[0] !== this.state.selectedGif.url ) {
        winMessage = 'Incorrect, you loose!'
      }
    }

    this.setState({
      gifUrls: newGifUrls,
      winMessage: winMessage,
      faceupGifs: faceupGifs,
      gameFinished: gameFinished
    })
  }

  handleQuestionSelected( question ) {

    if ( this.state.gameFinished ) return

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
        <span>{ this.state.winMessage }</span>
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
