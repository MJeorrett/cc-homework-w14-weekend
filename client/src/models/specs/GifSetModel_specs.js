"use strict"

var assert = require('chai').assert

var GifSetModel = require('../GifSetModel')

describe( "GifSetModel", () => {

  var newGifSetModel;
  var loadedGifSetModel;

  beforeEach( () => {
    newGifSetModel = new GifSetModel()
    loadedGifSetModel = new GifSetModel({
      title: "Banana",
      gifs: [
        {
          url: "first_url",
          questions: [
            "First question",
            "Second question",
            "Third question"
          ]
        },
        {
          url: "second_url",
          questions: [
            "Second question"
          ]
        }
      ]
    })
  })

// empty constructor tests
  it( "should start with blank title", () => {
    assert.equal( "", newGifSetModel.title )
  })

  it( "should start with 0 questions", () => {
    assert.equal( 0, newGifSetModel.questions().length )
  })

  it( "should start with 0 gifs", () => {
    assert.equal( 0, newGifSetModel.gifs.length )
  })

// loading gifset test
  it( "should have title passed in constructor", () => {
    assert.equal( "Banana", loadedGifSetModel.title )
  })

  it( "should have number of gifs passed in constructor", () => {
    assert.equal( 2, loadedGifSetModel.gifs.length )
  })

  it( "should have number of unique questions passed in constructor", () => {
    assert.equal( 3, loadedGifSetModel.questions().length )
  })

})
