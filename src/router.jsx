
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './components/pages/app/App';
import SobreNos from "./components/pages/sobre";
import TrabalheComNos from './components/pages/trabalho';
import Contato from "./components/pages/contato";
import NaoEncontrado from "./components/pages/naoecontrado"



export default function Navegacao() {

    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <App /> } />
            <Route path='/contato' element={ <Contato /> } />
            <Route path='/trabalho' element={ <TrabalheComNos /> } />
            <Route path='/sobre' element={ <SobreNos /> } />

            <Route path='*' element={ <NaoEncontrado /> } />
        </Routes>
    </BrowserRouter>
    );
}