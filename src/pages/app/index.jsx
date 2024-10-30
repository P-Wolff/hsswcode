import './index.scss';
import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import { TiArrowRightThick } from 'react-icons/ti';
import { Link } from 'react-router-dom';


import Cabecalho from '../../components/cabecalho';
import Popup from '../../components/pop-up';
import Footer from '../../components/footer';

import digital from '../../assets/images/cards/digital.svg';
import experience from '../../assets/images/cards/experience.svg';
import finance from '../../assets/images/cards/finance.svg';
import strategy from '../../assets/images/cards/strategy.svg';
import supply from '../../assets/images/cards/supply.svg';
import technology from '../../assets/images/cards/technology.svg';







import Alpar from '../../assets/images/varejo/alpargatas.svg';
import Boticario from '../../assets/images/varejo/boticario.svg';
import CA from '../../assets/images/varejo/c_a.svg';
import Quero from '../../assets/images/varejo/quero-quero.svg';
import Vivara from '../../assets/images/varejo/vivara.svg';

import Cogna from '../../assets/images/educacao/Cogna-2.png.webp';
import Natura from '../../assets/images/educacao/Instituto-Natura-2.png.webp';
import SonhoG from '../../assets/images/educacao/Instituto-Sonho-Grande-2.png.webp';
import Itau from '../../assets/images/educacao/Itau-Educacao-e-Trabalho-1.png.webp';
import Yduqs from '../../assets/images/educacao/Yduqs-2.png.webp';

import Chama from '../../assets/images/servico/Chama.png.webp';
import Ipiranga from '../../assets/images/servico/Ipiranga.png.webp';
import Movida from '../../assets/images/servico/Movida.png.webp';
import Simpress from '../../assets/images/servico/Simpress.png.webp';
import Tcp from '../../assets/images/servico/TCP.png.webp';

import Alliar from '../../assets/images/saude/Alliar.png.webp';
import Fleury from '../../assets/images/saude/Fleury.png.webp';
import Hapvida from '../../assets/images/saude/Hapvida.png.webp';
import Notredame from '../../assets/images/saude/Notredame-Intermedica.png.webp';
import Odonto from '../../assets/images/saude/Odonto-Company.png.webp';

import Cofco from '../../assets/images/industria/Cofco-INTL.png.webp';
import Ferrero from '../../assets/images/industria/Ferrero.png.webp';
import Heinz from '../../assets/images/industria/Heinz.png.webp';
import Mdias from '../../assets/images/industria/Mdias-Branco.png.webp';
import Nitro from '../../assets/images/industria/Nitro.png.webp';

import BTG from '../../assets/images/private-equity/BTG-Pactual.png.webp';
import Carlyle from '../../assets/images/private-equity/Carlyle.png.webp';
import Patria from '../../assets/images/private-equity/Patria.png.webp';
import Private from '../../assets/images/private-equity/Private-Equality.png.webp';
import Vinci from '../../assets/images/private-equity/Vinci.png.webp';

import Aon from '../../assets/images/financeiro&seguro/aon.webp';
import Axa from '../../assets/images/financeiro&seguro/axa.webp';
import Neon from '../../assets/images/financeiro&seguro/neon.webp';
import Open from '../../assets/images/financeiro&seguro/Open-Insurance.png.webp';
import Porto from '../../assets/images/financeiro&seguro/Porto-Seguro.png.webp';


import imgslide1 from '../../assets/images/feedbacks/cassandra.svg';
import imgslide2 from '../../assets/images/feedbacks/Dylan.svg';
import imgslide3 from '../../assets/images/feedbacks/Slav.svg';
import imgslide4 from '../../assets/images/feedbacks/Gregory.svg';
import imgslide5 from '../../assets/images/feedbacks/Miranda.svg';


