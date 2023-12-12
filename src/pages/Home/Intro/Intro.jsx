import React from "react";
import introBanner from "../../../assets/Images/Banner/intro-banner.png";

const Intro = () => {
  return (
    <div className="container overflow-hidden my-5 border bg-light shadow-lg rounded-3">
      <div className="row gy-5">
        <div className="col-12 col-md-5">
          <div className="p-3">
            <img className="img-fluid" src={introBanner} alt="" />
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="p-3">
            <h1 className="fw-extrabold blue-color">WHY CHOOSE US?</h1>
            <p className="fs-5">
            Med-Chain is the most widespread application of big data in medicine. Every person has their own digital record, which includes demographics, medical history, allergies, laboratory test results, etc. Records are shared via secure information systems and are available for providers from both the public and private sectors. Every record is comprised of one modifiable file, which means that doctors can implement changes over time with no paperwork and no danger of data replication.

EHRs can also trigger warnings and reminders when a patient should get a new lab test or track prescriptions to see if he or she has been following doctor's orders.{" "}
            </p>
            <p className="fs-5">At Med-Chain we ensure a Secure and Decentralized patient record system</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
