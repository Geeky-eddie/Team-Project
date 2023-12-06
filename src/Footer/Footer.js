import React from "react";
import "./Footer.css";
import logo from "../Images/logo.png";
import "../tailwind/Tailwind.css";


const Footer = () => {
  return (
    <div className="footer text-center text-white relative">
      <img src={logo} alt="" width="180" height="180" className="flex items-center  justify-center  " />
      <div className="container py-4 ">
        <h4>Follow us</h4>
        <div className=" pb-18 fo">
        <i className="fab fa-facebook-square mx-4 "></i>
        <i className="fab fa-twitter mx-4"></i>
        <i className="fab fa-instagram mx-4"></i>
        <i className="fab fa-linkedin-in mx-4"></i>
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
