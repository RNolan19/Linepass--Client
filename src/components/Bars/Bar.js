import React, { Fragment, useEffect, useState } from 'react'
// cherry-picking which methods you want to use from react-dom
import { render } from 'react-dom'
// import Button from 'react-bootstrap/Button'
// import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

// this just provides dummy Bar Data or gives a way for me to add Bars by myself
// NewBar displays all the bars that are added by users

const Bar = props => {
  const [bar, setBar] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/bars`)
      .then(res => setBar(res.data.bars))
      .then(() => props.alert({ heading: 'Success', message: 'Skip The Line At These Bars!', variant: 'success' }))
      .catch(console.error)
  }, [])
  console.log(bar)

  const barsJsx = bar.map(bar => (

    <div className="card" key={bar._id} as={'a'} href={`#/bars/${bar._id}`}>
      <div className="card_side card_side-front">
        <div className="card_heading">
          <p>{bar.name}</p>
        </div>
        <div className="card_details">
          <p className="city">{bar.city}</p>
          <p>{bar.address}</p>
        </div>
      </div>

      <div className="card_side card_side-back">
        <div className="card_cta">
          <div className="card_price">
            <p className="card_cta-rate"> Daily Rate</p>
            <p className="card_cta-price">${bar.price}</p>
          </div>
          <Link to={`/bars/${bar._id}`}><button className="btn">Skip The Line</button></Link>
        </div>
      </div>
    </div>
  ))

  return (
    <Fragment>
      <div className="bar-section" id="bar-section">
        <div className="bar-container">
          {barsJsx}
        </div>
      </div>
    </Fragment>
  )
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
