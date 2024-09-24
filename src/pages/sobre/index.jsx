import './index.scss';

import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';


export default function SobreNos() {

  return (
    <div className="pagina-sobre pagina">
      <Cabecalho />

      <Link to='/'>
        <i className='fa fa-arrow-left voltar'></i>
      </Link>
      <h1>Sobre nós</h1>

      <Footer />
    </div>
  );
};