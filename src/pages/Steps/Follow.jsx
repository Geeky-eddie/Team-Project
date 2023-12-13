import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner11 from "../../Images/Banner/step1.png";
import banner12 from "../../Images/Banner/Step2.png";
import banner13 from "../../Images/Banner/step3.png";
import banner14 from "../../Images/Banner/step4.png";

const Follow = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      pause={false}
      className="mx-auto max-w-screen-sm relative"
    >
      <Carousel.Item>
        <img className="w-full h-auto" src={banner11} alt="First slide" />
        <Carousel.Caption className="caption rounded-3 absolute top-1/2 left-1/2 transform -translate-x-12% -translate-y-1/2 w-full text-center sm:text-left md:text-center">
          <h3 className="text-2xl font-bold text-black">Copy Doctors DID</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-full h-auto" src={banner12} alt="Second slide" />
        <Carousel.Caption className="caption absolute top-1/2 left-1/2 transform -translate-x-12% -translate-y-1/2 w-full text-center sm:text-left md:text-center">
          <h3 className="text-2xl font-bold text-black">Click the Book Now Button</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-full h-auto" src={banner13} alt="Third slide" />
        <Carousel.Caption className="caption absolute top-1/2 left-1/2 transform -translate-x-12% -translate-y-1/2 w-full text-center sm:text-left md:text-center">
          <h3 className="text-2xl font-bold text-black">Fill in your Information</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-full h-auto" src={banner14} alt="Fourth slide" />
        <Carousel.Caption className="caption absolute top-1/2 left-1/2 transform -translate-x-12% -translate-y-1/2 w-full text-center sm:text-left md:text-center">
          <h3 className="text-2xl font-bold text-black">Request Appointment</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Follow;
