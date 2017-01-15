class GifModel {
  constructor( data ) {
    if ( !data ) data = {}
    this.url = data.url
    this.questions = data.questions || []
  }

  addQuestion( question ) {
    this.questions.push( question )
  }

  removeQuestion( question ) {
    const questionIndex = this.questions.indexOf( question )
    if (  questionIndex !== -1 ) {
      this.questions.splice( questionIndex, 1 )
    }
  }
}

module.exports = GifModel
