import Navbar from "../components/Navbar";
import Beneficits from "../components/home/Benefits";
import Projects from "../components/home/Projects";
import CardSolutions from "../components//home/CardsSolutions";
import Footer from "../components/Footer";
import Partners from "../components/home/Partners";

import ImgPrincipal from "../assets/img/ImgPrincipal.png";

import { motion } from "framer-motion";
import { scaleVariant } from "../utils/animations";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

export default function Home() {
  useEffect(() => {
    // Animação scroll
    const animationsScroll = () => {
      const sr = ScrollReveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,.main-container, .card-solutions,.beneficts,.projects,.partners,footer
      `,
        { interval: 500 }
      );
    };
    animationsScroll();
  }, []);

  window.setTimeout(() => {
    const home = document.getElementsByClassName("card-solutions");
    home[0].computedStyleMap.transform = "none";
    const nav = document.getElementsByName("nav");
    nav[0].style.transform = "none";
  }, 1500);

  return (
    <div className="home">
      <Navbar />
      <div className="main-container">
        <div className="container-home">
          <h2>Gestão de Processos e </h2>
          <h1>Tecnologia</h1>
          <p>
            Descubra os Benefícios da Consultoria em Gestão de Processos e
            Automação Robótica: Potencialize a Eficiência Operacional, Reduza
            Custos e Leve Sua Empresa para o Próximo Nível Tecnológico.
          </p>
          <div>
            <Link to='/contact'>
            <motion.button
              whileTap="tap"
              whileHover="hover"
              variants={scaleVariant}
            >
              Entrar em contato{" "}
            </motion.button>
            </Link>
            
          </div>
        </div>
        <div className="image-principal-container">
          <img src={ImgPrincipal} alt="" />
        </div>
      </div>
      <CardSolutions />
      <Beneficits />
      <Projects />
      <Partners />
      <Footer />
    </div>
  );
}
