import ReactDOM from "react-dom/client";
import "./index.css";
import './i18n/i18n.js';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import loaderImg from './assets/img/loader/aa41b779-88c4-4808-ab3e-be229d40b802.gif'
import { Suspense, lazy } from "react";
import {
  Navigate,
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
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import WeDev from "./pages/SingleService/WeDev.jsx";
import { Blogs } from "./pages/Blogs/Blogs.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import { PortfolioPage } from "./pages/Portfolio/PortfolioPage.jsx";

const RouterStructure = () => {
  
  return (
   
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<RootLayout />}>
            <Route path="/" index element={<App />} />
            <Route path="AboutUs"  element={<AboutUs/>} />
            <Route path="ContactUs"  element={<ContactUs/>} />
            <Route path="Portfolio"  element={<PortfolioPage/>} />
            <Route path="Blogs"  element={<Blogs/>} />
            <Route path="Services"  element={<Services/>} />
            <Route path="SingleService"  element={<SingleService/>} >
            <Route index element={<Navigate to="DesignAndDevelopment" />} />
            <Route path="DesignAndDevelopment"  element={<DesignAndDevelopment/>} />
            <Route path="WebDev"  element={<WeDev/>} />
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

