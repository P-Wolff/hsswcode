
import { Link } from 'react-router-dom'
import './index.scss';


export default function AboutUs() {


  return (
    <div className="pagina-about-us">
      <Link to='/'>
        <i className='fa fa-arrow-left voltar'></i>
      </Link>
      <h1>Sobre nós</h1>
    </div>
  );
};