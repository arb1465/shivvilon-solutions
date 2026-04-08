import React from 'react'
const ringColors = {
  blue: "focus:ring-blue-500",
  red: "focus:ring-red-500",
  green: "focus:ring-green-500",
  gray: "focus:ring-gray-500"
};

const Input = ({inpType, inpName, inpValue, inpPlaceholder, rColor, isReq, onChange}) => {
  const ringClass = ringColors[rColor] || ringColors.gray;

  return (
    <input
      type={inpType}
      name={inpName}
      value={inpValue}
      required={isReq}
      onChange={onChange}
      placeholder={inpPlaceholder}
      className={`w-full border my-3 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-1 ${ringClass}`}
    />
  )
}

export default Input
