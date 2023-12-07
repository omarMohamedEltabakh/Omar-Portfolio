
import { useState } from 'react';
import './Nav.css'
import { Link, NavLink } from "react-router-dom";

export default function Nav() {

  const [showMenu, setshowMenu] = useState(false);
 
 

  return <>
    <nav className="navBar bg-slate-100 shadow-4  ">
      <div className="container    mx-auto flex items-center md:justify-start justify-between py-6">

        <li className="list-none ">
          <Link className="font-extrabold text-slate-800 text-2xl" to={"#"}>Omar Mohamed</Link>
        </li>

        <ul className=" hidden md:flex  ms-auto  space-x-12 font-medium  ">
          <li>
            <NavLink className="hover:text-slate-700 ease-in duration-150 " to="">Home</NavLink>
          </li>
          <li>
            <NavLink className="hover:text-slate-700 ease-in duration-150 " to={"About"}>About</NavLink>
          </li>
          <li>
            <NavLink className="hover:text-slate-700 ease-in duration-150" to={"projects"}>Projects</NavLink>
          </li>
          <li>
            <NavLink className="hover:text-slate-700 ease-in duration-150" to={"contact"}>Contact Us</NavLink>
          </li>
        </ul>


        <button onClick={() => { setshowMenu(!showMenu) }} id="mobile-btn" className="block md:hidden  cursor-pointer">
          <i className="fa-solid fa-bars"></i>
        </button>



      </div>


      <div className={`${showMenu?"hidden md:hidden":"md:hidden"}`}>
        <div id="mobile-menu" className={` mobile-menu border-gray-300 absolute top-14 flex    space-y-4 shadow-lg font-bold  flex-col items-center bg-gray-50 py-8 left-6 right-6`}>
          <NavLink className="hover:text-slate-700 ease-in duration-150 " to="">Home</NavLink>
          <NavLink className="hover:text-slate-700 ease-in duration-150 " to={"About"}>About</NavLink>
          <NavLink className="hover:text-slate-700 ease-in duration-150" to={"projects"}>Projects</NavLink>
          <NavLink className="hover:text-slate-700 ease-in duration-150" to={"contact"}>Contact Us</NavLink>
        </div>
      </div>



    </nav>
  </>
}
