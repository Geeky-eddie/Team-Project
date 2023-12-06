import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../assets/Images/Banner/banner1.jpg";
import banner2 from "../../../assets/Images/Banner/banner2.jpg";
import banner3 from "../../../assets/Images/Banner/banner3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} pause={false}>
      <Carousel.Item>
        <img className="w-full h-full object-cover" src={banner1} alt="First slide" />
        <Carousel.Caption className="caption rounded-3">
          <h3>Med-Chain</h3>
          <p>Secured health records</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-full h-full object-cover" src={banner2} alt="Second slide" />

        <Carousel.Caption className="caption">
          <h3>Med-Chain</h3>
          <p>We dont keep records of your personal information</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-full h-full object-cover" src={banner3} alt="Third slide" />

        <Carousel.Caption className="caption">
          <h3>Medi-Chain</h3>
          <p>Trust Med-Chain to take care of you</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
