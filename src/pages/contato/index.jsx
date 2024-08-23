
import { Link } from 'react-router-dom';
import './index.scss';


export default function Contatos() {


  return (
    <div className="pagina-contato">
      <Link to='/'>
        <i className='fa fa-arrow-left voltar'></i>
      </Link>
      <h1>Contatooooo</h1>
    </div>
  );
}