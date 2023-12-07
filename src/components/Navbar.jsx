import { useState } from "react";
import { Link } from "react-router-dom";
import { scaleVariant, aniX } from "../utils/animations";

import { motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";

/* import WbSunnyIcon from '@mui/icons-material/WbSunny';
 */
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "../assets/img/logoColorida.png";

export default function NavBar() {
  const [navState, setNavState] = useState(false);

  const toggleMenu = () => {
    setNavState(!navState);
  };
  /* <div className="navbar">
      <div className="logo">Logo</div>
      <IconButton color="inherit" onClick={handleMenuClick} className="toggle">
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div> */
  return (
      <motion.nav
        className="navbar"
        variants={aniX}
        initial="hidden"
        animate="show"
      >
        <div className="brand">
          <Link to="/">
            <motion.img
              src={Logo}
              alt=""
              whileTap="tap"
              whileHover="hover"
              variants={scaleVariant}
            />
          </Link>
        </div>
        <IconButton color="inherit" onClick={toggleMenu} className="toggle">
          {navState ? <CloseIcon className="x" /> : <MenuIcon />}
        </IconButton>
        <div className={`nav-container ${navState ? "nav-visible" : ""} `}>
          <motion.ul className="links-container">
            <Link to="/">
              <motion.li
                whileTap="tap"
                whileHover="hover"
                variants={scaleVariant}
              >
                Home
              </motion.li>
            </Link>
            <Link to="/solutions">
              <motion.li
                whileTap="tap"
                whileHover="hover"
                variants={scaleVariant}
              >
                Soluções KS
              </motion.li>
            </Link>
            <Link to="/about">
              <motion.li
                whileTap="tap"
                whileHover="hover"
                variants={scaleVariant}
              >
                Sobre
              </motion.li>
            </Link>
            <Link to="/contact">
              <motion.li
                whileTap="tap"
                whileHover="hover"
                variants={scaleVariant}
              >
                Contato
              </motion.li>
            </Link>
          </motion.ul>
        </div>
        <div className="button-especialista">
          <button>Falar com um especialista</button>
        </div>
      </motion.nav>
  );
}