export default function Home() {

  const section1Ref = useRef( null );
  const section4Ref = useRef( null );
  
  const location = useLocation();
  
  
  useEffect(() => {
    if ( location.state?.sectionId ) {
      const scrollOptions = { behavior: "smooth", block: "start" };
  
      if ( location.state.sectionId === 'section1' ) {
        section1Ref.current.scrollIntoView( scrollOptions );
      } else if ( location.state.sectionId === 'section4' ) {
        section4Ref.current.scrollIntoView( scrollOptions );
      }
    }
  }, [ location ]);



  const [ activeGroup, setActiveGroup ] = useState( 'varejo' ); 

  const groups = [
      { name: 'Varejo', className: 'varejo' },
      { name: 'Educação', className: 'educacao' },
      { name: 'Indústria', className: 'industria' },
      { name: 'Serviço', className: 'servico' },
      { name: 'Saúde', className: 'saude' },
      { name: 'Private Equity', className: 'private_equity' },
      { name: 'Financeiro & Seguros', className: 'financeiro_seguros' },
  ];

  const handleGroupClick = ( groupName ) => {
      setActiveGroup( groupName );
  };



  

  const [ active, setActive ] = useState( 2 ); 
  const cards = [
    {
      imageUrl: imgslide1,
      title: "Cassandra Lima",
      content: "“A escolha da HSSW Code foi um encontro do que eu queria como pessoa e profissional. Adoraria que mais empresas tivessem o jeito HSSW Code de ser.”",
    },
    {
      imageUrl: imgslide2,
      title: "Dylan Monac",
      content: "A HSSW Code se destaca como uma empresa inovadora e comprometida com a excelência em desenvolvimento de software, ela inspira confiança e inovação no setor de tecnologia! ",
    },
    {
      imageUrl: imgslide3,
      title: "Slav Thais",
      content: "“Na HSSW Code você é respeitado independente de gênero, raça, cor ou condição social. O que faz a HSSW Code ser diferente das outras é, principalmente, saber que tem pessoas remando todas nas mesma direção. ”",
    },
    {
      imageUrl: imgslide4,
      title: "Greg Mato ",
      content: "A HSSW Code é uma referência em tecnologia e inovação. O compromisso com a satisfação do cliente é evidente em cada interação. Com a HSSW Code, sua visão se torna realidade!",
    },
    {
      imageUrl: imgslide5,
      title: "Miranda Amorin",
      content: "“Uma empresa íntegra, transparente e que pensa no desenvolvimento de seus colaboradores, afinal, são pessoas que fazem a HSSW Code crescer e conquistar seu espaço no mercado.”",
    },
  ];








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
  
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const openPopup = (card) => {
    setSelectedCard(card);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };


  const Slider = ({ items }) => {
    const [sliderItems, setSliderItems] = useState(items);
  
    const next = () => {
      // Mover o primeiro item para o final
      const newItems = [...sliderItems];
      newItems.push(newItems.shift()); // remove o primeiro e adiciona ao final
      setSliderItems(newItems);
    };
  
    const prev = () => {
      // Mover o último item para o início
      const newItems = [...sliderItems];
      newItems.unshift(newItems.pop()); // remove o último e adiciona ao início
      setSliderItems(newItems);
    };
  }



  const count = cards.length;


  
  
  return (

    
    <div className="page-home page" >
        <Cabecalho />
      

        <section className="headline" >

          <div className='estrela'>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="title">
              <span>HSSW Code</span>
              <br />
              <span>A tecnologia e o mundo estão a evoluir, e você?</span>
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
        <div class="buttons">
        </div>      
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
 <div class="buttons">
            <span class="direita"></span>
        </div>    
        </div>

    <div className="DigitalTransformation">
      <img src={digital} alt="" className="Digital" />
      <h1 className="tituloDigital">Digital Transformation</h1>
      <p className="conteudoDigital">
      Transformação alavancando o sucesso do negócio na era digital através de uma experiência diferenciada aos clientes, processos eficientes e cultura colaboratica. Traçamos esse caminho ddefinindo estratégia, maximizando o valor dos dados e acelerando a transformação através de IA e produtos digitais.  
      </p>
      <button className='botãoDigital'>Conheça</button>
    </div>


        <section className="container__sponsors" >
            <div className="container__sponsors">
              
                <nav className="group-nav">
                    <ul>
                        {groups.map((group) => (
                            <li
                                key={group.className}
                                onClick={() => handleGroupClick(group.className)}
                                className={activeGroup === group.className ? 'active' : ''}
                            >
                                {group.name}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={`sponsors ${activeGroup === 'varejo' ? 'active' : ''}`}>
                    <nav className="cards">
                        <ul>
                            <li><img src={CA} alt="" /></li>
                            <li><img src={Boticario} alt="" /></li>
                            <li><img src={Vivara} alt="" /></li>
                            <li><img src={Alpar} alt="" /></li>
                            <li><img src={Quero} alt="" /></li>
                        </ul>
                    </nav>
                </div>


                <div className={`sponsors ${activeGroup === 'educacao' ? 'active' : ''}`}>
                    <nav className="cards">
                        <ul>
                            <li><img src={Itau} alt="" /></li>
                            <li><img src={Natura} alt="" /></li>
                            <li><img src={Cogna} alt="" /></li>
                            <li><img src={SonhoG} alt="" /></li>
                            <li><img src={Yduqs} alt="" /></li>
                        </ul>
                    </nav>
                </div>


                <div className={`sponsors ${activeGroup === 'industria' ? 'active' : ''}`}>
                    <nav className="cards">
                        <ul>
                            <li><img src={Ferrero} alt="" /></li>
                            <li><img src={Heinz} alt="" /></li>
                            <li><img src={Mdias} alt="" /></li>
                            <li><img src={Nitro} alt="" /></li>
                            <li><img src={Cofco} alt="" /></li>
                        </ul>
                    </nav>
                </div>


                <div className={`sponsors ${activeGroup === 'servico' ? 'active' : ''}`}>
                    <nav className="cards">
                        <ul>
                            <li><img src={Ipiranga} alt="" /></li>
                            <li><img src={Chama} alt="" /></li>
                            <li><img src={Movida} alt="" /></li>
                            <li><img src={Simpress} alt="" /></li>
                            <li><img src={Tcp} alt="" /></li>
                        </ul>
                    </nav>
                </div>


                <div className={`sponsors ${activeGroup === 'saude' ? 'active' : ''}`}>
                    <nav className="cards">
                        <ul>
                            <li><img src={Odonto} alt="" /></li>
                            <li><img src={Notredame} alt="" /></li>
                            <li><img src={Hapvida} alt="" /></li>
                            <li><img src={Alliar} alt="" /></li>
                            <li><img src={Fleury} alt="" /></li>
                        </ul>
                    </nav>
                </div>



                <div className={`sponsors ${activeGroup === 'private_equity' ? 'active' : ''}`}>
                    <nav className="cards">
                        <ul>
                            <li><img src={Private} alt="" /></li>
                            <li><img src={BTG} alt="" /></li>
                            <li><img src={Carlyle} alt="" /></li>
                            <li><img src={Patria} alt="" /></li>
                            <li><img src={Vinci} alt="" /></li>
                        </ul>
                    </nav>
                </div>


                <div className={`sponsors ${activeGroup === 'financeiro_seguros' ? 'active' : ''}`}>
                    <nav className="cards">
                        <ul>
                            <li><img src={Porto} alt="" /></li>
                            <li><img src={Neon} alt="" /></li>
                            <li><img src={Open} alt="" /></li>
                            <li><img src={Aon} alt="" /></li>
                            <li><img src={Axa} alt="" /></li>
                        </ul>
                    </nav>
                </div>

            </div>

        </section>


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

        <div className="carousel-feedbacks" ref={ section4Ref } >
          <div className="tittle2">
            <h1>FeedBacks</h1>
          </div>

          <div className="carousel" >
              


            {active > 0 && (
              <button className="nav left" onClick={() => setActive(active - 1)}>
                <TiChevronLeftOutline />
              </button>
            )}

            {cards.map((card, i) => (
              <div
                key={i}
                className={`card-container ${active === i ? 'active' : ''}`}
                style={{
                  '--active': i === active ? 1 : 0,
                  '--offset': (active - i) / 3,
                  '--direction': Math.sign(active - i),
                  '--abs-offset': Math.abs(active - i) / 3,
                  pointerEvents: active === i ? 'auto' : 'none',
                  opacity: active === i ? 1 : 0.5,
                  zIndex: active === i ? 10 : 0,
                  transform: active === i
                    ? 'scale(1) translateZ(0)'
                    : 'scale(0.8) translateZ(-100px)',
                }}
              >
                <Card title={card.title} content={card.content} imageUrl={card.imageUrl} />
              </div>
            ))}

            {active < cards.length - 1 && (
              <button className="nav right" onClick={() => setActive(active + 1)}>
                <TiChevronRightOutline />
              </button>
            )}
          </div>
        </div>
        

        <Footer/>

    </div>

  );
}


function Card({ title, content, imageUrl }) {
  return (
    <div className="card">
      <p className='content-carousel'>{content}</p>

      <div className="card-content">
        <img src={imageUrl} alt={title} className="card-image" />
      
        <div className="text-content">
          <h3 className='titulo-carousel'>{title}</h3>
        </div>
      </div>
      
    </div>
  );
}