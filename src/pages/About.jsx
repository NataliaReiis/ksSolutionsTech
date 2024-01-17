import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Partners from "../components/home/Partners";
import Team from "../components/about/Team";

import about from "../assets/img/about.png";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import visao from '../assets/img/icon5.png'
import metodologia from '../assets/img/icon6.png'
import missao from '../assets/img/icon7.png'

const values = [
  {
    title: "Visão",
    description:
      "Mapear/Analisar processos e rotinas x tecnologias existentes, identificar os pontos de atenção e sugerir melhorias conforme Planejamento Estratégico da Instituição e seu Plano Orçamentário",
    image: visao,
  },
  {
    title: "Metodólogia",
    description:
      "Ser referência no mercado em que atuamos despertando em nossos clientes uma parceira de melhoria contínua estimulando o uso consciente da tecnologia dentro de um perfil sustentável.",
    image: metodologia,
  },
  {
    title: "Missão",
    description:
      "Estimular em nossos clientes e parceiros uma relação com a tecnologia de forma que ela seja efetiva para suas demandas contribuindo para o crescimento e desenvolvimento do seu proposito empresarial",
    image: missao,
  },
];

export default function About() {
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
        nav, .about-infos-container,.values-container,.scroll-container,.partners,footer
      `,
        { interval: 500 }
      );
    };
    animationsScroll();
  }, []);

  window.setTimeout(() => {
    const about = document.getElementsByClassName("about-infos-container");
    about[0].computedStyleMap.transform = "none";
    const nav = document.getElementsByName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    <div className="about">
      <Navbar />
      <div className="about-infos-container">
        <img src={about} alt="" />
        <div className="text-content">
          <h1>Descubra a KS e AMPLIE seus horizontes! </h1>
          <p>
            A KS, que se revela como uma chave para entendimentos mais
            profundos, não apenas abre portas, mas também amplia nossos
            horizontes de maneiras inesperadas. Ao nos aventurarmos por esse
            caminho de descobertas, encontramos um terreno fértil para expandir
            nossas perspectivas e abraçar experiências enriquecedoras.
          </p>
          <Link to="/contact">
            <button>Entrar em contato</button>
          </Link>
        </div>
      </div>
      <div className="values-container">
        {values.map((value, index) => (
          <div className="values-item" key={index}>
            <img src={value.image} alt="icons-about" />
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
      <Team />
      <Partners />
      <Footer />
    </div>
  );
}
