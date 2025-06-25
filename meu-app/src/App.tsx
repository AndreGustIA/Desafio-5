import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Header from './components/Header/Header'
import Instrucoes from './pages/Instrucoes/Intrucoes'
import NossoApp  from './pages/NossoApp/NossoApp'
import Jogo  from './pages/Jogo/Jogo'
import Cadastro from './pages/Cadastro/Cadastro'

function App() {
  return (
      <>
        <Header/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/instrucoes" element={<Instrucoes />} />
            <Route path="/app" element={<NossoApp />} />
            <Route path="/jogo" element={<Jogo />} />
            
          </Routes>  
      </>
      
  )
}

export default App