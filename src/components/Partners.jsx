/* eslint-disable no-undef */
import lecom from "../assets/img/lecom.png";
import nomus from "../assets/img/nomus.png";
import artia from "../assets/img/artia.png";
import omie from "../assets/img/omie.png";
import formulaCerta from "../assets/img/formulaCerta.png";

import { motion } from "framer-motion";
/* import { loop } from '../utils/animations' */

export default function Partners() {
  return (
    <div className="partners-container">
      <h1>Parceiros</h1>
      <motion.div
        className="partners"
        /*   initial="hidden"
      animate="show"
      variants={loop}
      onTap={() => {
        const nextAnimation = variants.animate ? 'back' : 'show';
        variants.animate = nextAnimation;
      }} */
      >
        <img src={lecom} alt="" />
        <img src={nomus} alt="" />
        <img src={artia} alt="" />
        <img src={omie} alt="" />
        <img src={formulaCerta} alt="" />
      </motion.div>
    </div>
  );
}
