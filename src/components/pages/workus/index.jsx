import { Link } from 'react-router-dom';

import './index.scss';


export default function WorkUs() {


  return (
    <div className="pagina-contato">

      <Link to='/'>
        <i className='fa fa-arrow-left voltar'></i>
      </Link>
      <h1>Trabalhe conosco</h1>
    </div>
  );
}