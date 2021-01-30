import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'
import { Link, Redirect } from 'react-router-dom'

const NewBar = props => {
  const [bar, setBar] = useState({ name: '', city: '', address: '', price: '', owner: '' })
  const [isDeleted, setIsDeleted] = useState(false)
  const userId = props.user._id
  console.log(props)

  useEffect(() => {
    axios({
      url: `${apiUrl}/bars/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(res =>
        setBar(res.data.bar))
      .catch(() => props.alert({ heading: 'Error', message: 'Couldn\'t retrieve the requested bar', variant: 'danger' }))
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/bars/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => {
        setIsDeleted(true)
        props.alert({ heading: 'Success', message: 'Listing Deleted', variant: 'success' })
      })
      .catch(() => props.alert({ heading: 'Uh Oh', message: 'Something when wrong!', variant: 'danger' }))
  }

  if (isDeleted) {
    return <Redirect to={'/bars'} />
  }

  return (
    <Fragment>
      <div className="product_page">
        <div className="product_page_container">
          <div className="product_page-item product_page-card">
            <div className="card_heading">
              <p>{bar.name}</p>
            </div>
            <div className="card_details">
              <p>{bar.city}, MA </p>
              <p>{bar.address}</p>
              <p>Daily LinePass: ${bar.price}</p>
            </div>
          </div>

          <div className="product_page-item product_page-description">
            <div className="product_page-description-text">
              <p className="product_page-description-text-skip">Skip The Line Today For:</p>
              <p>${bar.price}</p>
            </div>
            <Link to="/confirmation" className="btn--black" id="skip-button" style={{ color: '#D8C060' }}>I&#39;d Like To Skip The 30-60 Minute Line</Link>
            <div className="product_page-description-buttons">
              <a href='#/bars' className="back-btn">Back</a>
              { userId === bar.owner._id ? (
                <Fragment>
                  <Link to={`/bars/${props.match.params.id}/update`}><button className="update-btn">Update</button></Link>
                  <button className="delete-btn" onClick={ destroy }>Delete</button>
                </Fragment>
              ) : null}
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default NewBar
