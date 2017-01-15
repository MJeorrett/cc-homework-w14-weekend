"use strict"

var assert = require('chai').assert

var GifSetModel = require('./GifSetModel')

describe( "GifSetModel", () => {

  var newGifSetModel;

  beforeEach( () => {
    newGifSetModel = new GifSetModel()
  })

  it( "should start with blank title", () => {
    assert.equal( "", newGifSetModel.title )
  })
})
