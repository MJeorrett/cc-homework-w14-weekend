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
      originalUrls: []
    }
    this.handleGifSelected = this.handleGifSelected.bind( this )
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
    console.log("index:", index);
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

  render() {
    return (
      <div>
        <h2>{ this.props.params.title }</h2>
        <QuestionSelectComponent
          options={ this.state.questions }
        />
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
