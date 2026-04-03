import {Link, NavLink } from "react-router-dom";

function Navbar() {
  const baseStyle = "px-3 py-2 rounded-md transition duration-200";
  const activeStyle = "text-gray-600 font-semibold";
  const inactiveStyle = "text-gray-500 hover:text-gray-600";

  return (
    <nav className="flex justify-between items-center bg-gray-200 px-6 py-3 shadow-md">
      
      <Link to="/" className="text-xl font-bold text-gray-800">App</Link>

      <div className="flex gap-4">
        
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Custom-Hook
        </NavLink>

        <NavLink
          to="/homies"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Homies
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Contact
        </NavLink>

      </div>
    </nav>
  );
}

export default Navbar;