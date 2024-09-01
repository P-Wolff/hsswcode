
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './components/pages/app/App';
import AboutUs from "./components/pages/aboutus";
import WorkUs from './components/pages/workus';
import Contato from "./components/pages/contato";
import NotFounding from "./components/pages/notfounding"



export default function Navegacao() {

    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <App /> } />
            <Route path='/contato' element={ <Contato /> } />
            <Route path='/workus' element={ <WorkUs /> } />
            <Route path='/aboutus' element={ <AboutUs /> } />

            <Route path='*' element={ <NotFounding /> } />
        </Routes>
    </BrowserRouter>
    );
}