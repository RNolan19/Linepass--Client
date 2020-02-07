import React from 'react'

class AddBar extends React.Component {
  myInput = React.createRef()

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.myInput.value)
  }

  render () {
    return (
      <form className="add-bar-form" onSubmit={this.handleSubmit}>
        <input name="name" ref={this.myInput} type="text" placeholder="Bar Name" />
        <input name="price" ref={this.myInput} type="number" placeholder="Price To Skip Line" />
        <select name="available" ref={this.myInput} placeholder="Tickets Available">
          <option value="available">Tickets Available!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea name="desc" ref={this.myInput} placeholder="description" />
        <input name="image" ref={this.myInput} type="text" placeholder="image" />
        <button type="submit">+ Add Your Bar</button>
      </form>
    )
  }
}

export default AddBar
