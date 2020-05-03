import React from 'react'

class AddBar extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  cityRef = React.createRef();
  addressRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  // need to use this syntax for some reason....
  createBar = event => {
    // stop the form from submitting
    event.preventDefault()
    const bar = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      city: this.cityRef.current.value,
      address: this.addressRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    }
    console.log(bar)
    // call the AddBars function passed down from App via props with the new Bar Obect
    this.props.addBars(bar)
    // reset the Form
    event.currentTarget.reset()
  }

  getBarInfo () {
    console.log('I got clicked')
  }

  render () {
    console.log(this.props.details)
    console.log(Object.keys(this.props.state)[Object.keys(this.props.state).length - 1])
    return (
      <div>
        <form className="add-my-bar" onSubmit={this.createBar}>
          <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
          <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
          <input name="city" ref={this.cityRef} type="text" placeholder="City" />
          <input name="address" ref={this.addressRef} type="text" placeholder="Address" />
          <textarea name="desc" ref={this.descRef} placeholder="Desc"></textarea>
          <select name="status">
            <option value="available">Tickets Available!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
          <button className="submit">+ Add My Bar</button>

        </form>

        <button onClick={this.getBarInfo} className='submit'>Load Sample Bars</button>
      </div>
    )
  }
}

export default AddBar
