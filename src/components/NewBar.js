import React, { Fragment } from 'react'
// import Lincoln from './App/lincoln.jpg'
// import { Col } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

// <div className="added-bar-container" >
//   <div className="bar-container">
//     {/* this is how you have to comment in React.  Must be inside Fragment */}
//     {/* anything inside the brackets can be JavaScript */}
//     <img src={Lincoln} width='350px' height='400px' />
//     <h1 className="barName">{name}</h1>
//     <h3 className="city">{this.props.details.city}</h3>
//     <h5 className="city">{this.props.details.address}</h5>
//     <h5 className="city">Price to Enter: ${this.props.details.price}</h5>
//     <hr></hr>
//     <Link to={`/bars/${this.props.details.name}`}><Button className="btn-large" id="skip-button" onClick={this.props.getBarInfo}>SKIP THE LINE</Button></Link>
//   </div>
// </div>

class NewBar extends React.Component {
  handleClick = (event) => {
    const barName = event.currentTarget.dataset.name
    console.log(barName)
  }

  render () {
    return (
      <Fragment>
        <div className="bar-container">

          <div className="card">
            <div className="card_side card_side-front">
              <div className="card_heading">
                <p>{this.props.details.name}</p>
              </div>
              <div className="card_details">
                <p className="city">{this.props.details.city}</p>
                <p>{this.props.details.address}</p>
                <p>Very Busy</p>
              </div>
            </div>

            <div className="card_side card_side-back">
              <div className="card_cta">
                <div className="card_price">
                  <p className="card_cta-rate"> Daily Rate</p>
                  <p className="card_cta-price">$20</p>
                </div>
                <Link to={`/bars/${this.props.details.name}`}><button data-name={this.props.details.name} href="#" className="btn" onClick={this.handleClick}>Skip The Line</button></Link>
              </div>
            </div>
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
