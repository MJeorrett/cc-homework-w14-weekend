const StorageManager = {
  saveGifSet( title, gifSet ) {
    localStorage.setItem( title, JSON.stringify( gifSet ) );
  },
  loadGifSet( title, callback ) {
    console.log( "loading gif set:", title );
    console.log( "data", localStorage.getItem( title ) );
    return JSON.parse( localStorage.getItem( title ) )
  }
}

export default StorageManager
