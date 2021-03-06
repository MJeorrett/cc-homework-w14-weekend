import React from 'react'
import { Link } from 'react-router'

import StorageManager from '../helpers/StorageManager'

class IndexContainer extends React.Component {

  render() {

    var gifSetLinks = StorageManager.getGifSetTitles().map( (setTitle, index) => {
      return <Link className="index-link" key={ index } to={ "play/" + setTitle }>{ setTitle }</Link>
    })

    return (
      <div>
        <nav>
          <h2>Index</h2>
          <Link className="link" to="/new">New</Link>
        </nav>
        <div className="content-container">
          { gifSetLinks }
        </div>
      </div>
    )
  }

}

export default IndexContainer
