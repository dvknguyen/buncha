import React from "react";
import images from "../../constants/images";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="app__footer-links" id="contact">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Kontakt</h1>
          <p>Taunusstraße 41, 65183 Wiesbaden</p>
          <p> 0611 205 777 53</p>
          <p>bun-cha-wiesbaden@gmail.com</p>
        </div>
        <div class="app__footer-links_logo">
          <img className="header-img" src={images.logo} alt="header img" />
          <h1> Taste The New Flavor</h1>
        </div>
        <div className="app__footer-links_work">
          <h1>Öffnungszeiten</h1>
          <p>Montag-Donnerstag</p>
          <p>17:00-22:00</p>
          <p>Freitag</p>
          <p>17:00-23:00</p>
          <p>Samstag</p>
          <p>13:00-23:00</p>
          <p>Sonntag</p>
          <p>13:00-22:00</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p> 2021 Bun Cha. Allright Reserved</p>
      </div>
    </>
  );
};

export default Footer;
