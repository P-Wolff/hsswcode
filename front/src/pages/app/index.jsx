import './index.scss';
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TiArrowRightThick } from 'react-icons/ti';

import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';
import Fornecedor from '../fornecedor';
import Carousel from '../carousel';



export default function Home() {

  const section1Ref = useRef( null );
  const location = useLocation();
  
  
  useEffect(() => {
    if ( location.state?.sectionId ) {
      const scrollOptions = { behavior: "smooth", block: "start" };
  
      if ( location.state.sectionId === 'section1' ) {
        section1Ref.current.scrollIntoView( scrollOptions );
      }
    }
  }, [ location ]);


  
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


