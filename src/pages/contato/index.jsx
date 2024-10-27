import './index.scss';
import React, { useState } from 'react';
import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';

export default function Contatos() {
  const [activeTab, setActiveTab] = useState('Solucoes');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const renderForm = () => {
    return (
      <div className="form-content">
        <div className="info-content">
          {activeTab === 'Solucoes' && (
            <>
              <h2>Soluções</h2>
              <p>Descubra como as soluções e projetos da Peers podem impulsionar seu negócio.</p>
            </>
          )}
          {activeTab === 'Carreiras' && (
            <>
              <h2>Carreiras</h2>
              <p>Junte-se à nossa equipe e faça parte de algo incrível.</p>
            </>
          )}
          {activeTab === 'Fornecedor' && (
            <>
              <h2>Fornecedor</h2>
              <p>Seja um parceiro fornecedor e colabore com nossos projetos.</p>
            </>
          )}
          {activeTab === 'Outros' && (
            <>
              <h2>Outros</h2>
              <p>Entre em contato conosco para qualquer outra questão.</p>
            </>
          )}
        </div>

        <Form 
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
          selectedOption={selectedOption}
          selectOption={selectOption}
        />

      </div>
    );
  };
    
  return (
    <div className="pagina-contato">
      <Cabecalho />

      <div className="contatos-page">
        <div className="tabs">
          <button className={activeTab === 'Solucoes' ? 'active' : ''} onClick={() => setActiveTab('Solucoes')}>Soluções</button>
          <button className={activeTab === 'Carreiras' ? 'active' : ''} onClick={() => setActiveTab('Carreiras')}>Carreiras</button>
          <button className={activeTab === 'Fornecedor' ? 'active' : ''} onClick={() => setActiveTab('Fornecedor')}>Fornecedor</button>
          <button className={activeTab === 'Outros' ? 'active' : ''} onClick={() => setActiveTab('Outros')}>Outros</button>
        </div>
        <div className="form-content">
          {renderForm()}
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Form({ isDropdownOpen, toggleDropdown, selectedOption, selectOption }) {
  return (
    <form className="contatos-form">

      <div className="form-group">
        <input type="text" id="nome" 
          name="nome" placeholder='Nome' required />
      </div>
      <div className="form-group">
        <input type="email" id="email" 
          name="email" placeholder='E-mail' required />
      </div>


      <div className="form-group">
        <input type="text" id="telefone" 
          name="telefone" placeholder='Telefone' />
      </div>

      <div className="form-group">
        <div className="custom-select" onClick={toggleDropdown}>
          <div className="selected-option">{selectedOption || "Como nos conheceu?"}</div>
          <div className={`options ${isDropdownOpen ? 'open' : ''}`}>
            <div onClick={() => selectOption('Anúncio em redes sociais')}>Anúncio em redes sociais</div>
            <div onClick={() => selectOption('Busca no Google')}>Busca no Google</div>
            <div onClick={() => selectOption('Anúncio Offline')}>Anúncio Offline (Elevador, Aeroporto, Etc)</div>
            <div onClick={() => selectOption('Eventos')}>Eventos</div>
            <div onClick={() => selectOption('Indicações')}>Indicações</div>
            <div onClick={() => selectOption('Outros')}>Outros</div>
          </div>
        </div>
      </div>


      <div className="form-group">
        <input type="text" id="empresa" 
          name="empresa" placeholder='Empresa'/>
      </div>
      <div className="form-group">
        <input type="text" id="cargo" 
          name="cargo" placeholder='Cargo' />
      </div>


      <div className="form-group full-width">
        <label htmlFor="mensagem">Como podemos ajudar?</label>
        <textarea id="mensagem" name="mensagem" rows="4"></textarea>
      </div>


      <div className="form-group full-width">
        <label className="privacy">
          <input type="checkbox" name="privacidade" required />
          Ao informar meus dados, eu concordo em receber comunicações da empresa e com a <a href="#">Política de Privacidade</a>.
        </label>
      </div>


      <button type="submit" className="submit-button">Enviar mensagem</button>
    </form>
  );
}



