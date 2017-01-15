const StorageManager = {
  saveGifSet( title, data ) {
    localStorage.setItem( title, JSON.stringify( data ) );
  },
  loadGifSet( title ) {
    console.log( "loading gif set:", title );
    console.log( "data", localStorage.getItem( title ) );
    return JSON.parse( localStorage.getItem( title ) )
  }
}

export default StorageManager
