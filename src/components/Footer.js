import React from 'react'
import Nav from 'react-bootstrap/Nav'

class Footer extends React.Component {
  render () {
    return (
      <div className="footer-container">
        <p> LinePass Boston</p>
        <div className="footer-items">
          <Nav.Link>About Us</Nav.Link>
          <Nav.Link>Can I Add My Bar or Restaurant?</Nav.Link>
          <Nav.Link>Careers</Nav.Link>
        </div>
      </div>
    )
  }
}

export default Footer
