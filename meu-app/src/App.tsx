import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import CoresDeColeta from './pages/CoresDeColeta/CoresDeColeta'
import PorQueFazer  from './pages/PorQueFazer/PorQueFazer'
import Jogo  from './pages/Jogo/Jogo'
import Cadastro from './pages/Cadastro/Cadastro'
import Inicio from './pages/Inicio/Inicio'
import LayoutHeader from './components/Header/LayoutHeader'
import ColetaSeletiva from './pages/ColetaSeletiva/ColetaSeletiva';
import SepararLixo from './pages/Lixo/Lixo';
import Dashboard from './pages/Dashboard/dashboard';


function App() {
  return (
      <>
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />} />
            
            <Route path='/inicio' element={<Inicio />}></Route>

            <Route element={<LayoutHeader/>}>
              <Route path='/coletaSeletiva' element={<ColetaSeletiva />}/>
              <Route path='/PorQueFazer' element={<PorQueFazer />}/>
              <Route path="//CoresDeColeta" element={<CoresDeColeta />} />
              <Route path="/separarlixo" element={<SepararLixo />} />
              <Route path="/jogo" element={<Jogo />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>  
      </>
      
  )
}

export default App