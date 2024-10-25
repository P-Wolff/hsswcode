import './index.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';

export default function Contatos() {

  const [activeGroup, setActiveGroup] = useState(null);

  const handleGroupClick = (group) => {
    if (group !== activeGroup) {
      setActiveGroup(group);
    }
  };

  const handleBackButton = () => {
    setActiveGroup(null);
  };


  return (
    <div className="pagina-contato">
      <Cabecalho />
      <h1>FALE CONOSCO</h1>

      <div className="container">
        <div className="box-contacts">

          <div className={`solucoes group ${activeGroup === "solucoes" ? "active" : ""}`} 
            onClick={(e) => { e.stopPropagation(); handleGroupClick("solucoes"); }}>

              <div className="texto" >
                  <h2>Soluções</h2>
                  <p>Descubra como as soluções e projetos da HSSW Code podem impulsionar o seu negócio</p>
              </div>

              {activeGroup === "solucoes" && (
                <div className="content-container" onClick={e => e.stopPropagation() }>
                  <div className="form formulario"> 

                    <label htmlFor="nome">Nome completo</label>
                    <input type="text" id="nome" name="nome" required />

                    <label htmlFor="email">E-mail Corporativo</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="celular">Celular</label>
                    <input type="tel" id="celular" name="celular" required />

                    <label htmlFor="empresa">Empresa</label>
                    <input type="text" id="empresa" name="empresa" required />

                    <label htmlFor="cargo">Cargo</label>
                    <input type="text" id="cargo" name="cargo" required />

                    <label htmlFor="mensagem">Como podemos ajudar?</label>
                    <textarea id="mensagem" name="mensagem" rows="4"></textarea>
                    
                    <p className="privacy">
                        Ao informar meus dados, eu concordo em receber comunicações da empresa e com a <a href="#">Política de Privacidade</a>.
                    </p>

                    <button className="back-button" onClick={handleBackButton}>Voltar</button>
                    <button> Enviar </button>
                  </div>

                </div>
              )}
          </div>

          <div className={`carreira group ${activeGroup === "carreira" ? "active" : ""}`} 
            onClick={(e) => { e.stopPropagation(); handleGroupClick("carreira"); }}>

            <div className="texto">
                <h2>Carreira</h2>
                <p>Junte-se ao nosso time - Veja as oportunidades disponíveis e como fazer parte da HSSW Code</p>
            
            
            </div>

            {activeGroup === "carreira" && (
              <div className="content-container" onClick={e => e.stopPropagation() }>
                <div className="icons">
                  <FontAwesomeIcon icon={faEnvelope} /> recrutamento@hsswcode.com.br<br />
                  <FontAwesomeIcon icon={faPhone} /> +55 (11) 2118-1615<br />
                  <FontAwesomeIcon icon={faLocationDot} /> São Paulo | São Paulo<br />
                  <FontAwesomeIcon icon={faClock} /> 09:00 - 17:00
                </div>

                <div className="form formulario">
                  <label for="nome">Nome completo</label>
                  <input type="text" id="nome" name="nome" required />

                  <label for="email">E-mail Corporativo</label>
                  <input type="email" id="email" name="email" required />

                  <label for="celular">Celular</label>
                  <input type="tel" id="celular" name="celular" required />

                  <label for="empresa">Empresa</label>
                  <input type="text" id="empresa" name="empresa" required />

                  <label for="cargo">Cargo*</label>
                  <input type="text" id="cargo" name="cargo" required />

                  <label for="mensagem">Como podemos ajudar?</label>
                  <textarea id="mensagem" name="mensagem" rows="4"></textarea>

                  <p class="privacy">
                      Ao informar meus dados, eu concordo em receber comunicações da empresa e com a <a href="#">Política de Privacidade</a>.
                  </p>

                  <button className="back-button" onClick={handleBackButton}>Voltar</button>
                  <button> Enviar </button>
                </div>
              </div>
            )}
          </div>

          <div className={`fornecedor group ${activeGroup === "fornecedor" ? "active" : ""}`} onClick={(e) => { e.stopPropagation(); handleGroupClick("fornecedor"); }}>
            <div className="texto">
                <h2>Fornecedor</h2>
                <p>Seja um fornecedor da HSSW Code, preencha as informações sobre seu negócio.</p>
            </div>

            {activeGroup === "fornecedor" && (
              <div className="content-container" onClick={e => e.stopPropagation() }>

                <div className="form formulario">
                  <label for="nome">Nome completo</label>
                  <input type="text" id="nome" name="nome" required />

                  <label for="email">E-mail Corporativo</label>
                  <input type="email" id="email" name="email" required />

                  <label for="celular">Celular</label>
                  <input type="tel" id="celular" name="celular" required />

                  <label for="empresa">Empresa</label>
                  <input type="text" id="empresa" name="empresa" required />

                  <label for="cargo">Cargo*</label>
                  <input type="text" id="cargo" name="cargo" required />

                  <label for="mensagem">Como podemos ajudar?</label>
                  <textarea id="mensagem" name="mensagem" rows="4"></textarea>

                  <p class="privacy">
                      Ao informar meus dados, eu concordo em receber comunicações da empresa e com a <a href="#">Política de Privacidade</a>.
                  </p>

                  <button className="back-button" onClick={handleBackButton}>Voltar</button>
                  <button> Enviar </button>
                </div>
              </div>
            )}
          </div>

          <div className={`outros group ${activeGroup === "outros" ? "active" : ""}`} onClick={(e) => { e.stopPropagation(); handleGroupClick("outros"); }}>
            <div className="texto">
                <h2>Outros</h2>
                <p>Tem dúvidas, sugestões, feedbacks ou deseja falar sobre outros assuntos? Contate-nos por aqui.</p>
            </div>

            {activeGroup === "outros" && (
              <div className="content-container" onClick={e => e.stopPropagation() }>
                <div className="icons">
                  <FontAwesomeIcon icon={faEnvelope} /> contato@hsswcode.com.br<br />
                  <FontAwesomeIcon icon={faPhone} /> +55 (11) 2118-1617<br />
                  <FontAwesomeIcon icon={faLocationDot} /> São Paulo | São Paulo<br />
                  <FontAwesomeIcon icon={faClock} /> 09:00 - 17:00
                </div>

                <div className="form formulario">
                  <label for="nome">Nome completo</label>
                  <input type="text" id="nome" name="nome" required />

                  <label for="email">E-mail Corporativo</label>
                  <input type="email" id="email" name="email" required />

                  <label for="celular">Celular</label>
                  <input type="tel" id="celular" name="celular" required />

                  <label for="empresa">Empresa</label>
                  <input type="text" id="empresa" name="empresa" required />

                  <label for="cargo">Cargo*</label>
                  <input type="text" id="cargo" name="cargo" required />

                  <label for="mensagem">Como podemos ajudar?</label>
                  <textarea id="mensagem" name="mensagem" rows="4"></textarea>

                  <p class="privacy">
                      Ao informar meus dados, eu concordo em receber comunicações da empresa e com a <a href="#">Política de Privacidade</a>.
                  </p>
                  <button className="back-button" onClick={handleBackButton}>Voltar</button>
                  <button> Enviar </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
      </div>
      

      <div className="random-text">
        <div className="other-text">
          <h1> Sala de Imprensa </h1>
          <p>Vamos trabalhar lado a lado?
            <br /> Entre em contato com o nosso time.
          </p>
        </div>

        <div className="box-overflow">
          <div className="paragrafo">
              <p>HSSW Code Comunicações</p>
          </div>
          
          <div className="emails">
              <p> Priscila Wolff
                <br />priscila@hsswcode.com.br
              </p>

              <p> Kevilyn Sandes
                <br />kevilyn@hsswcode.com.br
              </p>

          </div>
          
        </div>

      </div>

      <Footer />
    </div>
  );
}
