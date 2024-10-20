import './index.scss';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';


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

import foto1 from '../../assets/images/feedbacks/Shape.svg';
import foto2 from '../../assets/images/feedbacks/Shape (1).svg';
import foto3 from '../../assets/images/feedbacks/Shape (2).svg';




export default function Home() {
  const section1Ref = useRef(null);
  const section4Ref = useRef(null);

  const location = useLocation();


  useEffect(() => {
    if (location.state?.sectionId) {
      if ( location.state.sectionId === 'section1' ) {
        section1Ref.current.scrollIntoView({ behavior: "smooth" });
      } else if ( location.state.sectionId === 'section4' ) {
        section4Ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);



  return (
    <div className="page-home page">
      <Cabecalho />
      
        <section className="headline" >

        </section>

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

        <div ref={section1Ref} className="section__container">
          <div className="text1">
            <h4>Jeito HSSW Code</h4>
            <p>Transformamos desafios em oportunidades, impulsionados pela inovação tecnológica e guiados pela paixão pelo futuro.</p>
          </div>

          <div className='text2'>
            <p>A HSSW Code é uma empresa de desenvolvimento web que cria soluções digitais inovadoras e de alta qualidade. Nossa equipe usa tecnologias de ponta para entregar sites e aplicativos personalizados, focados em experiência do usuário, segurança e desempenho. Transformamos ideias em realidade, ajudando empresas a alcançar seus objetivos digitais.</p>

            <button className='more__about'> Saiba mais </button>
          </div>
        </div>

        <div className="container__sponsors">

          <div className="sponsors varejo">
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

          <div className="sponsors educacao">
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

          <div className="sponsors industria">
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

          <div className="sponsors servico">
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

          <div className="sponsors saude">
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

          <div className="sponsors private_equity">
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

          <div className="sponsors financeiro_seguros">
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

        <div className="section__container">
          <div className="text3">
            <p>Envie uma mensagem para nossos especialistas.</p>
          </div>

          <div className="text4">
            <p>Estamos prontos para conhecer seu desafio.
            Nós te ouvimos para construirmos juntos soluções para a vida real, alinhadas ao contexto do seu time, do operacional ao C-level.</p>
          </div>

        </div>

        <div ref={section4Ref} className="section__feedbacks">
          <div className="rating__cards">
            <div className="card">
              
              <div className="info__text">
                <p>“A escolha da HSSW Code foi um encontro do que eu queria como pessoa e profissional. Adoraria que mais empresas tivessem o jeito HSSW Code de ser.”</p>
              </div>

              <div className="info__img">
                <img src={foto1} alt="" />
                <p className="nome">
                  Cassandra lima
                </p>
              </div>

            </div>
          </div>
        </div>

      <Footer/>
      
    </div>
  );
}
