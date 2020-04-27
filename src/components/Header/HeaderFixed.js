import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

class HeaderFixed extends React.Component {
  render () {
    return (
      <Fragment>
        <header>
          <div className="header_fixed">
            <Link to='/'><p className="header_fixed_logo">Linepass Boston</p></Link>
            <a href="#" >Our Story</a>
            <a href="#" >Careers</a>
            <Link to='/add-my-bar'><a href="#" >Add Your Bar</a></Link>
            <a href="#" >Contact Us</a>
          </div>
        </header>
      </Fragment>
    )
  }
}

export default HeaderFixed
