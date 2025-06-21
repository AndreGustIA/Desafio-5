import { Link } from 'react-router-dom';
import Botao from "../../components/Botao/Botao";
import Input from "../../components/Input/Input";
import { imagens } from '../../assets/img';
import './Login.css';

const Login = () => {
    return (

        <div className="login-container">
            <div className="login-box">
                <img src={imagens.mascote} alt="Mascote reciclável" className="mascote" />

                <form className="login-form">
                    <Input
                        name="usuario"
                        id="usuario"
                        label=""
                        placeholder="Digite seu e-mail aqui"
                        type="text"
                        className="input-email"
    
                        
                    />

                    <Input
                        name="senha"
                        id="senha"
                        label=""
                        placeholder="Senha"
                        type="password"
                        className="input-senha"
                      
                    />

                    <div className="esqueci-senha">
                        <a href="#">Esqueceu a senha?</a>
                    </div>

                    <Botao type="submit" className="login-button">
                        Conecte-se
                    </Botao>
                </form>

                <div className="divider">ou</div>
                <Link to="/cadastro" className="registrar-link">Cadastre-se agora</Link>
                <div className="divider">ou</div>

                <div className="social-icons">
                    <img src={imagens.iconeGoogle} alt="Google" />
                    <img src={imagens.iconeFacebook} alt="Facebook" />
                    <img src={imagens.iconeInstagram} alt="Instagram" />
                </div>
            </div>
        </div>
        
    );
};

export default Login;
