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
const RouterStructure = () => {
  function delayForDemo(promise) {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    }).then(() => promise);
  }
  let HomeLazy = lazy(() => delayForDemo(import("./App.jsx")));
  return (
   
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<RootLayout />}>
            
            <Route path="/" index element={<App />} />
          </Route>
        )
      )}
    />

  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterStructure />
);

