import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Bar = props => {
  const [bar, setBar] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/bars`)
      .then(res => setBar(res.data.bars))
      .catch(console.error)
  }, [])

  const barsJsx = bar.map(bar => (

    <div className="card" id="bars" key={bar._id} as={'a'} href={`#/bars/${bar._id}`}>
      <div className="card_side card_side-front">
        <div className="card_heading">
          <p>{bar.name}</p>
        </div>
        <div className="card_details">
          <p className="city">{bar.city}, MA</p>
          <p>{bar.address}</p>
        </div>
      </div>

      <div className="card_side card_side-back">
        <div className="card_cta">
          <div className="card_price">
            <p className="card_cta-rate"> Daily Rate</p>
            <p className="card_cta-price">${bar.price}</p>
          </div>
          <Link to={`/bars/${bar._id}`}><button className="btn">Skip The Line</button></Link>
        </div>
      </div>
    </div>
  ))

  return (
    <Fragment>
      <div className="bar-section" id="bar-section">
        <div className="bar-section-header ">
          <p>Skip The Line At Any Of These Bars:</p>
        </div>
        <div className="bar-container">
          {barsJsx}
        </div>
      </div>
    </Fragment>
  )
}

export default Bar
