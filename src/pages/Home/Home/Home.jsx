import React from "react";
import { useState, useEffect } from 'react';
import AppointmentSection from "../../Home/AppointmentSection/AppointmentSection";
import Banner from "../../Home/Banner/Banner";
import ContactSection from "../../Home/ContactSection/ContactSection";
import Preloader from "../../Preloader/preloader";
import ServicesSection from "../../Home/ServicesSection/ServicesSection";

const Home = () => {
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
    <div>
       {loading && <Preloader />}
      <Banner></Banner>  
      <ServicesSection></ServicesSection>
      <ContactSection></ContactSection>
      <AppointmentSection></AppointmentSection>
    </div>
  );
};

export default Home;
