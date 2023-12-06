import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../src/pages/Header/Header";
import Footer from "../src/pages/Footer/Footer";
import Home from "../src/pages/Home/Home/Home";
import Empty from "../src/pages/Empty/Empty";
import Services from "../src/pages/Services/Services";
import About from "../src/pages/Home/About/About";
// import ServiceDetail from "./Pages/Home/ServiceDetail/ServiceDetail";
import Appointment from "../src/pages/Appointment/Appointment";
import Success from "../src/pages/Success/Success";
import Web5form from "../src/pages/Web5/nextindex";



function App() {
 

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/Web5form" element={<Web5form />} /> 
          {/* <Route path="/service/:serviceId" element={<ServiceDetail />} /> */}
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<Empty />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App
