import './index.scss';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TiArrowRightThick } from 'react-icons/ti';

import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';
import Fornecedor from '../fornecedor';
import Carousel from '../carousel';
import Popup from '../../components/pop-up';

import digital from '../../assets/images/cards/digital.svg';
import experience from '../../assets/images/cards/experience.svg';
import finance from '../../assets/images/cards/finance.svg';
import strategy from '../../assets/images/cards/strategy.svg';
import supply from '../../assets/images/cards/supply.svg';
import technology from '../../assets/images/cards/technology.svg';


export default function Home() {

  const section1Ref = useRef( null );
  const location = useLocation();
  const [selectedCard, setSelectedCard] = useState(null);

  
  useEffect(() => {
    if ( location.state?.sectionId ) {
      const scrollOptions = { behavior: "smooth", block: "start" };
  
      if ( location.state.sectionId === 'section1' ) {
        section1Ref.current.scrollIntoView( scrollOptions );
      }
    }
  }, [ location ]);

  const dadosDosCards = [
    {
      titulo: 'Experience & Efficienvy',
      descricao: 'Ofertamos um conjunto de práticas de criação de valor e customer experience para empresas que buscam alavancar seus negócios com resultados e perpetuidade.',
      imagem: experience,
      popupTitle: 'Experience & Efficienvy',
      popupDescription: ' Oferecemos um conjunto de práticas de criação de valor e customer experience para empresas que buscam alavancar a eficiência e melhorar a gestão de seus negócios, maximizando resultados e gerando perpetuidade.Essas práticas podem ser utilizadas de maneira ampla: da concepção da estratégia à sua implantação, da geração de valor para acionistas até o cliente final, a partir de projetos executados com um jeito único de fazer consultoria, o jeito Peers.',
  
    },
    {
      titulo: 'Strategy e M&A',
      descricao: 'Usamos nossa expertise em diversas indústrias para apoiar clientes identificando oportunidades no mercado e defenindo ações de crescimento.',
      imagem: strategy ,
      popupTitle: 'Strategy e M&A',
    popupDescription: 'Aumento da receita e rentabilidade da companhia, suportados por iniciativas estratégicas que aceleram o crescimento orgânico ou inorgânico.',
  

    },
    {
      titulo: 'Finance',
      descricao: 'Aliamos nossa expertise aos CFOs e aos times de finanças oferecendo  suporte à gestão orçamentária, otimizando rotinas financeiras e muito mais.',
      imagem: finance,
      popupTitle: 'Finance',
    popupDescription: 'Temos como objetivo alavancar a geração de valor das empresas, auxiliando CFOs e times de Finanças na evolução de seu nível de maturidade para que possam agir de forma mais estratégica.Atuamos lado a lado com os times de finanças nessa jornada, desde o desdobramento de diretrizes estratégicas, passando pela revisão e implantação de políticas e metodologias, estruturação de processos, redefinição de sistemas, da estrutura e da governança da área. Com isso, conseguimos levar nossos clientes a otimizar a alocação e performance de seus recursos financeiros e garantir maior controle visibilidade de seus resultados.',
    
    },
    {
      titulo: 'Supply Chain',
      descricao: 'Projetos completos desde o design, desdobramento de planos, distribuição até a implementação de tecnologias.',
      imagem: supply,
      popupTitle: 'Supply Chain',
      popupDescription: 'Atuamos em todo o Supply Chain de diferentes setores abrangendo todos os elos da cadeia de abastecimento desde fornecedores, compras, planejamento, produção, armazenagem, transporte/abastecimento e customer fulfillment. Desta forma, temos uma visão end to end da cadeia que nos permite otimizar fluxos de informação, materiais e financeiros, trazendo resultados concretos a nossos clientes. A variedade de temas nos permite executar diversos tipos de desafios, desde estratégicos até táticos e operacionais, como a definição e implantação de soluções e sistemas.',
      
    },
    {
      titulo: 'Technology',
      descricao: 'Estruturação do core de tecnologia e do modelo operacional de TI para atender e direcionar as necessidades de negócio.',
      imagem: technology,
      popupTitle: 'Technology',
      popupDescription: 'Enfrentar os desafios na área de tecnologia é uma tarefa complexa, especialmente quando existem problemas que podem estar afetando o desempenho e a eficiência da empresa. Os sistemas legados, infraestrutura obsoleta, problemas de integrações, dados inconsistentes e ataques cibernéticos são pontos de atenção que precisam ser endereçados. Nossa expertise em tecnologia, aliada ao conhecimento do negócio das empresas, nos permite atuar como advisors dos executivos de tecnologia, apoiando na identificação e solução dos problemas de forma assertiva e pragmática. Temos uma abordagem centrada no cliente, que se adapta as necessidades específicas do momento e busca a geração de valor para a empresa.',
    
    },
  ];


  const openPopup = (card) => {
    setSelectedCard(card);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  
  
  return (

    
    <div className="page-home page" >
        <Cabecalho />
      

        <section className="headline" >

          <div className='estrela'>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="title">
              <span style={{ fontWeight: "bolder", background: "#fff", WebkitBackgroundClip: "text", color: "transparent" }}>HSSW Code</span>
              <br />
              <span style={{fontWeight:"lighter"}}>A tecnologia e o mundo estão a evoluir, e você?</span>
            </div>
          </div>

        </section>


        <section ref={ section1Ref } className="section__about" >
            <div className="text1">
              <h4 className='text6'>Jeito HSSW Code</h4>
              <p>Transformamos desafios em oportunidades, impulsionados pela inovação 
                tecnológica e guiados pela paixão pelo futuro.</p>
            </div>

            <div className="text2">
              <p>
                A HSSW Code é uma empresa de desenvolvimento web que cria soluções digitais 
                inovadoras e de alta qualidade. Nossa equipe usa tecnologias de ponta para entregar 
                sites e aplicativos personalizados, focados em experiência do usuário, segurança e 
                desempenho. Transformamos ideias em realidade, ajudando empresas a alcançar seus 
                objetivos digitais.
              </p>

              <button type="button" className="more__about">
                <Link to="/sobre" className="button-link">Saiba mais</Link>
                <TiArrowRightThick className="i" />
              </button>
            </div>

        </section>

        <div className="container">
        <div className="slider">
          {dadosDosCards.map((card, index) => (
            <div key={index} className="card">
              <img src={card.imagem} alt={card.titulo} className="card-image" />
              <p className="card-category">{card.titulo}</p>
              <p className="card-description">{card.descricao}</p>
              <button className="card-button" onClick={() => openPopup(card)}>
                Conheça
              </button>
            </div>
          ))}
        </div>

        {selectedCard && (
          <Popup
            title={selectedCard.popupTitle}
            description={selectedCard.popupDescription}
            imageUrl={selectedCard.imagem}
            onClose={closePopup}
          />
        )}
      </div>


    <div className="DigitalTransformation">
      <img src={digital} alt="" className="Digital" />
      <h1 className="tituloDigital">Digital Transformation</h1>
      <p className="conteudoDigital">
      Transformação alavancando o sucesso do negócio na era digital através de uma experiência diferenciada aos clientes, processos eficientes e cultura colaboratica. Traçamos esse caminho ddefinindo estratégia, maximizando o valor dos dados e acelerando a transformação através de IA e produtos digitais.  
      </p>
      <button className='botãoDigital'>Conheça</button>
    </div>

'


        <Fornecedor />

        <section className="section__contato" >
          <div className="text3">
              <p>Envie uma mensagem para nossos especialistas.</p>
          </div>

          <div className="text4">
              <p>
                  Estamos prontos para conhecer seu desafio.
                  <br />Nós te ouvimos para construirmos juntos soluções para a vida real, alinhadas ao contexto do seu time, do operacional ao C-level.
              </p>

              <button type="button" className="button"><Link to='/contato' className='button-link'> Contato </Link></button>
          </div>
        </section>

        <Carousel />

        <Footer/>

    </div>

  );
}


