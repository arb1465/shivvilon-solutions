import React from 'react'
const colors = {
  blue: "bg-blue-600 hover:bg-blue-700",
  red: "bg-red-600 hover:bg-red-700",
  green: "bg-green-600 hover:bg-green-700",
  yellow: "bg-yellow-300 hover:bg-yellow-400",
  white: "bg-white hover:bg-gray-100 border-2",
  gray: "bg-gray-100 hover:bg-gray-200 border-2",
};

const textColors = {
  white: "text-white",
  black: "text-black",
};

const Button = ({ btnName, btnWidth, onClick, btnColor = "blue", btnType = "button", txtCol = "white"}) => {
  return (
    <button
      type = {btnType}
      onClick={onClick}
      className={`${btnWidth} py-2 p-4 ${textColors[txtCol]} ${colors[btnColor]} rounded-lg`}
      >
        {btnName}
    </button>
  )
}

export default Button
