import XmlHttpHelper from './XmlHttpHelper'

const fetchGifs = function( searchTerm, callBack ) {
  const encodedSearchTerm = searchTerm.replace( ' ', '+' )
  let url = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC'
  url += '&q=' + encodedSearchTerm
  XmlHttpHelper.get( url, (resultsObj) => {
    const images = resultsObj.data.map( (resultData ) => {
      return resultData.images.fixed_height_small.url
    })
    callBack( images )
  })
}

export default fetchGifs
