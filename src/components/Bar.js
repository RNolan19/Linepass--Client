import React, { Fragment } from 'react'
// cherry-picking which methods you want to use from react-dom
import { render } from 'react-dom'
import Button from 'react-bootstrap/Button'
import { Col } from 'react-bootstrap'

class Bar extends React.Component {
  // Returns whatever is inside the parantheses after Return
  // can't return sibling elements. Wrap everything in a Fragment tag

  render () {
    return (
      <Fragment>
        <Col className="bars" sm={6} md={4}>
          <div className="bar-container">
            {/* this is how you have to comment in React.  Must be inside Fragment */}
            {/* anything inside the brackets can be JavaScript */}
            <img src={this.props.barImage} width='350px' height='400px' />
            <h1 className="barName">{this.props.barName}</h1>
            <h3 className="city">{this.props.city}</h3>
            <h6>{this.props.address}</h6>
            <Button id="skip-button">SKIP THE LINE</Button>
          </div>
        </Col>
      </Fragment>
    )
  }
}

render(<p>test</p>, document.querySelector('#root'))

export default Bar
