import Navbar from "../components/Navbar";
import Beneficits from "../components/Benefits";
import Projects from '../components/Projects';
import CardSolutions from '../components/CardsSolutions';
import Footer from '../components/Footer';

import ImgPrincipal from "../assets/img/ImgPrincipal.png";

import { motion } from "framer-motion";
import {aniX, scaleVariant, init} from "../utils/animations";



export default function Home() {

  return (
    <div className="home">
       <Navbar />
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
            Descubra os Benefícios da Consultoria em Gestão de Processos e Automação Robótica: Potencialize a Eficiência Operacional, Reduza Custos e Leve Sua Empresa para o Próximo Nível Tecnológico.
            </p>
            <div>
              <motion.button
                whileTap="tap"
                whileHover="hover"
                variants={scaleVariant }
              >
                Entrar em contato </motion.button>
            </div>
            
          </motion.div>
          <div className="image-principal-container">
            <img src={ImgPrincipal} alt="" />
        </div>
      </main>
      <CardSolutions />
      <Beneficits />
      <Projects />
      <Footer/>
  </div>
  );
}
