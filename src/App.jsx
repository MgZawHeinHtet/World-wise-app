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
import City from "./components/City";
import Form from "./components/Form";
import { Navigate } from "react-router-dom";
import { CitiesProvider, useCities } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import { ProtectRotue } from "./pages/ProtectRoute";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<HomePage />}></Route>
            <Route path="product" element={<Product />}></Route>
            <Route path="price" element={<Pricing />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route
              path="app"
              element={
                <ProtectRotue>
                  <AppLayout />
                </ProtectRotue>
              }
            >
              <Route
                index
                element={<Navigate replace to="cities"></Navigate>}
              ></Route>
              <Route path="cities" element={<CityList />}></Route>
              <Route path="cities/:id" element={<City />}></Route>
              <Route path="countries" element={<CountryList />}></Route>
              <Route path="form" element={<Form />}></Route>
            </Route>

            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
