import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Lincoln from './App/lincoln.jpg'

class BarPage extends React.Component {
  render () {
    console.log(this.props.details)
    return (
      <Fragment>
        <div className="barpage-container">
          <div className="bar-image">
            {/* this is how you have to comment in React.  Must be inside Fragment */}
            {/* anything inside the brackets can be JavaScript */}
            <img className="bar-image" src={Lincoln} width='350px' height='400px' />
          </div>
          <div className="barpage-items">
            <h1 className="barpage-name">{this.props.details.name}</h1>
            <h3 className="barpage-details">{this.props.details.city}</h3>
            <h5 className="barpage-details">{this.props.details.address}</h5>
            <h5 className="barpage-details">Price to Enter: ${this.props.details.price}</h5>
            <hr></hr>
            <Button className="btn-large" id="skip-button">Buy The Pass</Button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default BarPage
