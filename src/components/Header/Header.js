import React, { Fragment } from 'react'
// import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

// const authenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#change-password">Change Password</Nav.Link>
//     <Nav.Link href="#sign-out">Sign Out</Nav.Link>
//   </Fragment>
// )
//
// const unauthenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#sign-up">Sign Up</Nav.Link>
//     <Nav.Link href="#sign-in">Sign In</Nav.Link>
//   </Fragment>
// )
//
// const alwaysOptions = (
//   <Fragment>
//     <Nav.Link to="/">Home</Nav.Link>
//   </Fragment>
// )

// const quotes = (

class Header extends React.Component {
  render () {
    return (

      <Fragment>
        <header className="header">
          <div className="header_text-box">
            <Link to='/bars'><h1 className="heading_main">Linepass Boston</h1></Link>
            <a href="#/bars" className="header_text-box-link">About Us</a>
            <Link to='/add-my-bar'><a href="#" className="header_text-box-link">Add Your Bar</a></Link>
            <a href="#sign-out" className="header_text-box-link">Sign Out</a>
          </div>
          <div className="header_link-box">
            <a href="#/bars" className="header_link-2">Never Wait In Line Again</a>
          </div>
        </header>
      </Fragment>
    )
  }
}

// const Header = ({ user }) => (
//   <Fragment>
//     <Navbar id="navbar-font" bg="primary" variant="dark" expand="md">
//       <Navbar.Brand href="#">
//       LinePass Boston
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
//           { alwaysOptions }
//           { user ? authenticatedOptions : unauthenticatedOptions }
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//     { quotes }
//     <hr className='hr-white'></hr>
//   </Fragment>
// )

export default Header
