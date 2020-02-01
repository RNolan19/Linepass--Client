import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link to="/">Home</Nav.Link>
  </Fragment>
)

const quotes = (
  <Fragment>
    <hr className='hr-white'></hr>
    <div className='quote'>
      <h1 className='quote'>Life is too short to wait in line</h1>
      <p className='quote'>-Wayne Gretzky</p>
      <h4 className='quote'>-Michael Scott</h4>

      <hr className='hr-grey'></hr>
    </div>
  </Fragment>
)

const Header = ({ user }) => (
  <Fragment>
    <Navbar id="navbar-font" bg="primary" variant="dark" expand="md">
      <Navbar.Brand href="#">
      LinePass Boston- Never Wait In Line Again
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
          { alwaysOptions }
          { user ? authenticatedOptions : unauthenticatedOptions }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    { quotes }
  </Fragment>
)

export default Header
