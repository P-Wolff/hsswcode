import './index.scss';
import React, { useState } from 'react';

import Alpar from '../../assets/images/varejo/alpargatas.svg';
import Boticario from '../../assets/images/varejo/boticario.svg';
import CA from '../../assets/images/varejo/c_a.svg';
import Quero from '../../assets/images/varejo/quero-quero.svg';
import Vivara from '../../assets/images/varejo/vivara.svg';

import Cogna from '../../assets/images/educacao/Cogna-2.png.webp';
import Natura from '../../assets/images/educacao/Instituto-Natura-2.png.webp';
import SonhoG from '../../assets/images/educacao/Instituto-Sonho-Grande-2.png.webp';
import Itau from '../../assets/images/educacao/Itau-Educacao-e-Trabalho-1.png.webp';
import Yduqs from '../../assets/images/educacao/Yduqs-2.png.webp';

import Chama from '../../assets/images/servico/Chama.png.webp';
import Ipiranga from '../../assets/images/servico/Ipiranga.png.webp';
import Movida from '../../assets/images/servico/Movida.png.webp';
import Simpress from '../../assets/images/servico/Simpress.png.webp';
import Tcp from '../../assets/images/servico/TCP.png.webp';

import Alliar from '../../assets/images/saude/Alliar.png.webp';
import Fleury from '../../assets/images/saude/Fleury.png.webp';
import Hapvida from '../../assets/images/saude/Hapvida.png.webp';
import Notredame from '../../assets/images/saude/Notredame-Intermedica.png.webp';
import Odonto from '../../assets/images/saude/Odonto-Company.png.webp';

import Cofco from '../../assets/images/industria/Cofco-INTL.png.webp';
import Ferrero from '../../assets/images/industria/Ferrero.png.webp';
import Heinz from '../../assets/images/industria/Heinz.png.webp';
import Mdias from '../../assets/images/industria/Mdias-Branco.png.webp';
import Nitro from '../../assets/images/industria/Nitro.png.webp';

import BTG from '../../assets/images/private-equity/BTG-Pactual.png.webp';
import Carlyle from '../../assets/images/private-equity/Carlyle.png.webp';
import Patria from '../../assets/images/private-equity/Patria.png.webp';
import Private from '../../assets/images/private-equity/Private-Equality.png.webp';
import Vinci from '../../assets/images/private-equity/Vinci.png.webp';

import Aon from '../../assets/images/financeiro&seguro/aon.webp';
import Axa from '../../assets/images/financeiro&seguro/axa.webp';
import Neon from '../../assets/images/financeiro&seguro/neon.webp';
import Open from '../../assets/images/financeiro&seguro/Open-Insurance.png.webp';
import Porto from '../../assets/images/financeiro&seguro/Porto-Seguro.png.webp';



export default function Fornecedor() {
    const [ activeGroup, setActiveGroup ] = useState( 'varejo' ); 

    const groups = [
        { name: 'Varejo', className: 'varejo' },
        { name: 'Educação', className: 'educacao' },
        { name: 'Indústria', className: 'industria' },
        { name: 'Serviço', className: 'servico' },
        { name: 'Saúde', className: 'saude' },
        { name: 'Private Equity', className: 'private_equity' },
        { name: 'Financeiro & Seguros', className: 'financeiro_seguros' },
    ];

    const handleGroupClick = ( groupName ) => {
        setActiveGroup( groupName );
    };

    
    return(
        <div className="fornecedor">
            <section className="container__sponsors" >
                <div className="container__sponsors">
                
                    <nav className="group-nav">
                        <ul>
                            {groups.map((group) => (
                                <li
                                    key={group.className}
                                    onClick={() => handleGroupClick(group.className)}
                                    className={activeGroup === group.className ? 'active' : ''}
                                >
                                    {group.name}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className={`sponsors ${activeGroup === 'varejo' ? 'active' : ''}`}>
                        <nav className="cards">
                            <ul>
                                <li><img src={CA} alt="" /></li>
                                <li><img src={Boticario} alt="" /></li>
                                <li><img src={Vivara} alt="" /></li>
                                <li><img src={Alpar} alt="" /></li>
                                <li><img src={Quero} alt="" /></li>
                            </ul>
                        </nav>
                    </div>


                    <div className={`sponsors ${activeGroup === 'educacao' ? 'active' : ''}`}>
                        <nav className="cards">
                            <ul>
                                <li><img src={Itau} alt="" /></li>
                                <li><img src={Natura} alt="" /></li>
                                <li><img src={Cogna} alt="" /></li>
                                <li><img src={SonhoG} alt="" /></li>
                                <li><img src={Yduqs} alt="" /></li>
                            </ul>
                        </nav>
                    </div>


                    <div className={`sponsors ${activeGroup === 'industria' ? 'active' : ''}`}>
                        <nav className="cards">
                            <ul>
                                <li><img src={Ferrero} alt="" /></li>
                                <li><img src={Heinz} alt="" /></li>
                                <li><img src={Mdias} alt="" /></li>
                                <li><img src={Nitro} alt="" /></li>
                                <li><img src={Cofco} alt="" /></li>
                            </ul>
                        </nav>
                    </div>


                    <div className={`sponsors ${activeGroup === 'servico' ? 'active' : ''}`}>
                        <nav className="cards">
                            <ul>
                                <li><img src={Ipiranga} alt="" /></li>
                                <li><img src={Chama} alt="" /></li>
                                <li><img src={Movida} alt="" /></li>
                                <li><img src={Simpress} alt="" /></li>
                                <li><img src={Tcp} alt="" /></li>
                            </ul>
                        </nav>
                    </div>


                    <div className={`sponsors ${activeGroup === 'saude' ? 'active' : ''}`}>
                        <nav className="cards">
                            <ul>
                                <li><img src={Odonto} alt="" /></li>
                                <li><img src={Notredame} alt="" /></li>
                                <li><img src={Hapvida} alt="" /></li>
                                <li><img src={Alliar} alt="" /></li>
                                <li><img src={Fleury} alt="" /></li>
                            </ul>
                        </nav>
                    </div>



                    <div className={`sponsors ${activeGroup === 'private_equity' ? 'active' : ''}`}>
                        <nav className="cards">
                            <ul>
                                <li><img src={Private} alt="" /></li>
                                <li><img src={BTG} alt="" /></li>
                                <li><img src={Carlyle} alt="" /></li>
                                <li><img src={Patria} alt="" /></li>
                                <li><img src={Vinci} alt="" /></li>
                            </ul>
                        </nav>
                    </div>


                    <div className={`sponsors ${activeGroup === 'financeiro_seguros' ? 'active' : ''}`}>
                        <nav className="cards">
                            <ul>
                                <li><img src={Porto} alt="" /></li>
                                <li><img src={Neon} alt="" /></li>
                                <li><img src={Open} alt="" /></li>
                                <li><img src={Aon} alt="" /></li>
                                <li><img src={Axa} alt="" /></li>
                            </ul>
                        </nav>
                    </div>

                </div>

            </section>
        </div>
    );
}