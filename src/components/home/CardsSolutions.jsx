import Icon2 from "../../assets/img/icon2.png";
import Icon1 from "../../assets/img/icon1.png";
import Icon3 from "../../assets/img/icon3.png";
import Icon4 from "../../assets/img/icon4.png";

import { Modal, Box, Typography, Button, IconButton } from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";

export default function CardSolutions() {
  const [open, setOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState(null);

  const handleOpen = (solution) => {
    setSelectedSolution(solution);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="card-solutions">
      <div className="solutions-container">
        <div className="text-container">
          <h2>
            Descubra a transformação: Qual solução sua empresa precisa para
            alcançar novos horizontes?
          </h2>
          <p>
            Explore Oportunidades, Potencialize Eficiências e Eleve Seu Negócio
            ao Próximo Nível. Descubra as Soluções Personalizadas que
            Impulsionarão sua Empresa rumo ao Sucesso.
          </p>
        </div>
        <section id="solutions" className="container-card">
          <div className="content-card">
            <img src={Icon1} alt="" />
            <h1>Automação de Sistemas</h1>
            <Button onClick={() => handleOpen("automation")}>Ver Mais</Button>
          </div>
          <div className="content-card">
            <img src={Icon2} alt="" />
            <h1>Gestão de processo e tecnologia</h1>
            <Button onClick={() => handleOpen("processManagement")}>
              Ver Mais
            </Button>
          </div>
          <div className="content-card">
            <img src={Icon3} alt="" />
            <h1>Implantação ERP e robô</h1>
            <Button onClick={() => handleOpen("processOptimization")}>
              Ver Mais
            </Button>
          </div>
          <div className="content-card">
            <img src={Icon4} alt="" />
            <h1>Implantação e analise de tecnologia</h1>
            <Button onClick={() => handleOpen("technologyDeployment")}>
              Ver Mais
            </Button>
          </div>
        </section>
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
              sx={{ position: "absolute", top: 0, right: 0 }}
            >
              <CloseIcon sx={{ position: "absolute", top: 5, right: 15 }} />
            </IconButton>
            <Typography id="modal-modal-tittle" variant="h6" component="h2">
              {selectedSolution === "automation" && "Automação de Sistemas"}
              {selectedSolution === "processManagement" &&
                "Gestão de processo e tecnologia"}
              {selectedSolution === "processOptimization" &&
                "Otimização de processo e tecnologia"}
              {selectedSolution === "technologyDeployment" &&
                "Implantação e análise de tecnologia"}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {selectedSolution === "automation" && (
                <>
                  Um serviço de consultoria de otimização de processos em
                  sistemas de tecnologia oferece suporte especializado para
                  melhorar a eficiência, eficácia e desempenho dos processos
                  dentro de uma organização, especialmente aqueles relacionados
                  à tecnologia da informação e sistemas. Esse tipo de
                  consultoria visa identificar oportunidades de aprimoramento,
                  eliminar gargalos e minimizar desperdícios, resultando em uma
                  operação mais suave e produtiva.
                </>
              )}
              {selectedSolution === "processManagement" && (
                <>
                  Priorizamos a segurança da informação e a conformidade
                  regulatória, garantindo a proteção dos seus dados e o
                  cumprimento das normas aplicáveis. Ao longo dos anos,
                  construímos uma reputação sólida entregando soluções de gestão
                  de processos e tecnologia com sucesso em diversas
                  indústrias.Trabalhamos em estreita colaboração com nossos
                  clientes, entendendo suas necessidades exclusivas para
                  oferecer soluções alinhadas aos objetivos estratégicos de cada
                  organização. Mantendo-nos atualizados com as últimas
                  tendências tecnológicas, buscamos a inovação contínua para
                  impulsionar a transformação digital e manter nossos clientes
                  na vanguarda.
                </>
              )}
              {selectedSolution === "processOptimization" && (
                <>
                  Oferecemos soluções especializadas em implantação de ERP e
                  automação robótica, impulsionando a eficiência e inovação nos
                  processos de sua organização. Nossa abordagem estratégica visa
                  modernizar e otimizar, proporcionando uma transição fluida
                  para sistemas avançados de gestão e automação.
                  <h4>Implantação de ERP:</h4>Desenvolvemos e implementamos
                  sistemas ERP personalizados, alinhados às suas necessidades
                  específicas. Desde a análise inicial até a integração
                  completa, nossa expertise visa melhorar a eficiência
                  operacional, a visibilidade dos processos e a tomada de
                  decisões informadas. <h4>Automação Robótica:</h4>A automação
                  robótica é a chave para liberar o potencial humano, permitindo
                  que sua equipe se concentre em tarefas estratégicas. Nossas
                  soluções de robótica visam otimizar processos, reduzir erros e
                  aumentar a produtividade de maneira eficiente.
                </>
              )}
              {selectedSolution === "technologyDeployment" && (
                <>
                  Na KS, destacamo-nos por oferecer serviços especializados em
                  implantação e análise de tecnologia, impulsionando o potencial
                  de crescimento e eficiência da sua organização.
                  <h4>Implantação Tecnológica:</h4>
                  Nossa abordagem centrada no cliente inicia-se com a
                  implantação estratégica de soluções tecnológicas sob medida.
                  Desde a fase inicial de planejamento até a execução e
                  otimização contínua, estamos comprometidos em integrar
                  tecnologias avançadas que atendam às suas necessidades
                  específicas.
                  <h4>Análise de Tecnologia:</h4>A análise criteriosa de
                  tecnologia é essencial para identificar oportunidades de
                  inovação. Nossa equipe de especialistas realiza avaliações
                  abrangentes para garantir que sua infraestrutura tecnológica
                  esteja alinhada com as melhores práticas do setor,
                  proporcionando eficiência operacional e adaptabilidade às
                  mudanças do mercado.
                </>
              )}
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
