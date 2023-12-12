import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/Images/About/about1.jpg";
import img2 from "../../../assets/Images/About/about2.png";
import img3 from "../../../assets/Images/About/about3.jpg";
import Intro from "../../Home/Intro/Intro";
const About = () => {
  return (
    <div className="bg-cyan-500 shadow-lg shadow-cyan-500/50 bg-cyan-600 text-black-300">
      <h1 className="text-center">About Us</h1>
      <div className="container overflow-hidden">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <img className="w-100 mt-4" src={img1} alt="" height="450" />
          </div>
          <div className="col-12 col-md-4">
            <img className="w-100" src={img2} alt="" height="500" />
          </div>
          <div className="col-12 col-md-4">
            <img className="w-100 mt-4" src={img3} alt="" height="450" />
          </div>
        </div>
      </div>
      <Intro></Intro>
      <div className="container py-5 d-flex flex-column align-items-center text-amber-300">
       
        <h3 className="w-75 text-center">We make sure to give the best health care and clinical service. Book an appointment with us today!!!</h3>
        <Link to="/Web5form" className="text-decoration-none bg-amber-400 rounded-2xl">
          <button className="btn  d-block mx-auto bg-amber-400">Book an Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
