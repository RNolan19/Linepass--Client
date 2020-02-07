import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import { Link } from 'react-router-dom'

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
    <div className='header-text'>
      <h2 className='main-header'>Because Life is Too Short To Wait In Line</h2>
      <Nav.Link className="add-my-bar" href="#add-my-bar">+ Add Your Bar</Nav.Link>
      <hr className='hr-white'></hr>
      <hr className='hr-grey'></hr>

      { /* <h5>Life is too short to wait in line</h5>
        <p>-Wayne Gretzky</p>
       <h5 className='Michael'>-Michael Scott</h5> */ }
    </div>
  </Fragment>
)

const Header = ({ user }) => (
  <Fragment>
    <Navbar id="navbar-font" bg="primary" variant="dark" expand="md">
      <Navbar.Brand href="#">
      LinePass Boston
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
    <hr className='hr-white'></hr>
  </Fragment>
)

export default Header
