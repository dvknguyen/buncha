import React from "react";
import images from "../../constants/images";
import SubHeading from "../subheading/SubHeading";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="app__header  app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
          <SubHeading title="Taste The New Flavor"></SubHeading>
          <h1 className="app__header-h1">
            Entdecken Sie die köstliche Vielfalt der vietnamesischen Küche.
          </h1>
          <p className="app__header-p">
            Die vietnamesische Küche ist bekannt für ihre frischen und gesunden
            Zutaten, die oft in Form von knackigen Salaten, frischen Kräutern
            und Gemüsegerichten serviert werden.
          </p>
        </div>
        <div className="app_wrapper_img">
          <img className="header-img" src={images.titleImg} alt="header img" />
        </div>
      </div>
    </>
  );
};

export default Header;
