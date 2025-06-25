import styleHeader from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className={styleHeader.containerHeader}>
            <nav>
                <Link to='/coletaSeletiva'>O que é coleta seletiva</Link>
                <Link to='/PorQueFazer'>Por que fazer?</Link>
                <Link to='/CoresDeColeta'>As cores de coleta seletiva</Link>
                <Link to='/separarlixo'>Como separar o lixo em casa?</Link>
                <Link to='/jogo'>Comece agora!</Link>
                <Link to='/login' className={styleHeader.perfilLogin}>Login</Link> 
                
            </nav>
            
        </header>  

        //tava tentando adicionar aquela parte de login do figma mas não consigo
        //tentei criar um className so pro Login e não deu
          
    )
}

export default Header;
