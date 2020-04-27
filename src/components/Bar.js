import React, { Fragment } from 'react'
// cherry-picking which methods you want to use from react-dom
import { render } from 'react-dom'
// import Button from 'react-bootstrap/Button'
// import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// this just provides dummy Bar Data or gives a way for me to add Bars by myself
// NewBar displays all the bars that are added by users

class Bar extends React.Component {
  // Returns whatever is inside the parantheses after Return
  // can't return sibling elements. Wrap everything in a Fragment tag

  render () {
    return (
      <Fragment>
        <div className="bar-section">
          <div className="bar_header">
            <h1 className="bar_header-quote">You Wait In 100% Of The Lines You Don&#39;t Pay To Skip</h1>
            <p className="bar_header-author">-Wayne Gretzky</p>
            <p className="bar_header-author">-Michael Scott</p>
          </div>

          <div className="bar-container">

            <div className="card">
              <div className="card_side card_side-front">
                <div className="card_heading">
                  <p>{this.props.barName}</p>
                </div>
                <div className="card_details">
                  <p className="city">{this.props.city}</p>
                  <p>{this.props.address}</p>
                  <p>Very Busy</p>
                </div>
              </div>

              <div className="card_side card_side-back">
                <div className="card_cta">
                  <div className="card_price">
                    <p className="card_cta-rate"> Daily Rate</p>
                    <p className="card_cta-price">${this.props.price}</p>
                  </div>
                  <Link to={`/bars/${this.props.barName}`}><button href="#" className="btn">Skip The Line</button></Link>
                </div>
              </div>

            </div>

            <div className="card">
              <div className="card_side card_side-front">
                <div className="card_heading">
                  <p>{this.props.barName}</p>
                </div>
                <div className="card_details">
                  <p className="city">{this.props.city}</p>
                  <p>{this.props.address}</p>
                </div>
              </div>

              <div className="card_side card_side-back">
                <div className="card_cta">
                  <div className="card_price">
                    <p className="card_cta-rate"> Daily Rate</p>
                    <p className="card_cta-price">${this.props.price}</p>
                  </div>
                  <Link to={`/bars/${this.props.barName}`}><button href="#" className="btn">Skip The Line</button></Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card_side card_side-front">
                <div className="card_heading">
                  <p>{this.props.barName}</p>
                </div>
                <div className="card_details">
                  <p className="city">{this.props.city}</p>
                  <p>{this.props.address}</p>
                </div>
              </div>

              <div className="card_side card_side-back">
                <div className="card_cta">
                  <div className="card_price">
                    <p className="card_cta-rate"> Daily Rate</p>
                    <p className="card_cta-price">${this.props.price}</p>
                  </div>
                  <Link to={`/bars/${this.props.link}`}><button className="btn">Skip The Line</button></Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card_side card_side-front">
                <div className="card_heading">
                  <p>{this.props.barName}</p>
                </div>
                <div className="card_details">
                  <p className="city">{this.props.city}</p>
                  <p>{this.props.address}</p>
                  <p>Very Busy</p>
                </div>
              </div>

              <div className="card_side card_side-back">
                <div className="card_cta">
                  <div className="card_price">
                    <p className="card_cta-rate"> Daily Rate</p>
                    <p className="card_cta-price">${this.props.price}</p>
                  </div>
                  <Link to={`/bars/${this.props.barName}`}><button href="#" className="btn">Skip The Line</button></Link>
                </div>
              </div>

            </div>

            <div className="card">
              <div className="card_side card_side-front">
                <div className="card_heading">
                  <p>{this.props.barName}</p>
                </div>
                <div className="card_details">
                  <p className="city">{this.props.city}</p>
                  <p>{this.props.address}</p>
                </div>
              </div>

              <div className="card_side card_side-back">
                <div className="card_cta">
                  <div className="card_price">
                    <p className="card_cta-rate"> Daily Rate</p>
                    <p className="card_cta-price">${this.props.price}</p>
                  </div>
                  <Link to={`/bars/${this.props.barName}`}><button href="#" className="btn">Skip The Line</button></Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card_side card_side-front">
                <div className="card_heading">
                  <p>{this.props.barName}</p>
                </div>
                <div className="card_details">
                  <p className="city">{this.props.city}</p>
                  <p>{this.props.address}</p>
                </div>
              </div>

              <div className="card_side card_side-back">
                <div className="card_cta">
                  <div className="card_price">
                    <p className="card_cta-rate"> Daily Rate</p>
                    <p className="card_cta-price">${this.props.price}</p>
                  </div>
                  <Link to={`/bars/${this.props.link}`}><button className="btn">Skip The Line</button></Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card_side card_side-front">
                <div className="card_heading">
                  <p>{this.props.barName}</p>
                </div>
                <div className="card_details">
                  <p className="city">{this.props.city}</p>
                  <p>{this.props.address}</p>
                  <p>Very Busy</p>
                </div>
              </div>

              <div className="card_side card_side-back">
                <div className="card_cta">
                  <div className="card_price">
                    <p className="card_cta-rate"> Daily Rate</p>
                    <p className="card_cta-price">${this.props.price}</p>
                  </div>
                  <Link to={`/bars/${this.props.barName}`}><button href="#" className="btn">Skip The Line</button></Link>
                </div>
              </div>

            </div>

            <div className="card">
              <div className="card_side card_side-front">
                <div className="card_heading">
                  <p>{this.props.barName}</p>
                </div>
                <div className="card_details">
                  <p className="city">{this.props.city}</p>
                  <p>{this.props.address}</p>
                </div>
              </div>

              <div className="card_side card_side-back">
                <div className="card_cta">
                  <div className="card_price">
                    <p className="card_cta-rate"> Daily Rate</p>
                    <p className="card_cta-price">${this.props.price}</p>
                  </div>
                  <Link to={`/bars/${this.props.barName}`}><button href="#" className="btn">Skip The Line</button></Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card_side card_side-front">
                <div className="card_heading">
                  <p>{this.props.barName}</p>
                </div>
                <div className="card_details">
                  <p className="city">{this.props.city}</p>
                  <p>{this.props.address}</p>
                </div>
              </div>

              <div className="card_side card_side-back">
                <div className="card_cta">
                  <div className="card_price">
                    <p className="card_cta-rate"> Daily Rate</p>
                    <p className="card_cta-price">${this.props.price}</p>
                  </div>
                  <Link to={`/bars/${this.props.link}`}><button className="btn">Skip The Line</button></Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Fragment>
    )
  }
}

//   <div sm={3} className="bar-item">
//     {/* this is how you have to comment in React.  Must be inside Fragment */}
//     {/* anything inside the brackets can be JavaScript */}
//     <img src={this.props.barImage} />
//     <h1 className="barName">{this.props.barName}</h1>
//     <h3 className="city">{this.props.city}</h3>
//     <h5>{this.props.address}</h5>
//     <Link to={`/bars/${this.props.link}`}><Button className="btn-large" id="skip-button">SKIP THE LINE</Button></Link>
//   </div>
// </div>

render(<p>test</p>, document.querySelector('#root'))

export default Bar
