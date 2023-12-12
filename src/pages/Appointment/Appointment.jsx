import React from "react";
import { useState, useEffect } from 'react';
import useDoctors from "../../Hooks/useDoctors";
import Doctor from "../Home/Doctor/Doctor";
import Preloader from "../Preloader/preloader";

const Appointment = () => {
  const [doctors] = useDoctors();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    const fetchData = async () => {
   

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    
    <div className="py-5 bg-cyan-500 shadow-lg shadow-cyan-500/50">
      {loading && <Preloader />}

      <h2 className="text-center blue-color">Request Appointment</h2>
      <p className="text-center fs-5">Make sure to make an appointment before visiting our clinic</p>
      <div className="container">
        <div className="row g-3">
          {doctors.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor}></Doctor>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
