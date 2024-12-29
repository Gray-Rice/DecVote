import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./Home";
import AboutPage from "./About";


const NavBar = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          
          <li>
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default NavBar;
