import React from 'react'
import { Link } from 'react-router'

class ButtonLinkComponent extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind( this )
  }

  handleClick( ev ) {
    if ( this.props.disabled ) {
      ev.preventDefault()
    }
  }

  render() {
    return (
      <Link
        className={ this.props.disabled ? "disabled-button" : "" }
        to={ this.props.href }
        onClick={ this.handleClick }
      >
        { this.props.text }
      </Link>
    )
  }

}

export default ButtonLinkComponent
