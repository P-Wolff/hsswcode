
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from "./pages/app/App";
import AboutUs from "./pages/aboutus";
import Contato from "./pages/contato";
import NotFounding from "./pages/notfounding"



export default function Navegacao() {

    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <App /> } />
            <Route path='/contato' element={ <Contato /> } />
            <Route path='/aboutus' element={ <AboutUs /> } />

            <Route path='*' element={ <NotFounding /> } />
        </Routes>
    </BrowserRouter>
    )
}