import React from 'react'

const ReviewsContainer = props => {
  return (
    <div className="reviews_section">
      <p className="reviews_container-header">What Our Customers Say About Us</p>
      <div className="reviews_container">
        {props.children}
      </div>
    </div>
  )
}

export default ReviewsContainer
