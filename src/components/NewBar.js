import React from 'react'

class NewBar extends React.Component {
  render () {
    return (
      <li className="added-bars">
        <h3 className="bar-name">
          {this.props.details.name}
        </h3>

      </li>
    )
  }
}

export default NewBar
