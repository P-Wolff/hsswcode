import { Link } from 'react-router-dom';

import './index.scss';
import Navbar from '../../cabecalho/Navbar';

export default function TrabalheComNos() {


  return (
    <div className="pagina-contato">
      <Navbar />
      <Link to='/'>
        <i className='fa fa-arrow-left voltar'></i>
      </Link>
      <h1>Trabalhe conosco</h1>
    </div>
  );
}