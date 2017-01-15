const assert = require('chai').assert

const GifSetModel = require('../GifSetModel')

describe( "GifSetModel", () => {

  let newGifSetModel;
  let loadedGifSetModel;
  let gif1;
  let gif2;

  beforeEach( () => {
    newGifSetModel = new GifSetModel()
    gif1 = {
      url: "first_url",
      questions: [
        "First question",
        "Second question",
        "Third question"
      ]
    }
    gif2 = {
      url: "second_url",
      questions: [
        "Second question"
      ]
    }

    loadedGifSetModel = new GifSetModel({
      title: "Banana",
      questions: [
        "First question",
        "Second question",
        "Third question"
      ],
      gifs: [
        gif1,
        gif2
      ]
    })
  })

// empty constructor tests
  it( "should start with blank title", () => {
    assert.equal( "", newGifSetModel.state.title )
  })

  it( "should start with 0 questions", () => {
    assert.equal( 0, newGifSetModel.state.questions.length )
  })

  it( "should start with 0 gifs", () => {
    assert.equal( 0, newGifSetModel.state.gifs.length )
  })

// loading gifset test
  it( "should have title passed in constructor", () => {
    assert.equal( "Banana", loadedGifSetModel.state.title )
  })

  it( "should have number of gifs passed in constructor", () => {
    assert.equal( 2, loadedGifSetModel.state.gifs.length )
  })

  it( "should have number of questions passed in constructor", () => {
    assert.equal( 3, loadedGifSetModel.state.questions.length )
  })

  it( "should add question to GifModel by url", () => {
    loadedGifSetModel.addQuestionToGif( "second_url", "test question" )
    const expectedGif = loadedGifSetModel.state.gifs.find( ( gif ) => {
      return gif.url === "second_url"
    })
    assert.notEqual( -1, expectedGif.questions.indexOf( "test question" ))
  })

  it( "should add question to questions array if it does not exist already", () => {
    loadedGifSetModel.addQuestion( "New question" )
    assert.equal( 4, loadedGifSetModel.state.questions.length )
    assert.notEqual( -1, loadedGifSetModel.state.questions.indexOf( "New question" ))

  })

  it( "should not add question to questions array if it exist already", () => {
    loadedGifSetModel.addQuestion( "First question" )
    assert.equal( 3, loadedGifSetModel.state.questions.length )
  })

  it( "should add new GifModels with no questions", () => {
    newGifSetModel.addGif( "testUrl" );
    const expectedGif = newGifSetModel.state.gifs.find( (gif) => {
      return gif.url === "testUrl"
    })
    assert.equal( 0, expectedGif.questions.length )
  })

  it( "should be able to remove gif by url", () => {
    loadedGifSetModel.removeGif( "second_url" )
    assert.equal( 1, loadedGifSetModel.state.gifs.length )
    assert.equal( undefined, loadedGifSetModel.state.gifs.find( (gif) => {
      return gif.url === "second_url"
    }) )
    assert.deepEqual( {
      url: "first_url",
      questions: [
        "First question",
        "Second question",
        "Third question"
      ]
    }, loadedGifSetModel.state.gifs.find( (gif) => {
      return gif.url === "first_url"
    }) )
  })

  it( "should return array of gifUrls", () => {
    assert.deepEqual( ["first_url", "second_url"], loadedGifSetModel.gifUrls() )
  })

  it( "should return array of urls of gifs with a provided question - test 1", () => {
    const actual = loadedGifSetModel.gifsWithQuestion( "First question" )
    assert.equal( "first_url", actual[0] )
    assert.equal( 1, actual.length )
  })

  it( "should return array of urls of gifs with a provided question - test 2", () => {
    const actual = loadedGifSetModel.gifsWithQuestion( "Second question" )
    assert.equal( "first_url", actual[0] )
    assert.equal( "second_url", actual[1] )
    assert.equal( 2, actual.length )
  })
})
