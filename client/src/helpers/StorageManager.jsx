var GifSetModel = require('../models/GifSetModel')

const StorageManager = {
  saveGifSet( gifSetModel ) {
    localStorage.setItem( gifSetModel.state.title, JSON.stringify( gifSetModel.state ) )
  },
  loadGifSet( title ) {
    const data = JSON.parse( localStorage.getItem( title ) )
    return new GifSetModel( data )
  },
  getGifSetTitles() {
    return Object.keys( localStorage )
  }
}

export default StorageManager
