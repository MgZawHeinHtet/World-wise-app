import { lazy } from "react";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { Navigate } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import { ProtectRotue } from "./pages/ProtectRoute";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import SpinnerFullPage from "./components/SpinnerFullPage";

const HomePage = lazy(()=>import('./pages/Homepage'));
const Product = lazy(()=>import('./pages/Product'));
const Pricing = lazy(()=>import('./pages/Pricing'));
const PageNotFound = lazy(()=>import('./pages/PageNotFound'));
const Login = lazy(()=>import('./pages/Login'));
const AppLayout = lazy(()=>import('./pages/AppLayout'));



function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage/>}>
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
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
