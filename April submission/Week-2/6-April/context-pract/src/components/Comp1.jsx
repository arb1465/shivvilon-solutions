
import React from 'react'
import Comp2 from './Comp2'
import Comp2_5 from './Comp2_5'

function Comp1() {
  return (
    <div>
      <h2>This is comp-1</h2>
      <div className='split' style={{display: 'flex', justifyContent: 'space-around'}}>
        <Comp2 />
        <Comp2_5 />
      </div>
    </div>
  )
}

export default Comp1
