/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { scaleVariant, aniX } from "../utils/animations";
import { motion } from "framer-motion";

export default function NavBar(props) {
  return (
    <>
      <motion.nav style={{ background: props.bg }}
        variants={aniX} 
        initial="hidden" 
        animate="show"
      >
        <Link to="/">
          <motion.img src={props.logo} alt="" 
            whileTap="tap"
            whileHover="hover"
            variants={scaleVariant}
          />
        </Link>
        <motion.ul>
          <Link to="/">
            <motion.li
              style={{ color: props.colortxt }}
              whileTap="tap"
              whileHover="hover"
              variants={scaleVariant}
            >
              Home
            </motion.li>{" "}
          </Link>
          <Link to="/solutions">
            <motion.li
              style={{ color: props.colortxt }}
              whileTap="tap"
              whileHover="hover"
              variants={scaleVariant}
            >
              Soluções e projetos
            </motion.li>{" "}
          </Link>
          <Link to="/about">
            <motion.li
              style={{ color: props.colortxt }}
              whileTap="tap"
              whileHover="hover"
              variants={scaleVariant}
            >
              Sobre
            </motion.li>{" "}
          </Link>
          <Link to="/contact">
            <motion.li
              style={{ color: props.colortxt }}
              whileTap="tap"
              whileHover="hover"
              variants={scaleVariant}
            >
              Contato{" "}
            </motion.li>
          </Link>
        </motion.ul>
      </motion.nav>
    </>
  );
}
