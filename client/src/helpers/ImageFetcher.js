import XmlHttpHelper from './XmlHttpHelper'

const imageFetcher = function( searchTerm, callBack ) {
  const encodedSearchTerm = searchTerm.replace( ' ', '+' )
  let url = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC'
  url += '&q=' + encodedSearchTerm
  XmlHttpHelper.get( url, (resultsObj) => {
    const images = resultsObj.data.map( (resultData ) => {
      return resultData.images.downsized_medium.url
    })
    callBack( images )
  })
}

export default imageFetcher
