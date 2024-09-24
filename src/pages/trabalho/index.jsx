import './index.scss';

import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';

export default function TrabalheComNos() {


  return (
    <div className="pagina-trabalho pagina">
      <Cabecalho />
      <Link to='/'>
        <i className='fa fa-arrow-left voltar'></i>
      </Link>
      <h1>Trabalhe conosco</h1>

      <Footer />
    </div>
  );
}