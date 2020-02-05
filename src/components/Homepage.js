import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'

class Homepage extends React.Component {
  render () {
    return (
      <Fragment>
        <div className='gradient'>
          <div className="div-container">
            <h1 className="homepage-text"> LinePass Boston </h1>
            <span className="links">
              <Nav.Link className="enter" href="#bars">ENTER</Nav.Link>
              <Nav.Link className="acct-link" href="#sign-in">Sign In</Nav.Link>
              <Nav.Link className="acct-link" href="#sign-up">Sign Up</Nav.Link>
            </span>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Homepage
