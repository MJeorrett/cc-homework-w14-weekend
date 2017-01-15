const assert = require('chai').assert

const GifSetModel = require('../GifSetModel')

describe( "GifSetModel", () => {

  let newGifSetModel;
  let loadedGifSetModel;

  beforeEach( () => {
    newGifSetModel = new GifSetModel()
    loadedGifSetModel = new GifSetModel({
      title: "Banana",
      questions: [
        "First question",
        "Second question",
        "Third question"
      ],
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

  it( "should add question to questions array if not already included", () => {
    loadedGifSetModel.addQuestionToGif( "first_url", "new question" )
    assert.notEqual( -1, loadedGifSetModel.state.questions.indexOf( "new question" ))
    assert.equal( 4, loadedGifSetModel.state.questions.length )
  })

  it( "should not add question to questions array if already included", () => {
    loadedGifSetModel.addQuestionToGif( "second_url", "First question" )
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
})
