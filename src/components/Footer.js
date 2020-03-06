import React from 'react'
import Nav from 'react-bootstrap/Nav'

class Footer extends React.Component {
  render () {
    return (
      <div className="footer-container">
        <div className="footer-items">
          <h1>About LinePass Boston</h1>
          <p className="about">{'LinePass Was Created For Everyone Who Has Been In Line At A Bar In The Middle of February And Has Been Told "It Will Just Be A Few More Minutes"'}</p>
          <Nav.Link>How Does LinePass Work?</Nav.Link>
          <Nav.Link>Can I Add My Bar or Restaurant?</Nav.Link>
          <Nav.Link>Contact Us</Nav.Link>
          <Nav.Link>Careers</Nav.Link>
        </div>
      </div>
    )
  }
}

export default Footer
