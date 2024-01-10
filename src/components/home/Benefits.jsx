import imgEficiencia from '../../assets/svg/eficiencia.svg';
import imgCusto from '../../assets/svg/custo.svg';
import imgAgilidade from '../../assets/svg/agilidade.svg';
import imgTecnologia from '../../assets/svg/newTech.svg';



export default function Beneficts() {

    /* Fazer isso com map */
    return (
        <div className="beneficts">
            <h2>Por que optar por uma consultoria especializada em gestão de processos para sua empresa?</h2>
            <div className="beneficts-container">
                <div className="itens-container">
                    <img className='image-beneficts' src={imgEficiencia} alt="" />
                    <span className='description'>
                        <h1>Eficiência Operacional</h1>
                        <p> Consultores em gestão de processos podem analisar e otimizar as operações internas da sua empresa, identificando áreas de ineficiência e propondo melhorias que resultem em maior eficiência.</p>
                    </span>
                </div>
                <div className="itens-container">
                    <img className='image-beneficts'  src={imgCusto} alt="" />
                    <span className='description'>
                        <h1>Agilidade nas Tomadas de Decisão</h1>
                        <p> Processos mais eficientes proporcionam informações mais rápidas e precisas. Isso facilita a tomada de decisões ágeis, fundamentadas em dados e análises.</p>
                    </span>
                </div>
                <div className="itens-container">
                    <img className='image-beneficts'  src={imgAgilidade} alt="" />
                    <span className='description'>
                        <h1>Adoção de Tecnologias Inovadoras</h1>
                        <p> Consultores podem recomendar a implementação de novas tecnologias que automatizem processos e tragam inovação para a empresa, melhorando a competitividade no mercado.</p>
                    </span>
                </div>
                <div className="itens-container">
                    <img className='image-beneficts' src={imgTecnologia} alt="" />
                    <span className='description'>
                        <h1>Redução de Custos: </h1>
                        <p> A otimização de processos muitas vezes leva a uma redução de custos operacionais. Identificar e eliminar desperdícios pode resultar em uma alocação mais eficiente de recursos.</p>
                    </span>
                </div>
            </div>
        </div>
    )
}