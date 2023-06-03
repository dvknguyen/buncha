import React, { useState } from "react";

import { GiHamburgerMenu, GiChopsticks } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="app logo"></img>
        </div>
        <ul className="app__navbar-links">
          <li>
            <Link className="a-font" to="/home">
              Startseite
            </Link>
          </li>
          <li>
            <Link className="a-font" to="/menu">
              Menü
            </Link>
          </li>
          <li>
            <Link className="a-font" to="#contact">
              Kontakt
            </Link>
          </li>
          <li>
            <Link className="a-font" to="/reservation">
              Resevierung
            </Link>
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
      <div className="shoppingcart-area">
        <Button variant="outline">
          <FaShoppingCart size={50} color="#009f55" />
          <div className="items_number">3</div>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
