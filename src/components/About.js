import React from 'react'

class About extends React.Component {
  render () {
    return (
      <div className="about_section">
        <div className="about_container">
          <div className="about_top">
            <p>We created LinePass for anyone who has ever <br></br>waited in line in the middle of a Boston winter <br></br> and has been told &quot;It will just be a few more minutes&quot; </p>
          </div>
          <div className="about_benefits-section">
            <p className="about_benefits-header">A Win-Win For Bar Owners And Customers</p>
            <div className="about_benefits">
              <div className="about_benefits-owners">
                <h1>Businesses Are Able Generate An Additional 1k-5K A Month</h1>
                <p>Lorem</p>
              </div>
              <div className="about_benefits-customers">
                <h1>Customers Are Able To Avoid Lines Altogether</h1>
                <p>No More Haggling With Shady Doormen</p>
                <p>If You Can Summon A Stranger To Give You A Drive With Your Phone, Why Can&#39;t You Skip A Line?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
