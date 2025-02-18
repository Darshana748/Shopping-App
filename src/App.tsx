import React from "react";
import {
  BrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { pageData } from "./Routes";
import { Toolbar } from "./Toolbar/Toolbar";
const App = () => {
  return (
    <BrowserRouter>
      <Toolbar />
      <Routes>
        {pageData.map((item) => (
          <Route path={item.path} element={item.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
