import './index.scss';

import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';

export default function Contatos() {

  return (
    <div className="pagina-contato pagina">
      <Cabecalho />

      <h1>FALE CONOSCO</h1>

      <div className="solucoes ">
        <div className="texto">
          <p>Descubra como as soluções e projetos da HSSW Code podem impulsionar o seu negocio</p>
        </div>

        <div>&nbsp;</div>

        <div className="form formulario">
          <input type="text" placeholder='Nome completo*'/>
          <input type="text" placeholder='E-mail Corporativo*'/>
          <input type="text" placeholder='Celular*'/>
          <input type="text" placeholder='Empresa*'/>
          <input type="text" placeholder='Cargo*'/>

          <div>&nbsp;</div>

          <p>Como podemos ajudar?</p>
          <input type="text" />

          <div>&nbsp;</div>

          <p>Ao informar meus dados,valentina s2 miguel eu concordo em receber comunicações da empresa e com a Política de Privacidade</p>
          <button> Voltar </button>
          <button> Enviar </button>
        </div>

      </div>

      <div>&nbsp;</div>

      <div className="carreira">
        <div className="texto">
          <p>Junte-se ao nosso time - Veja as oportunidades disponíveis e como fazer parte da HSSW Code</p>

          <i className="fa fa-sharp fa-solid fa-envelope"></i> recrutamento@hsswcode.com.br 
          <i className='fa fa-solid fa-phone' ></i> +55 (11) 2118-1615
          <i className='fa fa-location-dot'></i> São Paulo | São Paulo
          <i className='fa fa-clock'></i> 09:00 - 17:00
        </div>
        
        <div>&nbsp;</div>

        <div className="form formulario">

          <input type="text" placeholder='Nome completo*'/> &nbsp;
          <input type="text" placeholder='E-mail Corporativo*'/> &nbsp;
          <input type="text" placeholder='Celular*'/> &nbsp;
          <input type="text" placeholder='Assunto*'/> &nbsp;

          <select>
            <option>Como nos conheceu?</option>
            <option>Indicação</option>
            <option>Google</option>
            <option>LinkedIn</option>
            <option>Instagram</option>
            <option>Site</option>
            <option>Outro</option>
          </select>

          <div>&nbsp;</div>
          
          <p>Como podemos ajudar?</p>
          <input type="text" />

          <div>&nbsp;</div>

          <p>Ao informar meus dados, eu concordo em receber comunicações da empresa e com a Política de Privacidade</p>
          <button> Voltar </button>
          <button> Enviar </button>

        </div>
      </div>

      <div>&nbsp;</div>

      <div className="fornecedor">
        <div className="texto">
            <p>Seja um fornecedor da HSSW Code, preencha as informações sobre seu negócio.</p>
        </div>
          
        <div>&nbsp;</div>

        <div className="form formulario">

          <input type="text" placeholder='Nome completo*'/> &nbsp;
          <input type="text" placeholder='E-mail Corporativo*'/> &nbsp;
          <input type="text" placeholder='Celular*'/> &nbsp;
          <input type="text" placeholder='Empresa*'/> &nbsp;

          <select>
            <option>Como nos conheceu?</option>
            <option>Indicação</option>
            <option>Google</option>
            <option>LinkedIn</option>
            <option>Instagram</option>
            <option>Site</option>
            <option>Outro</option>
          </select>

          <div>&nbsp;</div>
            
          <p>Como podemos ajudar?</p>
          <input type="text" />

          <div>&nbsp;</div>

          <p>Ao informar meus dados, eu concordo em receber comunicações da empresa e com a Política de Privacidade</p>
          <button> Voltar </button>
          <button> Enviar </button>

        </div>
      </div>
      
      <div>&nbsp;</div>

      <div className="outros">
        <div className="texto">
            <p>Tem dúvidas, sugestões, feedbacks ou deseja falar sobre outros assuntos? Contate-nos por aqui.</p>

            <i className="fa fa-sharp fa-solid fa-envelope"></i> faleconosco@hsswcode.com.br 
            <i className='fa fa-solid fa-phone' ></i> +55 (11) 2118-1615
            <i className='fa fa-location-dot'></i> São Paulo | São Paulo
            <i className='fa fa-clock'></i> 09:00 - 17:00
          </div>
          
          <div>&nbsp;</div>

          <div className="form formulario">

            <input type="text" placeholder='Nome completo*'/> &nbsp;
            <input type="text" placeholder='E-mail Corporativo*'/> &nbsp;
            <input type="text" placeholder='Celular*'/> &nbsp;
            <input type="text" placeholder='Assunto*'/> &nbsp;

            <select>
              <option>Como nos conheceu?</option>
              <option>Indicação</option>
              <option>Google</option>
              <option>LinkedIn</option>
              <option>Instagram</option>
              <option>Site</option>
              <option>Outro</option>
            </select>

            <div>&nbsp;</div>
            
            <p>Como podemos ajudar?</p>
            <input type="text" />

            <div>&nbsp;</div>

            <p>Ao informar meus dados, eu concordo em receber comunicações da empresa e com a Política de Privacidade</p>
            <button> Voltar </button>
            <button> Enviar </button>

          </div>
      </div>

      <Footer />
    </div>
  );
}