import React, { useRef } from "react";
import SubHeading from "../subheading/SubHeading";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import "./Gallery.css";

import images from "../../constants/images";

const galleryImges = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
  images.gallery05,
  images.gallery06,
  images.gallery07,
];
const Gallery = () => {
  const scrollRef = useRef(document.createElement("div"));
  const scroll = (direction: string) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
      console.log("left");
    } else {
      current.scrollLeft += 300;
      console.log("right");
    }
  };

  return (
    <div className="app_gallery">
      <div className="app__gallery-content">
        <SubHeading title="Find us on Instagram"></SubHeading>
        <h1 className="app__gallery-h1">Bildergalerie</h1>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImges.map((image, index) => (
            <div
              className="app__gallery-images_card"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="Bildergallerie" />
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            fontSize={35}
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            fontSize={35}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
