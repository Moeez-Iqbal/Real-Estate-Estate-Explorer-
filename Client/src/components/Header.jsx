import React from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";

function Header() {
  return (
    <>
      <header className="font-sans bg-stone-400  fixed w-full z-50 top-0 border-y-2 border-black border-x-2 ">
        <div className="flex justify-between items-center max-w-6xl mx-auto ">
          <NavLink to="/">
            <h1 className="text-sm sm:text-lg flex flex-wrap rounded-md">
              <span>
                <img className="w-40 " src={logo} alt="Logo" />
              </span>
            </h1>
          </NavLink>

          <div className="flex items-center flex-grow justify-center">
            <form className="bg-slate-100 p-2 rounded-lg flex items-center shadow-md w-full max-w-sm">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent focus:outline-none flex-grow"
              />
              <button>
                <FaSearch className="text-slate text-2xl p-1 rounded-md hover:bg-custom-0" />
              </button>
            </form>
          </div>

          <ul className="flex gap-2">
            <NavLink to="/">
              <li className="hidden sm:inline text-white  hover:bg-gray-500 rounded-md p-4 bg-black shadow-md">
                Home
              </li>
            </NavLink>

            <NavLink to="/properties">
              <li className="hidden sm:inline text-white  hover:bg-gray-500 rounded-md p-4 bg-black shadow-md">
                Property
              </li>
            </NavLink>

            <NavLink to="/about">
              <li className="hidden sm:inline text-white  hover:bg-gray-500 rounded-md p-4 bg-black shadow-md">
                About
              </li>
            </NavLink>

            <NavLink to="/signup">
              <li className="hidden sm:inline text-white  hover:bg-gray-500 rounded-md p-4 bg-black shadow-md">
                SignIn
              </li>
            </NavLink>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
