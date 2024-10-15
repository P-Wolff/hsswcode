import './index.scss';
import { Link } from 'react-router-dom';


import Logo from '../../assets/images/land-page/logo.svg';
import { useState } from 'react';



export default function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setTogglerIcon] = useState("nav__toggler");

    const navToggle = () => {
        active === "nav__menu"
        ? setActive("nav__menu nav__active")
        : setActive("nav__menu");


        toggleIcon === "nav__toggler"
        ? setTogglerIcon("nav__toggler toggle")
        : setTogglerIcon("nav__toggler");
    }


    return(
        <div className="comp-header pagina">
            <nav className="nav">
                <Link to='/' className='nav__brand'>
                    <img src={Logo} alt="HSSW Code Logo" />
                </Link>

                <ul id="navbar" className={active}>                
                    <li className="nav__item">
                        <Link to="/" className="nav__link" > Jeito da HSSW </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/" className="nav__link" > Como fazemos </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/sobre" className="nav__link" > Sobre nós </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/trabalho" className="nav__link" > Trabalhe conosco </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/" className="nav__link" > FeedBacks </Link>
                    </li>

                    <li className="nav__item">
                        <Link to="/contato" className="nav__link" > Contato </Link>
                    </li>
                </ul>

                <div onClick={navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>

    );
}
