
import { Link } from 'react-router-dom'
import './App.scss';


export default function App() {


  return (
    <div className="pagina-app">
      <div className='menu-bar'>
        <h1>Opa, está funcionando!</h1>

        <ul>
          <il>
            <Link to='/contato'>Ir para contato</Link>
            <Link to='/aboutus'>Ir para sobre nós</Link>
          </il>
        </ul>
      </div>

    </div>
  );
};
