import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import './App.css'

function App() {
  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Login</Link>
        <Link to="/cadastro">Cadastro</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </div>
  )
}

export default App