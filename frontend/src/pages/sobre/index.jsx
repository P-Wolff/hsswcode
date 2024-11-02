import './index.scss';
import { Link } from 'react-router-dom';
import imagem from '../../assets/images/trabalhe_conosco.svg';


import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';




export default function SobreNos() {

  return (
    <div className="pagina-sobre ">
      <Cabecalho />

      <section className="headline">
        
        <div className='estrela'>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="title">
            <span>A experiência</span>
            <br />
            <span>é a que fica</span>
          </div>
        </div>

      </section>


      <div className="text8">
        <h4 className='text9'>Sobre nós</h4>

        <p>A HSSW Code é a consultoria de negócios & tecnologia que oferece a compreensão dos desafios de agora com disposição para conquistar o próximo passo na jornada de transformação de seus clientes e colaboradores.</p>
      </div>

      <section className="section__about_us" >

        <div className='info_separar'>
          <div className="text10">
            <p> Criada em 2024, a HSSW Code atua com foco em elaboração de estratégia, análise e desenho de soluções, planejamento e implantação. É uma das consultorias que  mais cresce no país, atuando na solução de desafios corporativos de grandes  empresas e junto às principais organizações do terceiro setor. </p>

            <p><br /><br /> De forma sustentável, evoluímos acelerando em faturamento, resultado e equipe. </p>
          </div>

          <div className="text11">
            <p> Buscamos a realização das pessoas e empresas do nosso tempo. Acreditamos no potêncial revelado pela intenção de resolver cada problema, porque não existem soluções prontas para contextos em transformação. </p>

            <p><br /><br /> Construímos uma visão estratégica a partir de soluções contemporâneas, personalizadas e que se sustentam porque são construídas lado a lado, momento a momento. </p>
          </div>

        </div>


      </section>
      

      <section className='section__MVV'>
        <div className="missao corzinha">
          <h1>Missão</h1>
          <p>Utilizar as melhoeres práticas de gestão, tecnologia e execução em projetos que vão da transformação da estratégia à implantação, conectadas com as necessidades de nossos clientes e sociedade.</p>
        </div>

        <div className="visao corzinha">
          <h1>Visão</h1>
          <p>Ser referência global no desenvolvimento de sites e soluções tecnológicas, criando experiências digitais que transformam o modo como empresas interagem com o mundo online, sempre à frente das tendências e inovações tecnológicas.</p>
        </div>

        <div className="valores corzinha">
          <h1>Valores</h1>
          <p> Inovação e Sustentabilidade
            <br /> Atitude e Competência 
            <br /> Transparência e Colaboração
            <br /> Empatia e Parceria
            <br /> Simplicidade e Pragmatismo
          </p>
        </div>

      </section>

      <section className='section__work'>
          <div className="img_work">
            <img src={imagem} alt="Trabalhe conosco" />
          </div>

          <div className="text13">
            <h1 className='titulo2'> Trabalhe conosco </h1>
            <p>
              A HSSW Code é uma empresa de desenvolvimento web que cria soluções digitais 
              inovadoras e de alta qualidade. Nossa equipe usa tecnologias de ponta para entregar 
              sites e aplicativos personalizados, focados em experiência do usuário, segurança e 
              desempenho. Transformamos ideias em realidade, ajudando empresas a alcançar seus 
              objetivos digitais.
            </p>
            
            <button type="button" className="more__about">
              <Link to="/contato" className="button-link"> Contato </Link>
            </button>
          </div>
      </section>

      <Footer />
    </div>
  );
};