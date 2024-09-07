import { Link } from 'react-router-dom'

import './index.scss';
import Navbar from '../../cabecalho/Navbar';

export default function SobreNos() {

  return (
    <div className="pagina-about-us">
      <Navbar />

      <Link to='/'>
        <i className='fa fa-arrow-left voltar'></i>
      </Link>
      <h1>Sobre nós</h1>
    </div>
  );
};