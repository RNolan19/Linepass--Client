import React, { Fragment } from 'react'
// cherry-picking which methods you want to use from react-dom
import { render } from 'react-dom'
import Button from 'react-bootstrap/Button'
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
          <h1 className="bar-header">Skip The Line At Boston&#39;s Busiest Establishments</h1>

          <div className="bar-container">

            <div className="card">
              <div className="card-front">
                <div className="card_heading">
                  <h1 className="barName">{this.props.barName}</h1>
                </div>
                <div className="card_details">
                  <h3 className="city">{this.props.city}</h3>
                  <h5>{this.props.address}</h5>
                </div>
              </div>
            </div>

            <div sm={3} className="bar-item">
              {/* this is how you have to comment in React.  Must be inside Fragment */}
              {/* anything inside the brackets can be JavaScript */}
              <img src={this.props.barImage} />
              <h1 className="barName">{this.props.barName}</h1>
              <h3 className="city">{this.props.city}</h3>
              <h5>{this.props.address}</h5>
              <Link to={`/bars/${this.props.barName}`}><Button className="btn-large" id="skip-button">SKIP THE LINE</Button></Link>
            </div>

            <div sm={3} className="bar-item">
              {/* this is how you have to comment in React.  Must be inside Fragment */}
              {/* anything inside the brackets can be JavaScript */}
              <img src={this.props.barImage} />
              <h1 className="barName">{this.props.barName}</h1>
              <h3 className="city">{this.props.city}</h3>
              <h5>{this.props.address}</h5>
              <Link to={`/bars/${this.props.barName}`}><Button className="btn-large" id="skip-button">SKIP THE LINE</Button></Link>
            </div>

            <div sm={3} className="bar-item">
              {/* this is how you have to comment in React.  Must be inside Fragment */}
              {/* anything inside the brackets can be JavaScript */}
              <img src={this.props.barImage} />
              <h1 className="barName">{this.props.barName}</h1>
              <h3 className="city">{this.props.city}</h3>
              <h5>{this.props.address}</h5>
              <Link to={`/bars/${this.props.barName}`}><Button className="btn-large" id="skip-button">SKIP THE LINE</Button></Link>
            </div>

            <div sm={3} className="bar-item">
              {/* this is how you have to comment in React.  Must be inside Fragment */}
              {/* anything inside the brackets can be JavaScript */}
              <img src={this.props.barImage} />
              <h1 className="barName">{this.props.barName}</h1>
              <h3 className="city">{this.props.city}</h3>
              <h5>{this.props.address}</h5>
              <Link to={`/bars/${this.props.barName}`}><Button className="btn-large" id="skip-button">SKIP THE LINE</Button></Link>
            </div>

            <div sm={3} className="bar-item">
              {/* this is how you have to comment in React.  Must be inside Fragment */}
              {/* anything inside the brackets can be JavaScript */}
              <img src={this.props.barImage} />
              <h1 className="barName">{this.props.barName}</h1>
              <h3 className="city">{this.props.city}</h3>
              <h5>{this.props.address}</h5>
              <Link to={`/bars/${this.props.barName}`}><Button className="btn-large" id="skip-button">SKIP THE LINE</Button></Link>
            </div>

            <div sm={3} className="bar-item">
              {/* this is how you have to comment in React.  Must be inside Fragment */}
              {/* anything inside the brackets can be JavaScript */}
              <img src={this.props.barImage} />
              <h1 className="barName">{this.props.barName}</h1>
              <h3 className="city">{this.props.city}</h3>
              <h5>{this.props.address}</h5>
              <Link to={`/bars/${this.props.barName}`}><Button className="btn-large" id="skip-button">SKIP THE LINE</Button></Link>
            </div>

            <div sm={3} className="bar-item">
              {/* this is how you have to comment in React.  Must be inside Fragment */}
              {/* anything inside the brackets can be JavaScript */}
              <img src={this.props.barImage} />
              <h1 className="barName">{this.props.barName}</h1>
              <h3 className="city">{this.props.city}</h3>
              <h5>{this.props.address}</h5>
              <Link to={`/bars/${this.props.barName}`}><Button className="btn-large" id="skip-button">SKIP THE LINE</Button></Link>
            </div>

            <div sm={3} className="bar-item">
              {/* this is how you have to comment in React.  Must be inside Fragment */}
              {/* anything inside the brackets can be JavaScript */}
              <img src={this.props.barImage} />
              <h1 className="barName">{this.props.barName}</h1>
              <h3 className="city">{this.props.city}</h3>
              <h5>{this.props.address}</h5>
              <Link to={`/bars/${this.props.barName}`}><Button className="btn-large" id="skip-button">SKIP THE LINE</Button></Link>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

render(<p>test</p>, document.querySelector('#root'))

export default Bar
