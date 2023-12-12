import React from "react";
import { Link } from "react-router-dom";
// import useServices from "../../../Hooks/useServices";
// import Service from "../../../pages/Home/Service/Service";
import Image1 from "../../../Images/About/accurate.png";
import Image2 from "../../../Images/About/ehr.png";
import Image3 from "../../../Images/About/health.png";
import Image4 from "../../../Images/About/privacy.png";

const ServicesSection = () => {
  // const [services] = useServices();

  return (
    <div className="my-5">
      <h2 className="text-center blue-color">
        <i className="fas fa-flask"></i> OUR SERVICES
      </h2>
      <p className="text-center fs-5">Your Source for Safe Health Records</p>
      <div className="container flex flex-col md:flex-row md:space-x-4 lg:space-x-8">
  <div className="card mb-4 md:mb-0">
  
          <div className="card-body">
          <img src={Image1} className="card-img-top" alt="image" height="200" />
            <h4 className="card-title text-center  text-cyan-500">Accurate Information</h4>
           
            <p>Provide accurate, up-to-date, and complete health information about patients.</p>
           
          </div>
  </div>

  <div className="card mb-4 md:mb-0">
  
          <div className="card-body">
          <img src={Image2} className="card-img-top" alt="image" height="200" />
            <h4 className="card-title text-center">Sharing Power</h4>
           
            <p>Share personal health record anywhere at anytime better and timely decision making.</p>
           
          </div>
  </div>

  <div className="card mb-4 md:mb-0">
  
          <div className="card-body">
          <img src={Image3} className="card-img-top" alt="image" height="200" />
            <h4 className="card-title text-center">Help Health Providers</h4>
           
            <p>Helping Doctors effectively diagnose the patients and prescribe accurate treatments</p>
           
          </div>
  </div>

  <div className="card mb-4 md:mb-0">
  <img src={Image4} className="card-img-top" alt="image" height="200" />
          <div className="card-body">
            <h4 className="card-title text-center">Privacy and Security</h4>
           
            <p>Enhancing privacy and security of patient and family's medical records.</p>
           
          </div>
  </div>


        
       
      </div>
      <Link to="/services" className="text-decoration-none">
          <button className="btn btn-secondary d-block mx-auto">More Services</button>
        </Link>
    </div>
  );
};

export default ServicesSection;
