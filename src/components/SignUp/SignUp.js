import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert({
        heading: 'Sign Up Success',
        message: messages.signUpSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/bars'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        alert({
          heading: 'Sign Up Failed',
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password, passwordConfirmation } = this.state

    return (
      <section className="signup-section">
        <div className="signup-container">
          <h3>Sign Up</h3>
          <Form class='sign-up' onSubmit={this.onSignUp}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control className="form"
                required
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="passwordConfirmation">
              <Form.Label>Password CONFIRMATION</Form.Label>
              <Form.Control
                required
                name="passwordConfirmation"
                value={passwordConfirmation}
                type="password"
                placeholder="CONFIRM Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <button className="homepage-button">SUBMIT</button>
          </Form>

          <a href='#sign-in'>Already Have An Account? Sign In Here!</a>
        </div>
      </section>
    )
  }
}

export default withRouter(SignUp)
