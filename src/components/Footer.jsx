import { Link } from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {

  const solutions = [
    'Gestão de processos e tecnologia',
    'Implantação ERP e robô',
    'Analise e Implantação',
    'Automação de sistemas e processos'
  ];

  const infos = [
    {
      phone:'(71) 2137-1747',
      email: 'contato@kssolutions.tech',
      location: 'Edifício Macêdo - R. Francisco Drumond, 41 - Centro, Camaçari - BA, 42800-063'
    }
  ]
  return (
    <footer className="footer">
      
      <div className="container-menu">
        <h4>Menu</h4>
        <ul className="links-container">
          <Link to="/"><li className="links">Home</li></Link>
          <Link to="/solutions"><li className="links">Soluções</li></Link>
          <Link to="/about"> <li className="links">Sobre</li></Link>
          <Link to="/contact"><li className="links">Contato</li></Link>
        </ul>
        <div className="social-media">
           <a href="https://www.instagram.com/kssolutions.tech/" target="blank"><InstagramIcon /></a> 
           <a href="https://www.linkedin.com/company/ks-solutionstech/about/" target="blank"><LinkedInIcon /></a>
           <a href="https://wa.me/557121371247"  target="blank"><WhatsAppIcon/></a>
        </div>
      </div>
      <div className="solutions-container">
        <h4>Soluções</h4>
          <ul className="list-container">
            {solutions.map((solution, index) => (
              <li key={index} className="list-item-container">
                {solution}
              </li>
            ))}
          </ul>
      </div>
    
      <div className="infos-container" >
          {infos.map((info, index) => (
          <div className="contact-content" key={index}>
            <h4>Entrar em Contato</h4>
            <p>{info.phone}</p>
            <p>{info.email}</p>
           <Link>
            <span></span>
            <span>Ir para formulario</span>
          </Link>
            <h4>Localização</h4> 
            <p>{info.location}</p>
          </div>
          ))} 
        </div>
        <div className="linha">
            <p>© copyright 2023 - Todos os direitos reservados</p>
            <p>KS Solutions</p>
        </div>
    </footer>
    );
}