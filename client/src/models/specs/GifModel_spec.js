const assert = require('chai').assert

const GifModel = require('../GifModel')

describe( 'GifModel', () => {

  let testGifModel
  let gifModelWithQuestions

  beforeEach( () => {
    testGifModel = new GifModel({
      url: 'http://test-url'
    })

    gifModelWithQuestions = new GifModel({
      url: 'test',
      questions: [
        "Where is the world?",
        "Where is Wally?",
        "How do you know me?"
      ]
    })
  })

  it( "should have url passed in constructor", () => {
    assert.equal( 'http://test-url', testGifModel.url )
  })

  it( "should have 0 length questions when none passed in constructor", () => {
    assert.equal( 0, testGifModel.questions.length )
  })

  it( "should have questions passed in constructor", () => {
      var gifModel = new GifModel({
        url: "test",
        questions: [ "mock question" ]
      })
      assert.deepEqual( [ "mock question" ], gifModel.questions )
  })

  it( "should add question passed to 'addQuestion' to questions array", () => {
    var mockQuestion = "question";
    testGifModel.addQuestion( mockQuestion )
    assert.notEqual( -1, testGifModel.questions.indexOf( mockQuestion ) )
  })

  it( "should remove question passed to 'removeQuestion' from questions array", () => {
    gifModelWithQuestions.removeQuestion( "How do you know me?" )
    assert.equal( 2, gifModelWithQuestions.questions.length )
    assert.equal( -1, gifModelWithQuestions.questions.indexOf( "How do you know me?" ))
  })

  it( "should not remove question if it doesn't match any", () => {
    gifModelWithQuestions.removeQuestion( "Question that is not there?" )
    assert.equal( 3, gifModelWithQuestions.questions.length )
  })

})
