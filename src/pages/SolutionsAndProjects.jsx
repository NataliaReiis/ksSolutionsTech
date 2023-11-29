import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

import LogoColorida from "../assets/img/logoColorida.png";
import Icon1 from '../assets/img/icon1.png'
import Icon2 from '../assets/img/icon2.png'
import Icon3 from '../assets/img/icon3.png'
import Icon4 from '../assets/img/icon4.png'

import { Modal, Box, Typography, Button, IconButton } from '@mui/material/';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from 'react';

export default function SolutionsAndProjects() {

/* Solutions */
   const [open, setOpen] = useState(false);
   const [selectedSolution, setSelectedSolution] = useState(null);

   const handleOpen = (solution) => {
    setSelectedSolution(solution);
        setOpen(true)
   }

   const handleClose = () => {
        setOpen(false)
   }

   const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
   };
    
    return(
        <div className='solutions-Projects'>
           <Navbar logo={LogoColorida} colortxt="#010615" bg="white" />
           <div className="solutions-container">
            <div className="text-container">
                <h2>Descubra a transformação: Qual solução sua empresa precisa para alcançar novos horizontes?</h2>
                <p>Explore Oportunidades, Potencialize Eficiências e Eleve Seu Negócio ao Próximo Nível. Descubra as Soluções Personalizadas que Impulsionarão sua Empresa rumo ao Sucesso.</p>
            </div>
           <section id="solutions" className="container-card">
                <div className="content-card">
                    <img src={Icon1} alt="" />
                    <h1>Automação de Sistemas</h1>
                    <Button onClick={() => handleOpen('automation')}>Ver Mais</Button>
                </div>
                <div className="content-card">
                    <img src={Icon2} alt="" />
                    <h1>Gestão de processo e tecnologia</h1>
                    <Button onClick={() => handleOpen('processManagement')}>Ver Mais</Button>
                </div>
                <div className="content-card">
                    <img src={Icon3} alt="" />
                    <h1>Implantação ERP e robô</h1>
                    <Button onClick={() => handleOpen('processOptimization')}>Ver Mais</Button>
                </div>
                <div className="content-card">
                    <img src={Icon4} alt="" />
                    <h1>Implantação e analise de tecnologia</h1>
                    <Button onClick={() => handleOpen('technologyDeployment')}>Ver Mais</Button>
                </div>
            </section >
            <Modal 
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={handleClose}
                        sx ={{position: 'absolute', top: 0, right: 0}}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography id="modal-modal-tittle" variant="h6" component="h2">
                        {selectedSolution === 'automation' && "Automação de Sistemas"}
                        {selectedSolution === 'processsManagement' && "Gestão de processo e tecnologia"}
                        {selectedSolution === 'processOptimization' && "Otimização de processo e tecnologia"}
                        {selectedSolution === 'technologyDeployment' && "Implantação e análise de tecnologia"}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2}}>
                    {selectedSolution === 'automation' && (
                        <>
                           Um serviço de consultoria de otimização de processos em sistemas de tecnologia oferece suporte especializado para melhorar a eficiência, eficácia e desempenho dos processos dentro de uma organização, especialmente aqueles relacionados à tecnologia da informação e sistemas. Esse tipo de consultoria visa identificar oportunidades de aprimoramento, eliminar gargalos e minimizar desperdícios, resultando em uma operação mais suave e produtiva.
                        
                        </>
                    )}
                    {selectedSolution === 'processManagement' && (
                        <>
                            Descrição da Gestão de Processo e Tecnologia
                           
                        </>
                     )}
                     {selectedSolution === 'processOptimization' && (
                        <>
                            Descrição da Otimização de Processos
                        
                        </>
                     )}
                     {selectedSolution === 'technologyDeployment' && (
                        <>
                           Descrição da Implantação e Análise de Tecnologia
                          
                        </>
                    )}
                    </Typography>

                </Box>
            </Modal>
           </div>
           <Projects />
           <Footer />
        </div>
    )
}