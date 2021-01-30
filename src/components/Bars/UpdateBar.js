import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const UpdateBar = props => {
  const [bar, setBar] = useState({ name: '', city: '', address: '', price: '' })
  const [updated, setUpdated] = useState(false)

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

  const handleChange = event => {
    event.persist()
    setBar({ ...bar, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/bars/${props.match.params.id}`,
      method: 'PATCH',
      contentType: false,
      processData: false,
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: { bar }
    })
      .then(res => {
        setUpdated(true)
        props.alert({ heading: 'Success', message: 'Bar Updated!', variant: 'success' })
      })
      .catch(() => props.alert({ heading: 'Error', message: 'Something went wrong, please try again', variant: 'danger' }))
  }

  if (updated) {
    return <Redirect to={`/bars/${props.match.params.id}`} />
  }
  return (
    <div className="add_bar_page">
      <h3 className="add_bar_page-header">Update Your Bar</h3>
      <p className="add_bar_page-text">Over 50% of the Bars on LinePass have reported an additional $1,000 - 5,000 in monthly revenue </p>
      <form onSubmit={handleSubmit} className="add_bar_form">
        <label>Bar Name</label>
        <input
          placeholder=""
          value={bar.name}
          name="name"
          onChange={handleChange}
        />

        <label>City</label>
        <input
          placeholder=""
          value={bar.city}
          name="city"
          onChange={handleChange}
        />

        <label>Address</label>
        <input
          placeholder=""
          value={bar.address}
          name="address"
          onChange={handleChange}
        />

        <label>Set Your Price</label>
        <input
          type="number"
          value={bar.price}
          name="price"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>

      </form>
    </div>
  )
}

export default withRouter(UpdateBar)
