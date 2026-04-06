import { useContext } from "react"
import React from 'react'
import { cntContext } from "../context/cntContext"

function Comp3() {
    const cnt = useContext(cntContext)
  return (
    <div>
      <h4>This is comp-3</h4>
      here is the value of count in comp-3: {cnt}
    </div>
  )
}

export default Comp3
