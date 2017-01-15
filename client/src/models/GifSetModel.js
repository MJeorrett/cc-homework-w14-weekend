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
}

module.exports = GifSetModel
