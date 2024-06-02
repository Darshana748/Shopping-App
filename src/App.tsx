import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toolbar } from "./Toolbar/Toolbar";
import {
  FluentProvider,
  teamsDarkTheme,
  teamsLightTheme,
} from "@fluentui/react-components";
import { pageData } from "./data/Data";

const App = () => {
  const [themeValue, setTheme] = useState(teamsLightTheme);
  return (
    <FluentProvider theme={themeValue}>
      <BrowserRouter>
        <Toolbar changeTheme={setTheme} theme={themeValue} />
        <Routes>
          {pageData.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </FluentProvider>
  );
};

export default App;
