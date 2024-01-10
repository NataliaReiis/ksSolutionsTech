import { useRef } from "react";
import ContentTeam from './ContentTeam'
import Modelo from '../../assets/img/modelo.jpg';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
    

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
            <h1 className="title-colab">Conheça nosso time</h1>
            <section className="scroll-container" ref={scrollContainerRef}>
                <div className="scroll-content">
                    <ContentTeam image={Modelo} title="Sheila Tirony" cargo="Gerente de projeto" description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illo cumque quidem"  />
                    <ContentTeam image={Modelo} title="Sheila Tirony" cargo="Gerente de projeto" description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illo cumque quidem"   />
                    <ContentTeam image={Modelo} title="Sheila Tirony" cargo="Gerente de projeto" description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illo cumque quidem"   />
                    <ContentTeam image={Modelo} title="Sheila Tirony" cargo="Gerente de projeto" description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illo cumque quidem"   />
                    <ContentTeam image={Modelo} title="Sheila Tirony" cargo="Gerente de projeto" description= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum illo cumque quidem"   />
                </div>
            </section>

            <div className="button-scroll">
                <button onClick={handleClickLeft}>< FiChevronLeft  size={30} color="white"/></button>
                <button onClick={handleClickRight}><FiChevronRight size={30} color="white"/></button>
            </div>

        </>
    )
}