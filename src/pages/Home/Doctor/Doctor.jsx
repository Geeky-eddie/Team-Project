import React from "react";
import { Link } from "react-router-dom"; 

const Doctor = (props) => {
  const { name, categories, weekDays, time, pic } = props.doctor;
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card">
          <img src={pic} className="card-img-top" alt="..." height="200" />
          <div className="card-body">
            <h4 className="card-title text-center">{name}</h4>
            <h6>
              <i className="fas fa-user-nurse"></i> Title: {categories}
            </h6>
            <h6>
              <i className="fas fa-calendar-week"></i> Open: {weekDays} {time}
            </h6>
            {/* <h6>
              <i className="fas fa-calendar-week"></i> Fee: {fees}₦
            </h6> */}
            <Link as={Link}  to="/Web5form" className="text-decoration-none">
              <button className="default-btn d-block mx-auto bg-amber-400 w-40 h-10 rounded-lg text-lg text-black  "><span className=" w-full">Book Now</span></button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctor;
