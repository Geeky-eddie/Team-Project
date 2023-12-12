import React from "react";
import AppointmentSection from "../../Home/AppointmentSection/AppointmentSection";
import Banner from "../../Home/Banner/Banner";
import ContactSection from "../../Home/ContactSection/ContactSection";

import ServicesSection from "../../Home/ServicesSection/ServicesSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>  
      <ServicesSection></ServicesSection>
      <ContactSection></ContactSection>
      <AppointmentSection></AppointmentSection>
    </div>
  );
};

export default Home;
