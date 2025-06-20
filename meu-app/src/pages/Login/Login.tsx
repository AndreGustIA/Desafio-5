import { Link } from 'react-router-dom';
import Botao from "../../components/Botao/Botao";
import Input from "../../components/Input/Input";
import './Login.css';

const Login = () => {
    return (

        <div className="login-container">
            <img src="/imagem-topo.png" className="top-image" />

            <div className="login-box">
                <img src="/mascote.png" alt="Mascote reciclável" className="mascote" />

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
                    <img src="/google-icon.png" alt="Google" />
                    <img src="/facebook-icon.png" alt="Facebook" />
                    <img src="/instagram-icon.png" alt="Instagram" />
                </div>
            </div>
        </div>
        
    );
};

export default Login;
