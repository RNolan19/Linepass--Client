import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

class HeaderFixed extends React.Component {
  render () {
    return (
      <Fragment>
        <header>
          <div className="header_fixed">
            <Link to='/bars'><p className="header_fixed_logo">Linepass Boston</p></Link>
            <Link to="/about" className="header_text-box-link">About Us</Link>
            <Link to='/add-my-bar' href="#" >Add Your Bar</Link>
            <Link to="/" href="#sign-out">Sign Out</Link>
          </div>
        </header>
      </Fragment>
    )
  }
}

export default HeaderFixed
