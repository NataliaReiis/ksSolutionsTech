/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { scaleVariant, aniX } from "../utils/animations";
import { motion } from "framer-motion";

import Logo from '../assets/img/logoColorida.png'

export default function NavBar() {
  return (
    <>
      <motion.nav 
        className="navbar"
        variants={aniX} 
        initial="hidden" 
        animate="show"
      >
        <Link to="/" className="image-container">
          <motion.img src={Logo} alt="" 
            whileTap="tap"
            whileHover="hover"
            variants={scaleVariant}
          />
        </Link>
        <motion.ul className="links-container">
          <Link to="/" >
            <motion.li
              className="links"
              whileTap="tap"
              whileHover="hover"
              variants={scaleVariant}
            >
              Home
            </motion.li >
          </Link>
          <Link to="/solutions">
            <motion.li
              className="links"
              whileTap="tap"
              whileHover="hover"
              variants={scaleVariant}
            >
              Soluções KS
            </motion.li>
          </Link>
          <Link to="/about">
            <motion.li
              className="links"
              whileTap="tap"
              whileHover="hover"
              variants={scaleVariant}
            >
              Sobre
            </motion.li>
          </Link>
          <Link to="/contact">
            <motion.li
              className="links"
              whileTap="tap"
              whileHover="hover"
              variants={scaleVariant}
            >
              Contato
            </motion.li>
          </Link>
        </motion.ul>
        <div className="button-especialista">
          <button>Falar com um especialista</button>
        </div>
      </motion.nav>
    </>
  );
}
