import React, { useState } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { Link } from 'react-router-dom';


export default function Header() {

    const {user} = useSelector(state => state.auth);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex justify-between p-4">
          <div>
              <Link to="/">
              <img src="https://summerhillestate.com/wp-content/uploads/2019/05/shlogo1-gold.png" style={{height:'50px'}} />
              </Link>
          </div>

          <div className="flex space-x-1 items-center">
            <span className="font-serif font-bold">Welcome, {user.firstname}</span>
            <button type="button" className="flex rounded-full border items-center px-2" onClick={toggleMenu} id="menu-button" aria-expanded="true" aria-haspopup="true">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                
            </button>
            {isOpen?
                (
                    <div className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1" role="none">
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Sign Out</a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Sign Out</a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Sign Out</a>
                        </div>
                    </div> 
                ):("")}
          </div>

    </div>
    )
}
