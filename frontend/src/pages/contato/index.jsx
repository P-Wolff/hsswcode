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

      <section className="headline" >
        <div className='estrela'>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
      </section>


      <div className="texto-entrada">
        <div className="entrada-texto">
          <h3>Fale Conosco</h3>
          <p>Estamos aqui para caminhar ao seu lado. Se você tem perguntas, dúvidas ou quer saber mais sobre como podemos ajudar a transformar o seu negócio, entre em contato. Juntos, podemos construir soluções que fazem a diferença. Vamos conversar</p>
        </div>
      </div>


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
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [cargo, setCargo] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5050/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome,
        email,
        telefone,
        empresa,
        cargo,
        mensagem,
        comoConheceu: selectedOption 
      }),
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
  };

  return (
    <form className="contatos-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" id="nome" name="nome" placeholder='Nome' required
          value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>
      <div className="form-group">
        <input type="email" id="email" name="email" placeholder='E-mail' required
          value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <input type="text" id="telefone" name="telefone" placeholder='Telefone'
          value={telefone} onChange={(e) => setTelefone(e.target.value)} />
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
        <input type="text" id="empresa" name="empresa" placeholder='Empresa'
          value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
      </div>
      <div className="form-group">
        <input type="text" id="cargo" name="cargo" placeholder='Cargo'
          value={cargo} onChange={(e) => setCargo(e.target.value)} />
      </div>
      <div className="form-group full-width">
        <textarea id="mensagem" name="mensagem" rows="4" placeholder='Como podemos ajudar?'
          value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
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

