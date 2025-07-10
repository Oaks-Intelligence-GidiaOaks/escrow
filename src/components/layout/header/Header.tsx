import React, { useRef, useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { logo, moon, sun } from "../../../assets";
import { useTheme } from "../../../theme/useTheme";
import { NavLink } from "react-router-dom";
import { useClickAway } from "react-use";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));
  const routes = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="">
      <div className="flex justify-between items-center w-full pb-8">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="logo" />
         <div className="flex flex-col ml-2">
            <div className="title title-light">Escrow-Tech</div>
            <div className="title title-light" style={{ fontSize: "18px" }}>
              UK & NI
            </div>
          </div>
        </div>
        <div className="flex w-2/5 justify-between links">
          <NavLink to="/" className={`text-h`}>
            <span style={{ color: `${isDarkMode ? "white" : "#232323"}` }}>
              Home
            </span>
          </NavLink>
          <NavLink to="/about" className="text-h">
            <span style={{ color: `${isDarkMode ? "white" : "#232323"}` }}>
              About
            </span>
          </NavLink>
          <NavLink to="/portfolio" className="text-h">
            <span style={{ color: `${isDarkMode ? "white" : "#232323"}` }}>
              Portfolio
            </span>
          </NavLink>
          <NavLink to="/services" className="text-h">
            <span style={{ color: `${isDarkMode ? "white" : "#232323"}` }}>
              Services
            </span>
          </NavLink>
          <NavLink to="/contact" className="text-h">
            <span style={{ color: `${isDarkMode ? "white" : "#232323"}` }}>
              Contact
            </span>
          </NavLink>
          <NavLink to="/blog" className="text-h">
            <span style={{ color: `${isDarkMode ? "white" : "#232323"}` }}>
              Blog
            </span>
          </NavLink>
        </div>

        <div className="btn" onClick={toggleTheme}>
          <img
            src={isDarkMode ? sun : moon}
            alt=""
            className="btn_img"
            style={{
              filter: isDarkMode
                ? "brightness(0%) invert(80%)"
                : "brightness(130%) invert(100%)",
            }}
          />
          <div className="btn_text">{isDarkMode ? "Light" : "Dark"}</div>
        </div>
        <div className="hiddenn" ref={ref}>
          <Hamburger
            toggled={isOpen}
            size={30}
            toggle={setOpen}
            color={isDarkMode ? "#fff" : "#232323"}
          />
        </div>
      </div>

      <div className="hiddenn pb-5">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-neutral-950 bg-opacity-90 backdrop-blur-md box-menu"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className=" w-full pt-0 border-b border-white/20 shadow-lg rounded-lg box-menu-inner"
              >
                <ul className="grid gap-2 bg-inherit pt-0">
                  {routes.map((route, idx) => (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + idx / 10,
                      }}
                      key={route.title}
                      className="w-full p-[0.08rem] rounded-xl  text-white"
                    >
                      <NavLink
                        onClick={() => setOpen((prev) => !prev)}
                        className={`flex items-center justify-center w-full rounded-xl mobile-nav text-2xl`}
                        to={route.href}
                      >
                        <span className="flex gap-1 pb-5 hover:text-white link-text">
                          {route.title}
                        </span>
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
