import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


import Logo from '../../assets/images/land-page/logo.svg';



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


    const navigate = useNavigate();

    const handleNavigation = (path, sectionId) => {
        navigate(path, { state: { sectionId } });
    };


    return(
        <div className="comp-header pagina">
            <nav className="nav">
                <Link to='/' className='nav__brand'>
                    <img src={Logo} alt="HSSW Code Logo" />
                </Link>

                <ul id="navbar" className={active}>                
                    <li className="nav__item">
                        <button className="nav__link button" onClick={() => handleNavigation("/", "section1")} > Jeito da HSSW </button>
                    </li>
                    <li className="nav__item">
                        <buttom className="nav__link button" onClick={() => handleNavigation("/", "section2")} > Como fazemos </buttom>
                    </li>
                    <li className="nav__item">
                        <Link to="/sobre" className="nav__link" > Sobre nós </Link>
                    </li>
                    <li className="nav__item">
                        <button to="/" className="nav__link button" onClick={() => handleNavigation("/", "section4")} > FeedBacks </button>
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
