import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'

class Homepage extends React.Component {
  render () {
    return (
      <Fragment>
        <div className="homepage-container">
          <div className="homepage-items">
            <h1 className="title">LinePass Boston</h1>
            <p className="tsa">{'Like TSA PreCheck...but for Boston\'s busiest bars'}</p>
            <span className="links">
              <Nav.Link className="enter" href="#bars">ENTER</Nav.Link>
              { /*  <Nav.Link className="acct-link" href="#sign-in">Sign In</Nav.Link>
              <Nav.Link className="acct-link" href="#sign-up">Sign Up</Nav.Link> */}
            </span>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Homepage
