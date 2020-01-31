import React, { Fragment } from 'react'
// cherry-picking which methods you want to use from react-dom
import { render } from 'react-dom'

class Bar extends React.Component {
  // Returns whatever is inside the parantheses after Return
  // can't return sibling elements. Wrap everything in a Fragment tag

  render () {
    return (
      <Fragment>
        {/* this is how you have to comment in React.  Must be inside Fragment */}
        {/* anything inside the brackets can be JavaScript */}
        <hr className='hr-white'></hr>
        <div className='quote'>
          <h1> Life is too short to wait in line </h1>
          <p>-Wayne Gretzky</p>
          <h3>-Michael Scott</h3>
        </div>
        <hr className='hr-grey'></hr>
        <h3 className='quote'>Never Wait In Line At These Bars Again</h3>

        <div className='bar-info'>
          <img src='/../../../public.lincoln.jpg' width='300px' height='400px' />
        </div>
      </Fragment>
    )
  }
}

render(<p>test</p>, document.querySelector('#root'))

export default Bar
