
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/app";
import SobreNos from "./pages/sobre";
import Contato from "./pages/contato";
import NaoEncontrado from "./pages/naoecontrado"



export default function Navegacao() {

    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/contato' element={ <Contato /> } />
            <Route path='/sobre' element={ <SobreNos /> } />

            <Route path='*' element={ <NaoEncontrado /> } />
        </Routes>
    </BrowserRouter>
    );
}