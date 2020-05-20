import React from 'react'
import Carlton from '../img/carlton.gif'

const Confirmation = props => {
  const userId = props.user.email

  return (
    <div className="confirmation_section">
      <div className="confirmation_container">
        <div className="confirmation_container-text">
          <p>Thanks for using Linepass!  We have sent a purchase conFirmation email to {userId}!</p>
          <p>Have a drink on us!  Refer a friend and get 25% off your next Pass!</p>
        </div>
        <div className="confirmation_container-gif">
          <img className="bar-image" src={Carlton} width='100%' height='100%' />
        </div>
      </div>
    </div>
  )
}

export default Confirmation
