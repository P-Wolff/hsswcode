import './index.scss';
import React, {useState} from "react";
import { Link } from 'react-router-dom';

import Logo from '../../assets/land-page/logo.svg';


export default function Cabecalho () {

          
        

    
    return(
        <div className="comp_cabecalho pagina">
            <div className="pagina-nav">

                <div className="bar-grad"></div>

                <nav className="bar-nav">
                    <img src={Logo} alt='HSSW Code' title='HSSW Code' />

                    <div class="icone-menu" id="mobile-menu">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>

                    <ul className="nav">
                        
                        <li className="nav_item"> 
                            <Link to='/'>
                                Como Fazemos 
                            </Link> 
                        </li>

                        <li className="nav_item"> 
                            <Link to='/'>
                                Jeito HSSW Code 
                            </Link> 
                        </li>

                        <li className="nav_item"> 
                            <Link to='/'>
                                Sobre Nós 
                            </Link> 
                        </li>

                        <li className="nav_item"> 
                            <Link to='/'>
                                Trabalhe Conosco 
                            </Link> 
                        </li>

                        <li className="nav_item"> 
                            <Link to='/'>
                                FeedBacks 
                            </Link> 
                        </li>

                        <li className="nav_item"> 
                            <Link to='/'>
                                Contatos 
                            </Link> 
                        </li>

                    </ul>
                </nav>

            </div>


            <div id="secao_container">
                <span className="titulo">
                    HSSW Code
                </span>
                <span className="texto">
                    A tecnologia e o mundo estão a evoluir, e você?
                </span>
            </div>
        </div>
    );
}
