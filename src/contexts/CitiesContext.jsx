import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const CitiesContext = createContext();

const BASE_URL = "http://localhost:8000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCity,setCurrentCity] = useState({})

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  async function getCity(id){
    try {
        console.log(id);
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        
        setCurrentCity(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        currentCity,
        isLoading,
        getCity
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("context apply should on the provider service ");
  }
  return context;
}

export { CitiesProvider, useCities };
