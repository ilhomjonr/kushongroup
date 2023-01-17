import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { BASE_URL } from "../pages/_app";

export const ServicesContext = createContext();

export default function ServicesContextProvider({ children }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/services")
      .then((res) => {
        setServices(res.data.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const value = { services, setServices };

  return (
    <ServicesContext.Provider value={value}>
      {children}
    </ServicesContext.Provider>
  );
}
