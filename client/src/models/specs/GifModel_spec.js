"use strict"

var assert = require('chai').assert

var GifModel = require('../GifModel')

describe( 'GifModel', () => {

  var testGifModel
  var gifModelWithQuestions

  beforeEach( () => {
    testGifModel = new GifModel( 'http://test-url' )
    gifModelWithQuestions = new GifModel( 'test', [
      "Where is the world?",
      "Where is Wally?",
      "How do you know me?"
    ])
  })

  it( "should have url passed in constructor", () => {
    assert.equal( 'http://test-url', testGifModel.url )
  })

  it( "should have 0 length questions when none passed in constructor", () => {
    assert.equal( 0, testGifModel.questions.length )
  })

  it( "should have questions passed in constructor", () => {
      var mockQuestions = "mock questions"
      var gifModel = new GifModel( "test", mockQuestions )
      assert.equal( mockQuestions, gifModel.questions )
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

})
