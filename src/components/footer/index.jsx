import './index.scss'
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/land-page/logo.svg';


export default function Footer () {

    return (
        <div className='comp-footer pagina'>
            <footer className="footer">
                <div className="sb__footer section__padding">
                    <div className="sb__footer-links">

                        <div className="sb__footer-links-div">
                            <img src={Logo} alt='HSSW Code' title='HSSW Code' className='logo' />

                            <h4> Pessoas e empresas que se 
                                <br /> realizam nunca mais 
                                <br />são as mesmas. 
                                <br /><br /> HSSW Code.
                                <br /> O que persiste é o aprendizado. 
                                </h4>
                        </div>
                        
                        <div className="sb__footer-links_div">
                            <h4> Explore </h4>
                            <Link className='foot__link' href="/"> Jeito HSSW Code </Link>
                            <Link className='foot__link' href="/"> Como Fazemos </Link>
                            <Link className='foot__link' href="/sobre"> Sobre nós </Link>
                        </div>
                        <div className="sb__footer-links_div">
                            <h4></h4>
                            <Link className='foot__link' href="/trabalho"> Trabalhe conosco </Link>
                            <Link className='foot__link' href="/"> FeedBacks </Link>
                            <Link className='foot__link' href="/contato"> Contato </Link>
                        </div>


                        <div className="sb__footer-links_div">
                            <h4>Em breve</h4>
                            <div className="social-icons">
                                <p><Link className="facebook" href="#"><i class="fa fa-facebook"></i></Link></p>
                                <p><Link className="twitter" href="#"><i class="fa fa-twitter"></i></Link></p>
                                <p><Link className="instagram" href="#"><i class="fa fa-instagram"></i></Link></p>
                                <p><Link className="linkedin" href="#"><i class="fa fa-linkedin"></i></Link></p>
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

                </div>
            </footer>
        </div>

        
    )
}