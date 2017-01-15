"use strict"

var assert = require('chai').assert

var GifModel = require('../GifModel')

describe( 'GifModel', () => {

  var testGifModel

  beforeEach( () => {
    testGifModel = new GifModel( 'http://test-url' )
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

})
