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
import RecuperarSenha from './pages/RecuperarSenha/RecuperarSenha'
import './assets/styles/variables.css'


function App() {
  return (
      <>
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />} />
            
            <Route path='/inicio' element={<Inicio />}></Route>

            <Route element={<LayoutHeader/>}>
              <Route path='/coletaSeletiva' element={<ColetaSeletiva />}/>
              <Route path='/PorQueFazer' element={<PorQueFazer />}/>
              <Route path="/CoresDeColeta" element={<CoresDeColeta />} />
              <Route path="/separarlixo" element={<SepararLixo />} />
              <Route path="/Jogo" element={<Jogo />} />
              <Route path="/Login" element={<Login />} />
              <Route path='/RecuperarSenha' element={<RecuperarSenha />} />
              <Route path="/Cadastro" element={<Cadastro />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>  
      </>
      
  )
}

export default App