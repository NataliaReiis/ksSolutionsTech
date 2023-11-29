import React, { useState } from 'react';

export default function Projects() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      id: 0,
      title: 'Gestão de Processos ',
      description: 'Rumo à Excelência na Organização Empresarial: Otimizando Fluxos e Desempenho"',
      txt: 'Transforme a maneira como sua empresa opera com nossos serviços especializados em Gestão de Processos. Nossa abordagem personalizada visa otimizar cada aspecto das operações, desde a análise até a implementação, garantindo eficiência e agilidade.',
      image: 'public/Innovation.gif',
    },

    {
      id: 1,
      title: 'Implantação ERP e Robô',
      description: 'Automatizando a Gestão Empresarial: Inovação com ERP e Soluções Robóticas',
      txt:"Oferecemos serviços especializados para impulsionar seu negócio, combinando implantação de ERP e automação robótica. Transforme processos, ganhe agilidade e alcance novos patamares de eficiência com nossa expertise. Potencialize seu sucesso com soluções inovadoras e personalizadas", 
      image: 'public/extraction.gif',
    },
    {
      id: 2,
      title: 'Analise e implantação',
      description: 'Desvendando Estratégias: Análise e Implementação em Foco',
      txt: 'Nossa abordagem começa com uma análise meticulosa, identificando oportunidades de melhoria e áreas críticas para intervenção. Com insights valiosos em mãos, nossa equipe experiente desenvolve um plano de implantação personalizado, garantindo uma transição suave e eficaz',
      image: 'public/Analytics.gif',
    },
  ];

  const handleSectionChange = (index) => {
    setActiveSection(index);
  }

  return (
    <>
      <div id="projects" className="projects animate">
        <div className="container animate">
          {sections.map((section, index) => (
            <div
              className={`project-section ${index === activeSection ? 'active' : ''}`}
              id={`section-${section.id}`}
              key={index}
            >
              <div className="texto-projects">
                <h6>{section.title}</h6>
                <h1>{section.description}</h1>
                <p>{section.txt}</p>
              </div>
              <div className="img-projects">
                <img src={section.image} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="navigation">
          {sections.map((section, index) => (
            <a
              key={index}
              className={index === activeSection ? 'active' : ''}
              onClick={() => handleSectionChange(index)}
            >
              {section.title}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}