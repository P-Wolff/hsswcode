import './index.scss';
import { Link } from 'react-router-dom';



import Logo from '../../assets/land-page/logo.svg';




export default function Navbar() {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked:
            !this.state.clicked
        })
    }


    return(
        <div className="comp-cabecalho pagina">
            <nav className='nav'>
                <Link to='/'>
                    <img src={Logo} alt="HSSW Code Logo" />
                </Link>

                <div className='info-navbar'>
                    <ul id='navbar' className={ this.state.clicked
                        ? "#navbar ativo" : "#navbar"
                    }>
                        <li><Link to="/" className='ativo'>Jeito da HSSW</Link></li>
                        <li><Link to="/">Como fazemos</Link></li>
                        <li><Link to="/sobre ">Sobre nós</Link></li>
                        <li><Link to="/trabalho">Trabalhe  conosco</Link></li>
                        <li><Link to="/">FeedBacks</Link></li>

                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </div>

                <div id="mobile" onClick={ this.handleClick }>
                    <i id='bar'
                        className={
                            this.state.clicked 
                            ? "fas fa-times"
                            : "fas fa-bars"
                        }>
                    </i>
                </div>

            </nav>

        </div>

    );
}