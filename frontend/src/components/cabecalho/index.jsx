import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from '../../assets/images/land-page/logo.svg';

export default function Navbar() {
    const [active, setActive] = useState("nav__inactive");
    const [toggleIcon, setTogglerIcon] = useState("nav__toggler");

    const navToggle = () => {
        setActive((prevActive) => 
            prevActive === "nav__inactive" ? "nav__active" : "nav__inactive"
        );

        setTogglerIcon((prevIcon) => 
            prevIcon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler"
        );
    }

    const navigate = useNavigate();

    const handleNavigation = (path, sectionId) => {

        setActive("nav__inactive");
        setTogglerIcon("nav__toggler");
        navigate(path, { state: { sectionId } });
    };


    useEffect(() => {
        if (active.includes("nav__active")) {
            document.body.style.overflow = "hidden"; 
        } else {
            document.body.style.overflow = "auto"; 
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [active]);;

    return (
        <div className="comp-header pagina">
            <nav className="nav">
                <Link to='/' className='nav__brand'>
                    <img src={Logo} alt="HSSW Code Logo" />
                </Link>

                <ul id="navbar" className={active}>
                    <li className="nav__item">
                        <button className="nav__link button" onClick={() => handleNavigation("/", "section1")}>Jeito da HSSW</button>
                    </li>
                    <li className="nav__item">
                        <button className="nav__link button" onClick={() => handleNavigation("/", "section2")}>Como fazemos</button>
                    </li>
                    <li className="nav__item">
                        <Link to="/sobre" className="nav__link">Sobre nós</Link>
                    </li>
                    <li className="nav__item">
                        <button className="nav__link button" onClick={() => handleNavigation("/", "section4")}>FeedBacks</button>
                    </li>
                    <li className="nav__item">
                        <Link to="/contato" className="nav__link">Contato</Link>
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
