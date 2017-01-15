const GifModel = require('./GifModel')

class GifSetModel {
  constructor( data ) {
    if ( !data ) data = {}
    this.state = {}
    this.state.title = data.title || ""

    this.state.gifs = []
    if ( data.gifs ) {
      this.state.gifs = data.gifs.map( (gifData) => {
        return new GifModel( gifData )
      })
    }

    this.state.questions = []
    if ( data.questions ) {
      this.state.questions = data.questions
    }
  }

  addQuestionToGif( gifUrl, question ) {
    const gif = this.state.gifs.find( (gif) => {
      return gif.url === gifUrl
    })
    gif.addQuestion( question )
    if ( this.state.questions.indexOf( question ) === -1 ) {
      this.state.questions.push( question )
    }
  }

  addGif( url ) {
    this.state.gifs.push( new GifModel({ url: url }) )
  }

  removeGif( url ) {
    const gif = this.state.gifs.find( (gif) => {
      return gif.url === url
    })
    const index = this.state.gifs.indexOf( gif )
    if ( index !== -1 ) this.state.gifs.splice( index, 1 )
  }

  gifUrls() {
    return this.state.gifs.map( (gif) => {
      return gif.url
    })
  }
}

module.exports = GifSetModel
