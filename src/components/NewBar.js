import React, { Fragment } from 'react'
import Legal from './App/legal.jpg'
// import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class NewBar extends React.Component {
  render () {
    const name = this.props.details.name
    return (
      <Fragment>
        <div className="added-bar-container" sm={6} md={4} as={'a'}>
          <div className="bar-container">
            {/* this is how you have to comment in React.  Must be inside Fragment */}
            {/* anything inside the brackets can be JavaScript */}
            <img src={Legal} width='350px' height='400px' />
            <h1 className="barName">{name}</h1>
            <h3 className="city">{this.props.details.city}</h3>
            <h5 className="city">{this.props.details.address}</h5>
            <h5 className="city">Price to Enter: ${this.props.details.price}</h5>
            <hr></hr>
            <Link to={`/bars/${this.props.details.name}`}><Button className="btn-large" id="skip-button" onClick={this.props.getBarInfo}>SKIP THE LINE</Button></Link>
          </div>
        </div>
      </Fragment>

    // <Fragment>
    //   <Col className="bars" sm={6} md={4} as={'a'}>
    //     <div className="bar-container">
    //       <li className="added-bars">
    //         <img src= {Legal} width='350px' height='400px'/>
    //         <h3 className="bar-name">
    //           {name}
    //           <span className="price">{price}</span>
    //         </h3>
    //         <p>{desc}</p>
    //         <hr></hr>
    //         <Button id="skip-button">SKIP THE LINE</Button>
    //       </li>
    //     </div>
    //   </Col>
    // </Fragment>
    )
  }
}

export default NewBar
