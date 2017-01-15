"use strict"

var assert = require('chai').assert

var GifSetModel = require('./GifSetModel')

describe( "GifSetModel", () => {

  var newGifSetModel;

  beforeEach( () => {
    newGifSetModel = new GifSetModel()
  })

// empty constructor tests
  it( "should start with blank title", () => {
    assert.equal( "", newGifSetModel.title )
  })

  it( "should start with 0 questions", () => {
    assert.equal( 0, newGifSetModel.questions.length )
  })

  it( "should start with 0 gifs", () => {
    assert.equal( 0, newGifSetModel.gifs.length )
  })
})
