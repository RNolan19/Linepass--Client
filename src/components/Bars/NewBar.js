import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'
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
  const [bar, setBar] = useState(null)
  console.log(props.user)

  useEffect(() => {
    axios({
      url: (`${apiUrl}/bars/${props.match.params.id}`),
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
    console.log(bar)
      .then(res => setBar(res.data.bar))
      .catch(() => props.alert({ heading: 'Error', message: 'Couldn\'t retrieve the requested artwork', variant: 'danger' }))
  }, [])

  return (
    <div>
      <p>bar.name</p>
      <p>bar.price</p>
      <p>bar.address</p>
      <p>bar.city</p>
    </div>
  )
}

export default NewBar
