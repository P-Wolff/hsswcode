import './index.scss'
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/land-page/logo.svg';


export default function Footer () {

    return (
        <div className='comp-footer pagina'>
            <footer className="footer">

                <div className="container">
                    <div className="row">

                        <div className="explore" >
                            <img src={Logo} alt='HSSW Code' title='HSSW Code'/>
                            <div className="info">

                                <div className="info__text">
                                    <p className="text-justify"> 
                                        Pessoas e empresas que se realizam nunca mais são as mesmas.
                                    </p>
                                    <p className="text-justify"> 
                                        HSSW Code. 
                                        <br /> O que persiste é o aprendizado.
                                    </p>
                                </div>

                            </div>
 
                        </div>

                        <div className="explore">
                            <h6>Explore</h6>
                            <ul className="footer-links">
                                <li><Link className='foot__link' href="/"> Jeito HSSW Code </Link></li>
                                <li><Link className='foot__link' href="/"> Como Fazemos </Link></li>
                                <li><Link className='foot__link' href="/sobre"> Sobre nós </Link></li>
                                <li><Link className='foot__link' href="/trabalho"> Trabalhe conosco </Link></li>
                                <li><Link className='foot__link' href="/"> FeedBacks </Link></li>
                                <li><Link className='foot__link' href="/contato"> Contato </Link></li>
                            </ul>
                        </div>

                        <div className="explore">
                            <ul className="footer-links">
                                <li>
                                    <Link className='foot__link' href="/"> 
                                        Politica de Privacidade 
                                    </Link>
                                </li>
                                <li>
                                    <Link className='foot__link' href="/"> 
                                        FAQ 
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="grad-bar"></div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="explore">
                            <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by 
                                <Link href="/">HSSW Code</Link>.
                            </p>
                        </div>

                        <div className="explore">
                            <ul className="social-icons">
                                <li><Link className="facebook" href="#"><i class="fa fa-facebook"></i></Link></li>
                                <li><Link className="twitter" href="#"><i class="fa fa-twitter"></i></Link></li>
                                <li><Link className="instagram" href="#"><i class="fa fa-instagram"></i></Link></li>
                                <li><Link className="linkedin" href="#"><i class="fa fa-linkedin"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
        </div>

        
    )
}