import { Link } from 'react-router-dom';
import Botao from "../../components/Botao/Botao";
import Input from "../../components/Input/Input";
import { imagens } from '../../assets/img';
import './Login.css';
import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !senha) {
        setError("Preencha todos os campos.");
        return;
        }

        if (email !== "usuario@email.com" || senha !== "123456") {
        setError("Ops! Seu e-mail ou senha estão incorretos."); //esse email e senha são so pra testar se o erro ta aparecendo
        return;
        }

        setError(""); 
        alert("Login realizado com sucesso!");
        
    };
    return (

        <div className="login-container">
            <div className="login-box">
                <img src={imagens.mascote} alt="Mascote reciclável" className="mascote" />

                <form className="login-form" onSubmit={handleSubmit}>
                    <Input
                        name="usuario"
                        id="usuario"
                        label=""
                        placeholder="Digite seu e-mail aqui"
                        type="text"
                        className= {`input-email ${error ? "input-error" : ""}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
    
                        
                    />

                    <Input
                        name="senha"
                        id="senha"
                        label=""
                        placeholder="Senha"
                        type="password"
                        className={`input-senha ${error ? "input-error" : ""}`}
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                      
                    />

                     {error && <p className="error-message">{error}</p>}

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
