import React from 'react'

const Button = ({btnName, btnColor}) => {
  return (
    <button className={`w-full bg-${btnColor}-600 mt-8 text-white py-2 rounded-lg hover:bg-${btnColor}-700`}>
        {btnName}
    </button>
  )
}

export default Button
