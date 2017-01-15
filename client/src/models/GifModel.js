"use strict"

class GifModel {
  constructor( url, questions ) {
    this.url = url
    this.questions = questions || []
  }
}

module.exports = GifModel
