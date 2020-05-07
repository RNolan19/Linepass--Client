import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'
import line2 from '../../img/line4.jpg'
// import Lincoln from './App/lincoln.jpg'
// import { Col } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'

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

const NewBar = props => {
  const [bar, setBar] = useState({ name: '', city: '', address: '', price: '' })
  console.log(props, bar)

  useEffect(() => {
    axios({
      url: `${apiUrl}/bars/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(res => setBar(res.data.bar))
      .catch(() => props.alert({ heading: 'Error', message: 'Couldn\'t retrieve the requested artwork', variant: 'danger' }))
  }, [])

  return (
    <div>
      <div className="product_page">
        <div className="product_page_container">

          <div className="product_page-photo">
            {/* this is how you have to comment in React.  Must be inside Fragment */}
            {/* anything inside the brackets can be JavaScript */}
            <img className="product_page-photo" src={line2} />
          </div>

          <div className="product_page-description">
            <p className="product_page-name">{bar.name}</p>
            <p className="product_page-city">{bar.city}</p>
            <p className="product_page-address">{bar.address}</p>
            <p className="product_page-price">{bar.price}</p>
            <p className="product_page-price">Monthly LinePass: $25</p>
            <a className="btn btn--black" id="skip-button" style={{ color: '#D8C060' }}>Skip The Line</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewBar
