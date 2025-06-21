import styleHeader from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className={styleHeader.containerHeader}>
            <nav>
                <Link to='/'>Início</Link>
                <Link to='/instrucoes'>Instruções</Link>
                <Link to='/app'>Conheça o nosso app</Link>
                <Link to='/jogo'>Jogo</Link>
            </nav>
        </header>  
          
    )
}

export default Header;
