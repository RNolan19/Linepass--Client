import React from 'react'

const ReviewDetail = props => {
  return (
    <div className="reviews_container-info">
      <p><strong>{props.comment}</strong></p>
      <br></br>
      <p>-{props.name}</p>
      <img src={props.avatar} alt="avatar"/>
    </div>
  )
}

export default ReviewDetail
