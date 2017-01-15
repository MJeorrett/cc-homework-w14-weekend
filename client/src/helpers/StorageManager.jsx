var GifSetModel = require('../models/GifSetModel')

const StorageManager = {
  saveGifSet( gifSetModel ) {
    localStorage.setItem( gifSetModel.title, JSON.stringify( gifSetModel.state ) );
  },
  loadGifSet( title ) {
    console.log( "loading gif set:", title );
    console.log( "data", localStorage.getItem( title ) );
    const data = JSON.parse( localStorage.getItem( title ) )
    return new GifSetModel( data )
  }
}

export default StorageManager
