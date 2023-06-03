import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SliderData } from "../../constants/sliderData";
import SubHeading from "../subheading/SubHeading";
import "./Header.css";
import { ClassNames } from "@emotion/react";

const Header = () => {
  const [current, setCurrent] = useState(0);
  const setNext = () => {
    setCurrent((current + 1) % SliderData.length);
  };

  const setPrev = () => {
    setCurrent((current - 1 + SliderData.length) % SliderData.length);
  };
  return (
    <>
      {/* <div className="app__wrapper_info">
          <SubHeading title="Taste The New Flavor"></SubHeading>
          <h1 className="app__header-h1">
            Entdecken Sie die köstliche Vielfalt der vietnamesischen Küche.
          </h1>
          <p className="app__header-p">
            Die vietnamesische Küche ist bekannt für ihre frischen und gesunden
            Zutaten, die oft in Form von knackigen Salaten, frischen Kräutern
            und Gemüsegerichten serviert werden.
          </p>
        </div> */}
      <ArrowForwardIcon
        style={{ fontSize: 40 }}
        onClick={setNext}
        className="right-arrow"
      />
      <ArrowBackIcon
        style={{ fontSize: 40 }}
        onClick={setPrev}
        className="left-arrow"
      />
      {SliderData.map((slide: { image: string }, index: number) => {
        return (
          <div
            className={index === current ? "img-wrapper active" : "img-wrapper"}
          >
            {index === current && (
              <img className="slide-img" src={slide.image} />
            )}
          </div>
        );
      })}
    </>
  );
};

export default Header;
