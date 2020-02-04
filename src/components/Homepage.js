import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'

class Homepage extends React.Component {
  render () {
    return (
      <Fragment>
        <div className="div-container">
          <div className="inner-div">
            <h1 className="homepage-text"> LinePass Boston </h1>
            <Button className='homepage-buton mr-2' varient="primary">Update</Button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Homepage
