"use strict"

class GifModel {
  constructor( url, questions ) {
    this.url = url
    this.questions = questions || []
  }

  addQuestion( question ) {
    this.questions.push( question )
  }

  removeQuestion( question ) {
    var questionIndex = this.questions.indexOf( question )
    if (  questionIndex !== -1 ) {
      this.questions.splice( questionIndex, 1 )
    }
  }
}

module.exports = GifModel
