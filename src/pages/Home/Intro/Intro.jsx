import React from "react";
import introBanner from "../../../assets/Images/Banner/intro-banner.png";

const Intro = () => {
  return (
    <div className="container overflow-hidden my-5 border bg-light shadow-lg rounded-3">
      <div className="row gy-5">
        <div className="col-12 col-md-5">
          <div className="p-3">
            <img className="img-fluid" src={introBanner} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="p-3">
            <h1 className="fw-extrabold blue-color">WHY CHOOSE US?</h1>
            <p className="fs-5">
            Select Med-Chain for an unparalleled experience in healthcare data management. Our platform ensures the utmost security and decentralization of patient records, addressing concerns associated with traditional paper-based systems. With a unique approach of utilizing modifiable files for each record, we enable doctors to implement seamless updates without cumbersome paperwork. Med-Chain's distinct commitment to innovation, data integrity, and user-centric design sets us apart, making us the trusted choice for those seeking a progressive and secure healthcare solution.

            </p>
            <p className="fs-5">At Med-Chain we ensure a Secure and Decentralized patient record system</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
