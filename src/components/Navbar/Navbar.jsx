import React, { useState } from "react";

import { GiHamburgerMenu, GiChopsticks } from "react-icons/gi";
import "./Navbar.css";
import images from "../../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
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
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#000000"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        >
          {" "}
        </GiHamburgerMenu>

        {toggleMenu && (
          <div className="app_navbar-smallscreen_overlay flex__center slide_botton">
            <GiChopsticks
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            ></GiChopsticks>
            <ul className="app__navbar-smallscreen_links">
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
