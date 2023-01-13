import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Ciencia from './Pages/Ciencia';
import Entretenimento from './Pages/Entretenimento';
import Esportes from './Pages/Esportes';
import Home from './Pages/Home';
import Negocios from './Pages/Negocios';
import Tecnologia from './Pages/Tecnologia';
import Saude from './Pages/Saude';

function Rotas(){
    return (
    <BrowserRouter>
        <Header />
        
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/ciencia" element={ <Ciencia /> }/>
            <Route path="/tecnologia" element={ <Tecnologia /> }/>
            <Route path="/esportes" element={ <Esportes /> }/>
            <Route path="/negocios" element={ <Negocios /> }/>
            <Route path="/entretenimento" element={ <Entretenimento /> }/>
            <Route path="/saude" element={ <Saude /> }/>

            
        
        </Routes>
    </BrowserRouter>
    )
}

export default Rotas;