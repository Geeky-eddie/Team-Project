import React from "react";
// import { Link } from "react-router-dom";
import img1 from "../../../assets/Images/About/about1.jpg";
import img2 from "../../../assets/Images/About/about2.png";
import img3 from "../../../assets/Images/About/about3.jpg";
import Intro from "../../Home/Intro/Intro";
const About = () => {
  return (
    <div className="bg-cyan-500 shadow-lg shadow-cyan-500/50 bg-cyan-600 text-black-300">
      <h1 className="text-center">About Us</h1>
      <div className="container py-5 d-flex flex-column align-items-center text-black">
       
       <h3 className="w-75 text-center">Med-Chain stands as a pioneering platform, leading the charge in transforming healthcare through the extensive integration of big data. Our commitment is centered on establishing the most widespread application of big data in medicine. By providing individuals with comprehensive digital records, encompassing demographics, medical history, allergies, laboratory results, and more, we empower both patients and healthcare providers, marking the inception of a new era in efficient, secure, and accessible healthcare information.
</h3>
       
     </div>
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
      <h1 className="text-center">Our mission</h1>
        <h3 className="w-75 text-center">Our mission at Med-Chain is to establish and maintain a Secure and Decentralized patient record system that empowers individuals and healthcare providers alike. We are dedicated to leveraging big data for a dynamic and responsive platform that enhances the efficiency of healthcare delivery. Through continuous innovation, stringent security measures, and a commitment to user privacy, we strive to be the trusted bridge between patients and healthcare professionals, fostering a healthier and more connected world.</h3>
        {/* <Link to="/Web5form" className="text-decoration-none bg-amber-400 rounded-2xl">
          <button className="btn  d-block mx-auto bg-amber-400">Book an Appointment</button>
        </Link> */}
      </div>
      <div className="container py-5 d-flex flex-column align-items-center text-amber-300">
      <h1 className="text-center">Our vision</h1>
        <h3 className="w-75 text-center">At Med-Chain, our vision revolves around a future where healthcare data is seamlessly connected, fostering improved patient outcomes and streamlined medical processes. We aspire to lead the transformation of healthcare information management by promoting interoperability, security, and accessibility. Med-Chain aims to serve as the catalyst for a global shift towards a patient-centric healthcare ecosystem, granting individuals control over their health records for better-informed medical decisions and enhanced overall well-being.</h3>
        {/* <Link to="/Web5form" className="text-decoration-none bg-amber-400 rounded-2xl">
          <button className="btn  d-block mx-auto bg-amber-400">Book an Appointment</button>
        </Link> */}
      </div>
    </div>
  );
};

export default About;
