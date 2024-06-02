import React from "react";
import { AboutUs } from "../pages/AboutUs/AboutUs";
import { ContactUs } from "../pages/ContactUs/ContactUs";
import { Home } from "../pages/Home/Home";
import { OurProducts } from "../pages/OurProducts/OurProducts";
import { LogIn } from "../pages/LogIn/LogIn";
export const pageData = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/our-products",
    element: <OurProducts />,
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
    path:"/login",
    element: <LogIn/>
  },
];

export const useData=[
    {
        name: "Ravi Ghale",
        email: "ravighale777gmail.com",
        password: "ravi@7"
    },
    {
        name: "Darshana Chinde",
        email: "darshanajain748gmail.com",
        password: "darsh@18"
    },
    {
        name: "Guest",
        email: ""
    }
]
