import React from "react";
// import "./header.css";
import { Link } from "react-router-dom";
import { logo, moon, sun } from "../../../assets";
import { useTheme } from "../../../theme/useTheme";
import "./header.css";
import { NavLink } from "react-router-dom";
// import { logo, moon } from "../../../assets";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className="flex justify-between items-center wraph">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="logo" />
        <div className="title">Escrow-Tech</div>
      </div>
      <div className="flex w-2/5 justify-between links">
        <NavLink to="/" className="text">
          Home
        </NavLink>
        <NavLink to="/about" className="text">
          About
        </NavLink>
        <NavLink to="/portfolio" className="text">
          Portfolio
        </NavLink>
        <NavLink to="/services" className="text">
          Services
        </NavLink>
        <NavLink to="/contact" className="text">
          Contact
        </NavLink>
      </div>
      <div className="btn" onClick={toggleTheme}>
        <img src={isDarkMode ? sun : moon} alt="" className="btn_img" />
        <div className="btn_text">{isDarkMode ? "Light" : "Dark"}</div>
      </div>
    </div>
  );
};

export default Header;
