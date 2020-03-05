import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Legal from './App/legal.jpg'

class BarPage extends React.Component {
  render () {
    console.log(this.props.details)
    return (
      <Fragment>
        <div className="bar-page-container">
          <div className="bar-image">
            {/* this is how you have to comment in React.  Must be inside Fragment */}
            {/* anything inside the brackets can be JavaScript */}
            <img src={Legal} width='350px' height='400px' />
          </div>
          <div className="bar-description">
            <h1 className="barName">{this.props.details.name}</h1>
            <h3 className="city">{this.props.details.city}</h3>
            <h5 className="city">{this.props.details.address}</h5>
            <h5 className="city">Price to Enter: ${this.props.details.price}</h5>
            <hr></hr>
            <Button id="skip-button">Buy The Pass</Button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default BarPage
