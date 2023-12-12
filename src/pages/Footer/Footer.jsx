import React from "react";
import logo from "../../assets/Images/logo.png";



const Footer = () => {
  return (
    <div className="footer text-center text-white relative  bg-black">
  <img
    src={logo}
    alt=""
    width="180"
    height="180"
    className="mx-auto"
  />
  <div className="container py-4">
    <h4>Follow us</h4>
    <div className="pb-18  text-4xl">
      <i className="fab fa-facebook-square mx-4"></i>
      <i class="fa-brands fa-x-twitter mx-4"></i>
      <i className="fab fa-instagram mx-4"></i>
      <i className="fab fa-linkedin-in mx-4"></i>
    </div>
  </div>
</div>

  );
};

export default Footer;
