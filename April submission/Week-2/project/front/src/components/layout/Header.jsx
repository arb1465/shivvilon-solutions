import React from 'react'
import Input from '../ui/Input'
import { useLocation } from 'react-router-dom';

const routeTitles = {
  "/dashboard": "Dashboard",
  "/materials": "Materials",
  "/payment": "Payment",
  "/quotation": "Quotation",
};

const Header = () => {
  const location = useLocation()
  return (
    <div className="bg-blue-800 text-white p-4 h-24 flex items-center justify-between">

      {/* Hamburger (only mobile) */}
      <button className="md:hidden text-2xl">
        ☰
      </button>

      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bold px-3">
        {routeTitles[location.pathname] || "Dashboard"}
      </h1>

      <Input
        inpType={"text"}
        inpPlaceholder={"Search for Materila or Clients Details"}
        rColor={"white"}
        inpWidth='w-40 md:w-80 lg:w-120'
      />

    </div>
  )
}

export default Header
