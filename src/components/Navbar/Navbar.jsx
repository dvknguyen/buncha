import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
import images from "../../constants/images";

export default function Navbar() {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app logo"></img>
      </div>
      <ul className="app__navbar-links">
        <li>
          <a href="#home" className="a-font">
            Home
          </a>
        </li>
        <li>
          <a href="#menu" className="a-font">
            Menü
          </a>
        </li>
        <li c>
          <a href="#contact" className="a-font">
            Kontakt
          </a>
        </li>
        <li>
          <a href="#resevation" className="a-font">
            Resevierung
          </a>
        </li>
      </ul>
    </nav>
  );
}
