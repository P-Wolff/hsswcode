import './Navbar.scss';
import React, {useState} from "react";
import { Link } from 'react-router-dom';



export default function Navbar () {
    const [ active, setActive ] = useState ( "nav_menu" );
    const [ toggleIcon, setToggleIcon ] = useState ( "nav_toggler" );
        const navToggle = () => {
            active === "nav_menu" 
            ? setActive( 'nav_menu nav_active' ) 
            : setActive ( "nav_menu" );

            //      ToggLerIcon

            toggleIcon === 'nav_toggler'
            ? setToggleIcon ( "nav_toggler toggle" )
            : setToggleIcon ( "nav_toggler" );
        };

    return(
        <div className='cabecalho'>
            <header>
                <nav className='nav'>
                    <Link to='/'>
                        <img className='logo' src="/assets/images/land-page/logo.svg" alt="HSSW Code" />
                    </Link>

                    <ul className={active}>
                        <Link to='/' className='nav_item'>Como fazemos</Link>
                        <Link to='/' className='nav_item'>Jeito HSSW Code</Link>
                        <Link to='/aboutus' className='nav_item'>Sobre nós</Link>
                        <Link to='/workus' className='nav_item'>Trabalhe conosco</Link>
                        <Link to='/' className='nav_item'>FeedBacks</Link>
                        <Link to='/contato' className='nav_item'>Contato</Link>
                    </ul>

                    <div onClick = {navToggle} className={toggleIcon}>
                        <div className="line1"></div> 
                        <div className="line2"></div> 
                        <div className="line3"></div>
                    </div>
                </nav>
        
            </header>
        </div>
    );

}