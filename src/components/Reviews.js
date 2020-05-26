import React from 'react'

class Reviews extends React.Component {
  render () {
    return (
      <div className="reviews_section">
        <div className="reviews_container">
          <p className="reviews_container-header">What Our Customers Say About Us</p>
          <div className="reviews_container-info">
            <div className="reviews_container-info-1">
              <p>&#34;I&#39;m never going back to waiting in line.  LinePass is well worth the price.&#34;</p>
              <br></br>
              <p>-Tom B.</p>
            </div>
            <div className="reviews_container-info-2">
              <p>&#34;LinePass has been great for my business.  I never realized how much money I was missing out on every weekend&#34;</p>
              <br></br>
              <p>-Bobby O.</p>
            </div>
            <div className="reviews_container-info-3">
              <p>&#34;The worst part of the night is either waiting in line or Finding a bar without one.  I love LinePass&#34;</p>
              <br></br>
              <p>-Ted W.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Reviews
