import { Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </div>
  )
}

export default App