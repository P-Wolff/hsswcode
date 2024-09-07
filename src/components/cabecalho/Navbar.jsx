import './Navbar.scss';
import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Logo from '../assets/land-page/logo.svg';


export default function Navbar () {
    const [ ativar, setAtivar ] = useState ( "nav__menu" );
    const [ iconeMenu, setIconeMenu ] = useState ( "nav__Menu" );
        const navMenu = () => {
            ativar === "nav__menu" 
            ? setAtivar( 'nav__menu nav__ativar' ) 
            : setAtivar ( "nav__menu" );

            //      Icone de Menu

            iconeMenu === 'nav__Menu'
            ? setIconeMenu ( "nav__Menu Menu" )
            : setIconeMenu ( "nav__Menu" );
        };
    
    return(
        <div className='comp-cabecalho'>
            <div class="cabecalho__container">
                <header className='cabecalho' >

                    <nav className='navevagao'>
                            <Link to='/'>
                                <   img className='logo' src={Logo} alt='HSSW Code' title='HSSW Code'/>
                            </Link>
                            <ul className={ativar}>
                                <Link to='/' className='nav__item'>Como fazemos</Link>
                                <Link to='/' className='nav__item'>Jeito HSSW Code</Link>
                                <Link to='/sobre' className='nav__item'>Sobre nós</Link>
                                <Link to='/trabalho' className='nav__item'>Trabalhe conosco</Link>
                                <Link to='/' className='nav__item'>FeedBacks</Link>
                                <Link to='/contato' className='nav__item'>Contato</Link>
                            </ul>

                            <div onClick = {navMenu} className={iconeMenu}>
                                <div className="linha1"></div> 
                                <div className="linha2"></div> 
                                <div className="linha3"></div>
                            </div>
                        </nav>

                    <div id="secao__container">
                        <span className="texto__container">HSSW Code</span>
                        <span>A tecnologia e o mundo estão a evoluir, e você?</span>
                    </div>
                </header>
            </div>

        </div>
    );
}