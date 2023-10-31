/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [isDarkMode, setDarkMode] = useState(true); // Initialize as true for dark mode
  const [isStylesReady, setStylesReady] = useState(isDarkMode); // Styles are ready if isDarkMode is true

  useEffect(() => {
    const darkStyle = document.getElementById("dark-theme-style");
    const lightStyle = document.getElementById("light-theme-style");

    // Function to set styles ready and remove listeners
    const handleStylesReady = () => {
      setStylesReady(true);
      darkStyle.removeEventListener("load", handleStylesReady);
      lightStyle.removeEventListener("load", handleStylesReady);
    };

    darkStyle.addEventListener("load", handleStylesReady);
    lightStyle.addEventListener("load", handleStylesReady);

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
      {isStylesReady ? children : null}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
