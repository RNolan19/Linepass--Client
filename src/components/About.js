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
                <h1 className="about_benefits-owners-header">Create A New Revenue Stream For You Bar</h1>
                <li>Businesses on LinePass Are Able To Generate An Additional 1k-5K Per Month</li>
                <li>Stop Lining The Doorman&#39;s Pockets With Your ProFits</li>
                <li>Bring In Customers That Are Happy To Spend Money Just To Get In The Door</li>
              </div>
              <div className="about_benefits-customers">
                <h1 className="about_benefits-customers-header">Customers Avoid Lines Altogether</h1>
                <li>No More Haggling With Shady Doormen</li>
                <li>No More Planning Your Nights Around Which Bar Has A Line</li>
                <li>If You Can Summon A Stranger To Give You A Ride With Your Phone, Why Can&#39;t You Skip A Line?</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
