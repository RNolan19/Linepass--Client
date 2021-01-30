import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  render () {
    return (
      <div className="footer-container">
        <p> LinePass Boston</p>
        <div className="footer-items">
          <Link to='/about'>About Us</Link>
          <Link to="/add-my-bar">Add Your Bar or Restaurant!</Link>
          <a href="mailto:support@linepassapp.com">Contact Us!</a>
        </div>
      </div>
    )
  }
}

export default Footer
