import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from './pages/Home/Home.tsx';
import { ContactUs } from './pages/ContactUs/ContactUs.tsx';
import { AboutUs } from './pages/AboutUs/AboutUs.tsx';
import { OurProducts } from './pages/OurProducts/OurProducts.tsx';


export const webRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/our-products",
    element: <OurProducts />,
  },
]);
