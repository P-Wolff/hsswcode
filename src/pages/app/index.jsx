import './index.scss';

import Cabecalho from '../../components/cabecalho';
import Footer from '../../components/footer';

export default function App() {


  return (
    <div className="pagina-app pagina">
      <Cabecalho />
      
      <section className="headline">
        <h1>Responsive Navigation</h1>
        <p>Using CSS grid and flexbox to easily build navbars!</p>
      </section>
      
        <section id="secao_container">

            <div>
                <span className="titulo">
                    HSSW Code
                </span>
                <span className="texto">
                    A tecnologia e o mundo estão a evoluir, e você?
                </span>
            </div>
        </section>

      <Footer/>
      
    </div>
  );
}
