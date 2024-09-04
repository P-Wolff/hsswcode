import './index.scss'
import Logo from '../assets/land-page/logo.svg';


export default function Footer () {

    return (
       <div className='footer'>
            <div className="componentes">
                <img src={Logo} alt='HSSW Code' title='HSSW Code'/>

                <div className="informacao">
                    <p>Pessoas e empresas que se realizam nunca mais são as mesmas.</p>

                    <h2>HSSW Code. O que persiste é o aprendizado. </h2>
                </div>

                <div className="explore"> 
                   <h3> Explore </h3>
                   <h3>Como Fazemos </h3>
                   <h3>Jeito HSSW Code </h3>
                   <h3>Trabalhe conosco </h3>
                   <h3>Contato </h3>
                </div>

                <div className="ultimo"> 
                    <h3> Politica de Privacidade </h3>
                    <h3> FAQ </h3>
                </div>
 
            </div>
    </div>

        
    )
}