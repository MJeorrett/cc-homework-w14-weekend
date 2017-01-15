"use strict"
var GifModel = require('./GifModel')

class GifSetModel {
  constructor( data ) {
    if ( !data ) data = {}

    this.title = data.title || ""

    this.gifs = []
    if ( data.gifs ) {
      this.gifs = data.gifs.map( (gifData) => {
        return new GifModel( gifData )
      })
    }
  }

  questions() {
    var questions = []
    this.gifs.forEach( (gifModel) => {
      gifModel.questions.forEach( (question) => {
        if ( questions.indexOf( question ) === -1 ) {
          questions.push( question )
        }
      })
    })
    return questions
  }

  addQuestionToGif( gifUrl, question ) {
    var gif = this.gifs.find( (gif) => {
      return gif.url === gifUrl
    })
    gif.addQuestion( question )
  }

  addGif( url ) {
    this.gifs.push( new GifModel({ url: url }) )
  }
}

module.exports = GifSetModel
