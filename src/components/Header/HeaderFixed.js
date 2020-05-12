import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

class HeaderFixed extends React.Component {
  render () {
    return (
      <Fragment>
        <header>
          <div className="header_fixed">
            <Link to='/bars'><p className="header_fixed_logo">Linepass Boston</p></Link>
            <a href="#/bars" >About Us</a>
            <Link to='/add-my-bar'><a href="#" >Add Your Bar</a></Link>
            <a href="#sign-out">Sign Out</a>
          </div>
        </header>
      </Fragment>
    )
  }
}

export default HeaderFixed
