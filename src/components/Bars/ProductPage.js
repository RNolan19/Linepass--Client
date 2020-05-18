import React, { Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'
// import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'

// <div className="barpage-container">
//   <div className="bar-image">
//     {/* this is how you have to comment in React.  Must be inside Fragment */}
//     {/* anything inside the brackets can be JavaScript */}
//     <img className="bar-image" src={Lincoln} width='350px' height='400px' />
//   </div>
//   <div className="barpage-items">
//     <h1 className="barpage-name">{this.props.details.name}</h1>
//     <h3 className="barpage-details">{this.props.details.city}</h3>
//     <h5 className="barpage-details">{this.props.details.address}</h5>
//     <h5 className="barpage-details">Price to Enter: ${this.props.details.price}</h5>
//     <hr></hr>
//     <Button className="btn-large" id="skip-button">Buy The Pass</Button>
//   </div>
// </div>

const ProductPage = props => {
  const destroy = () => {
    axios({
      url: `${apiUrl}/artworks/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => {
        props.alert({ heading: 'Success', message: 'Listing Deleted', variant: 'warning' })
        props.history.push('/artworks')
      })
      .catch(() => props.alert({ heading: 'Uh Oh', message: 'Something when wrong!', variant: 'danger' }))
  }

  return (
    <Fragment>
      <div className="product_page">
        <div className="product_page_container">

          <div className="product_page-item product_page-card">
            {/* this is how you have to comment in React.  Must be inside Fragment */}
            {/* anything inside the brackets can be JavaScript */}
            <div className="card_heading">
              <p>The Eire Pub</p>
            </div>
            <div className="card_details">
              <p>Quincy, MA </p>
              <p>500 Adams Street</p>
            </div>
          </div>

          <div className="product_page-item product_page-description">
            <div className="product_page-description-text">
              <p>Skip The Line Today For:</p>
              <p>$20</p>
            </div>
            <a className="btn btn--black product_page-buttons-black" id="skip-button" style={{ color: '#D8C060' }}>I&#39;d Like To Skip The 30 Minute Line.  Thanks</a>
            <div className="product_page-description-buttons">
              <button href='/bars' className="back-btn">Back</button>
              <button href='/bars' className="update-btn">Update</button>
              <button href='/bars' className="delete-btn" onClick={ destroy }>Delete</button>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default ProductPage
