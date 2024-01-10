import { useRef } from "react";
import ContentTeam from './ContentTeam'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import janine from '../../assets/img/janine.png';
import sheila from '../../assets/img/sheila.jpg';
import natalia from '../../assets/img/natalia.png';
import lituania from '../../assets/img/lituania.png';
import ariane from '../../assets/img/ariane.png';



export default function Team() {
    const scrollContainerRef = useRef(null);

    const handleClickLeft = () => {
        scrollContainerRef.current.scrollBy({left: -350, behavior: 'smooth'});
        console.log("clicou")
    }
   const handleClickRight = () => {
        scrollContainerRef.current.scrollBy({left:350, behavior: 'smooth'});
    }
    return (
        <>
            <h1 className="title-colab">Conheça nosso time...</h1>
            <section className="scroll-container" ref={scrollContainerRef}>
                <div className="scroll-content">
                    <ContentTeam image={sheila} title="Sheila Tirony" cargo="Gerente de projeto" description= "Com habilidade estratégica e liderança sólida, a nossa dedicada gerente de projeto conduz equipes com maestria, garantindo o sucesso de cada empreitada."  />
                    <ContentTeam image={lituania} title="Lituânia Canuto " cargo="Assistente Operacional" description= "A eficiência operacional é a marca registrada da nossa competente assistente operacional, que coordena tarefas com precisão e comprometimento, contribuindo para o funcionamento fluido e eficaz de nossas operações."   />
                    <ContentTeam image={janine} title="Janine Henrique" cargo="Instrutor técnico" description= "A expertise da nossa dedicação profissional vai além do conhecimento, inspirando e capacitando os participantes a dominarem as nuances tecnológicas com confiança, moldando o futuro dos especialistas na área."   />
                    <ContentTeam image={natalia} title="Natália Reis" cargo="Estagiária Desenvolvimento" description= "Contribuindo para a evolução e crescimento de projetos através do aprendizado contínuo e da aplicação prática de habilidades técnicas, enriquecendo assim o ambiente de desenvolvimento da equipe."   />
                    <ContentTeam image={ariane} title="Ariane Moreira" cargo="Estagiária Maker " description= "Trazendo uma abordagem hands-on e inovadora para os projetos, impulsionando a criatividade e a resolução de problemas com habilidades práticas e visão técnica."   />
                </div>
            </section>

            <div className="button-scroll">
                <button onClick={handleClickLeft}>< FiChevronLeft  size={30} color="white"/></button>
                <button onClick={handleClickRight}><FiChevronRight size={30} color="white"/></button>
            </div>

        </>
    )
}