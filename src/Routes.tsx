import React from "react";
import { Home } from "./pages/Home/Home.tsx";
import { ContactUs } from "./pages/ContactUs/ContactUs.tsx";
import { AboutUs } from "./pages/AboutUs/AboutUs.tsx";
import { OurProducts } from "./pages/OurProducts/OurProducts.tsx";
import {
  BoxFilled,
  HomeFilled,
  PersonCallFilled,
  PersonQuestionMarkFilled,
} from "@fluentui/react-icons";

export const pageData = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
    icon: <HomeFilled />,
  },
  {
    path: "/our-products",
    element: <OurProducts />,
    title: "Our Products",
    icon: <BoxFilled />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
    title: "Contact Us",
    icon: <PersonCallFilled />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
    title: "About Us",
    icon: <PersonQuestionMarkFilled />,
  },
];
