import ReactDOM from "react-dom/client";
import "./index.css";
import './i18n/i18n.js';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import loaderImg from './assets/img/loader/aa41b779-88c4-4808-ab3e-be229d40b802.gif'
import { Suspense, lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Services from "./pages/Services/Services.jsx";
import "aos/dist/aos.css";
import SingleService from "./pages/SingleService/SingleService.jsx";
import DesignAndDevelopment from "./pages/SingleService/DesignAndDevelopment.jsx";

const RouterStructure = () => {
  
  return (
   
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<RootLayout />}>
            <Route path="/" index element={<App />} />
            <Route path="AboutUs"  element={<AboutUs/>} />
            <Route path="Services"  element={<Services/>} />
            <Route path="SingleService"  element={<SingleService/>} >
            <Route path="DesignAndDevelopment" index element={<DesignAndDevelopment/>} />
            </Route>
            
          </Route>
        )
      )}
    />

  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterStructure />
);

