import { useEffect, useState } from "react";

const useDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Geeky-eddie/Team-Project/blob/master/public/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return [doctors, setDoctors];
};

export default useDoctors;
