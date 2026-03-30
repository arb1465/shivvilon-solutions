import React from 'react'

function Comp(props) {
  console.log(props)
  return (
    <div>
       This is a new Component.
       And it's name is : {props.name}
    </div>
  )
}

export default Comp
