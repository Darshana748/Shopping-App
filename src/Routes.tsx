import React from "react";
import { Home } from "./pages/Home/Home";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { OurProducts } from "./pages/OurProducts/OurProducts";
import {
  BoxFilled,
  BoxRegular,
  bundleIcon,
  HomeFilled,
  HomeRegular,
  PersonCallFilled,
  PersonCallRegular,
  PersonQuestionMarkFilled,
  PersonQuestionMarkRegular,
} from "@fluentui/react-icons";

const HomeIcon = bundleIcon(HomeFilled,HomeRegular);
const BoxIcon = bundleIcon (BoxFilled,BoxRegular );
const ContactIcon = bundleIcon(PersonCallFilled,PersonCallRegular);
const AboutIcon = bundleIcon(PersonQuestionMarkFilled ,PersonQuestionMarkRegular)

export const navData = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    path: "/our-products",
    element: <OurProducts />,
    title: "Our Products",
    icon: <BoxIcon />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
    title: "Contact Us",
    icon: <ContactIcon />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
    title: "About Us",
    icon: <AboutIcon />,
  },
];
