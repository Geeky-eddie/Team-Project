import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Geeky-eddie/Team-Project/master/public/servicesfetched.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return [services, setServices];
};

export default useServices;
