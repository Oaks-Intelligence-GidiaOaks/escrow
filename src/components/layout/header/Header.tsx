import React from "react";
// import "./header.css";
import { Link } from "react-router-dom";
import { logo, moon, sun } from "../../../assets";
import { useTheme } from "../../../theme/useTheme";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className="flex justify-between items-center pb-[45px]">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="logo" />
        <div className="title">Escrow-Tech</div>
      </div>
      <div className="flex w-2/5 justify-between links">
        <Link to="/" className="text">
          Home
        </Link>
        <Link to="/about" className="text">
          About
        </Link>
        <Link to="/services" className="text">
          Services
        </Link>
        <Link to="/contact" className="text">
          Contact
        </Link>
      </div>
      <div className="btn" onClick={toggleTheme}>
        <img src={isDarkMode ? sun : moon} alt="" className="btn_img" />
        <div className="btn_text">{isDarkMode ? "Light" : "Dark"}</div>
      </div>
    </div>
  );
};

export default Header;