
import { Link } from 'react-router-dom'
import './App.scss';


export default function App() {


  return (
    <div className="pagina-app">
      <div className='menu-bar'>
        <div className="cabecalho">
          <img src="/assets/images/land-page/cabeçalho.jpg" alt="nao foi" />

            <div className="text">
                  <h1>Jeito HSSW Code</h1>
                  <h1>Como fazemos</h1>
                  <Link to='/aboutus'> <h1>Sobre nós</h1></Link>
                  <h1>Trabalhe conosco</h1>
                  <h1>FeedBacks</h1>
                  < Link to='/contato'> <h1> Contato </h1></Link>
            </div>
        </div>
        
      </div>

    </div>
  );
};
