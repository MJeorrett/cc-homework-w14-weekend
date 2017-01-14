import React from 'react'

import { Link } from 'react-router'

class IndexContainer extends React.Component {

  render() {
    return (
      <nav>
        <span>Index</span>
        <Link to="/new">New</Link>
      </nav>
    )
  }

}

export default IndexContainer
