import './index.scss';

import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';



export default function Home() {


  return (
    <div className="page-home page">
      <Cabecalho />
      
        <div className="main__container">

          <section>
            <h1> HSSW Code </h1>
            <h4>A tecnologia e o mundo estão a evoluir, e você?</h4>
          </section>
          
        </div>

        <div className="section__container">
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
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
              </ul>
            </nav>
          </div>

          <div className="sponsors educacao">
            <nav className="cards">
              <ul>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
              </ul>
            </nav>
          </div>

          <div className="sponsors servico">
            <nav className="cards">
              <ul>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
              </ul>
            </nav>
          </div>

          <div className="sponsors saude">
            <nav className="cards">
              <ul>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
              </ul>
            </nav>
          </div>

          <div className="sponsors private_equity">
            <nav className="cards">
              <ul>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
              </ul>
            </nav>
          </div>

          <div className="sponsors financeiro_seguros">
            <nav className="cards">
              <ul>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
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

        <div className="section__feedbacks">
          <div className="rating__cards">
            <div className="card">
              
              <div className="info__text">
                <p>“A escolha da HSSW Code foi um encontro do que eu queria como pessoa e profissional. Adoraria que mais empresas tivessem o jeito HSSW Code de ser.”</p>
              </div>

              <div className="info__img">
                <img src="" alt="" />
                <p className="nome">

                </p>
              </div>

            </div>
          </div>
        </div>

      <Footer/>
      
    </div>
  );
}
