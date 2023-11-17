/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {

  const [isDarkMode, setDarkMode] = useState(true);


  useEffect(() => {
    const body = document.body;
    if (!isDarkMode) {
      body.classList.add("light-mode");
    } else {
      body.classList.remove("light-mode");
    }
  }, [isDarkMode]);

   useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: light)");
    if (prefersDark.matches) {
      setDarkMode(false);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleTheme: () => setDarkMode(!isDarkMode) }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
