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

})
