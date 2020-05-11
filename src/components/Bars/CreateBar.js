import React, { useState } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

// nameRef = React.createRef();
// priceRef = React.createRef();
// cityRef = React.createRef();
// addressRef = React.createRef();
// descRef = React.createRef();
// imageRef = React.createRef();
//
// // need to use this syntax for some reason....
// createBar = event => {
//   // stop the form from submitting
//   event.preventDefault()
//   const bar = {
//     name: this.nameRef.current.value,
//     price: parseFloat(this.priceRef.current.value),
//     city: this.cityRef.current.value,
//     address: this.addressRef.current.value,
//     desc: this.descRef.current.value,
//     image: this.imageRef.current.value
//   }
//   console.log(bar)
//   // call the CreateBars function passed down from App via props with the new Bar Obect
//   this.props.addBars(bar)
//   // reset the Form
//   event.currentTarget.reset()
// }
//
// getBarInfo () {
//   console.log('I got clicked')
// }

const CreateBar = props => {
// so this essentialy defines the empty bar state
// useState sets the initial values of state.bar
  const [bar, setBar] = useState({ name: '', city: '', address: '', price: '' })
  const [ createBarId, setBarId ] = useState(null)

  const handleChange = event => {
    event.persist()
    console.log(props.user)
    console.log(event.target.value)
    // here, we set a new bar.state by taking a copy of bar
    // when the value in the form changes, the handleChange function is run
    setBar({ ...bar, [event.target.name]: event.target.value })
    console.log(bar, createBarId)
  }

  // then when the user hits submit, we run handle submit
  const handleSubmit = event => {
    event.preventDefault()
    // console.log(event.target)
    const formData = new FormData(event.target)
    console.log(formData)

    axios({
      url: `${apiUrl}/bars`,
      method: 'POST',
      contentType: false,
      processData: false,
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: { bar }
    })
      .then(res => {
        setBarId({ ...createBarId, barId: res.data.bar.id })
        console.log(res.data)
        props.alert({ heading: 'Success', message: 'Listing created', variant: 'success' })
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
