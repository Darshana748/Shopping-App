import React from "react";
import { RouterProvider } from "react-router-dom";
import { webRoutes } from "./Routes.tsx";
import { Toolbar } from './Toolbar/Toolbar.tsx'
const App = () => {
  return (
    <>
      <Toolbar/>
      <RouterProvider router={webRoutes} />
    </>
  );
};

export default App;
