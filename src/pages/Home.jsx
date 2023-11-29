import Navbar from "../components/Navbar";
import ImageSVG from "../components/ImageSVG";

import LogoBranca from "../assets/img/logoBranca.png";
import { motion } from "framer-motion";
import {aniX, scaleVariant, init} from "../utils/animations";



export default function Home() {

  return (
    <div className="home">
      <Navbar style={{paddingTop: "2rem"}} logo={LogoBranca} colortxt="white" bg="#010615" />
      <main className="main-container">
        <motion.div
            className="container-home"
            variants={init}
            initial="hidden"
            animate="show"
          >
            <motion.h2 
              variants={aniX} 
              initial="hidden" 
              animate="show"
              >
              Gestão de Processos e </motion.h2>
            <motion.h1 
              variants={aniX} 
              initial="hidden" 
              animate="show"
            
              >
              Tecnologia</motion.h1>
            <p>
              Uso consciente e efetivo das tecnologias disponíveis para aprimorar
              processos e rotinas.
            </p>
            <div>
              <motion.button
                whileTap="tap"
                whileHover="hover"
                variants={scaleVariant }
              >
                Entrar em contato </motion.button>
              <motion.button
              whileTap="tap"
              whileHover="hover"
              variants={scaleVariant }
              >
                Ver soluções KS</motion.button>
            </div>
            
          </motion.div>
          <motion.div 
          className="image-principal-container"
          variants={aniX} 
          initial="hidden" 
          animate="show"
          >
             <ImageSVG className="svg" />
          </motion.div>
      </main>
      
  </div>
  );
}
