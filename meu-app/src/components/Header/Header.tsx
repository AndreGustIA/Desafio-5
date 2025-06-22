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
                <Link to='/perfil' className={styleHeader.perfilLogin}>Login</Link> 
                
            </nav>
            
        </header>  

        //tava tentando adicionar aquela parte de login do figma mas não consigo
        //tentei criar um className so pro Login e não deu
          
    )
}

export default Header;
