import styleHeader from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className={styleHeader.containerHeader}>
            <nav>
                <NavLink to='/coletaSeletiva' className={({ isActive }) => isActive ? styleHeader.active : undefined}>
                    O que é coleta seletiva
                </NavLink>
                <NavLink to='/PorQueFazer' className={({ isActive }) => isActive ? styleHeader.active : undefined}>
                    Por que fazer?
                </NavLink>
                <NavLink to='/CoresDeColeta' className={({ isActive }) => isActive ? styleHeader.active : undefined}>
                    As cores de coleta seletiva
                </NavLink>
                <NavLink to='/separarlixo' className={({ isActive }) => isActive ? styleHeader.active : undefined}>
                    Como separar o lixo em casa?
                </NavLink>
                <NavLink to='/jogo' className={({ isActive }) => isActive ? styleHeader.active : undefined}>
                    Nosso jogo
                </NavLink>
                <NavLink to='/login' className={({ isActive }) => isActive ? styleHeader.active : undefined}>
                    Login
                </NavLink>
                <NavLink to='/dashboard' className={({ isActive }) => isActive ? styleHeader.active : undefined}>
                    Dashboard
                </NavLink>
                
            </nav>
            
        </header>  

          
    )
}

export default Header;
