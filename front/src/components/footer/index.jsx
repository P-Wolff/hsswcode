import './index.scss'
import { Link, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Logo from '../../assets/images/land-page/logo.svg';


export default function Footer () {
    const navigate = useNavigate();

    const handleNavigation = (path, sectionId) => {
        navigate(path, { state: { sectionId } });
    };


    return (
        <div className='comp-footer pagina'>
            <footer className="footer">
                <div className="sb__footer section__padding">
                    <div className="sb__footer-links">

                        <div className="sb__footer-links-div">
                            <img src={Logo} alt='HSSW Code' title='HSSW Code' className='logo' />

                            <h4 className='text__links-div' > Pessoas e empresas que se 
                                <br /> realizam nunca mais 
                                <br />são as mesmas
                                <br /><br /> HSSW Code
                                <br /> O que persiste é o aprendizado
                                </h4>
                        </div>
                        
                        <div className="sb__footer-links_div">
                            <h4> Explore </h4>
                            <button className="foot__link button" onClick={() => handleNavigation("/", "section1")} > Jeito da HSSW </button>
                            <button className="foot__link button" onClick={() => handleNavigation("/", "section2")} > Como fazemos </button>
                            <Link className='foot__link' href="/sobre"> Sobre nós </Link>
                        </div>
                        <div className="sb__footer-links_div">
                            <h4></h4>
                            <button to="/" className="foot__link button" onClick={() => handleNavigation("/", "section4")} > FeedBacks </button>
                            <Link className='foot__link' href="/contato"> Contato </Link>
                        </div>


                        <div className="sb__footer-links_div">
                            <h4>Em breve</h4>
                            <div className="social-icons">
                                <p><Link className="facebook" to="#"><img src="../../assets/images/icones/bxl-facebook.svg" alt="facebook" /></Link></p>
                                <p><Link className="twitter" to="#"><img src="../../assets/images/icones/bxl-twitter.svg" alt="twitter" /></Link></p>
                                <p><Link className="instagram" to="#"><img src="../../assets/images/icones/bxl-instagram.svg" alt="instagram" /></Link></p>
                                <p><Link className="linkedin" to="#"><img src="../../assets/images/icones/bxl-linkedin-square.svg" alt="linkedin" /></Link></p>
                            </div>
                        </div>
                    </div>

                        <div className="grad-bar"></div>

                        <div className="sb_footer-below">
                            <div className="sb__footer-copyright">
                                <p>
                                    @{new Date().getFullYear()} All Rights Reserved by HSSW Code.
                                </p>
                            </div>


                            <div className="sb__footer-below-links">
                                <Link className='foot__links' href="/termos"> Termos & Condições </Link>
                                <Link className='foot__links' href="/privacidade"> Politica de Privacidade </Link>
                                <Link className='foot__links' href="/security"> Segurança </Link>
                                <Link className='foot__links' href="/cookie"> Declarações de Cookies </Link>
                                <Link className='foot__links' href="/faq"> FAQ </Link>
                            </div>

                        </div>

                </div>
            </footer>
        </div>

        
    )
}