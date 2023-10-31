/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  // const [isDarkMode, setDarkMode] = useState(!prefersDarkMode);
  const [isDarkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const darkStyle = document.getElementById("dark-theme-style");
    const lightStyle = document.getElementById("light-theme-style");

    if (isDarkMode) {
      darkStyle.removeAttribute("disabled");
      lightStyle.setAttribute("disabled", "true");
    } else {
      lightStyle.removeAttribute("disabled");
      darkStyle.setAttribute("disabled", "true");
    }

    // if (isDarkMode) {
    //   lightStyle.removeAttribute("disabled");
    //   darkStyle.setAttribute("disabled", "true");
    // } else {
    //   lightStyle.removeAttribute("disabled");
    //   darkStyle.setAttribute("disabled", "true");
    // }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleTheme: () => setDarkMode(!isDarkMode) }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
