import React, { useState } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const CreateBar = props => {
  const [bar, setBar] = useState({ name: '', city: '', address: '', price: '' })
  const [ createBarId, setBarId ] = useState(null)

  const handleChange = event => {
    event.persist()
    setBar({ ...bar, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/bars`,
      method: 'POST',
      headers: {
        contentType: 'application/json',
        'Authorization': `Bearer ${props.user.token}`
      },
      data: { bar }
    })
      .then(res => {
        console.log(res)
        setBarId({ ...createBarId, barId: res.data.bar.id })
        props.alert({ heading: 'Success', message: 'Your Bar Has Been Added!', variant: 'success' })
      })
      .catch(() => props.alert({ heading: 'Error', message: 'Something went wrong, please try again', variant: 'danger' }))
  }

  if (createBarId) {
    console.log({ bar })
    return <Redirect to={`/bars/${createBarId.barId}`} />
  }
  return (
    <div className="add_bar_page">
      <h3 className="add_bar_page-header">Add Your Bar</h3>
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

export default withRouter(CreateBar)
