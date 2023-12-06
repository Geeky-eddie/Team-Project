import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './tailwind/Tailwind.css'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home/Home";
import Empty from "./Empty/Empty";
import Services from "./Services/Services";
import About from "./Home/About/About";
// import ServiceDetail from "./Pages/Home/ServiceDetail/ServiceDetail";
import Appointment from "./Appointment/Appointment";
import Success from "./Success/Success";
import DIDform from "./Didform";

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
          <Route path="/didform" element={<DIDform />} /> {/* New route */}
          {/* <Route path="/service/:serviceId" element={<ServiceDetail />} /> */}
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<Empty />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
