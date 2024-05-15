import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import { useEffect, useState } from "react";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City"
import Form from "./components/Form"
import { Navigate } from "react-router-dom";

const BASE_URL = 'http://localhost:8000'

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true)
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data)
      } catch (error) {
        alert(error.message);
      }finally{
        setIsLoading(false)
      }
    }

    fetchCities()
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="price" element={<Pricing />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities"></Navigate>} ></Route>
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>}></Route>
          <Route path="cities/:id" element={<City/>}></Route>
          <Route path="countries" element={<CountryList isLoading={isLoading} cities={cities}/>}></Route>
          <Route path="form" element={<Form/>}></Route>
        </Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
