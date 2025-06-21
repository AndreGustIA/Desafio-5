import { Link } from 'react-router-dom';
import { imagens } from "../../assets/img";
import Botao from "../../components/Botao/Botao";
import Input from "../../components/Input/Input";

import './Cadastro.css'

const Cadastro = () => {
    return (
        <>
            <div className="container">
                <img src={imagens.mascote} className="iconeMascote" alt="Mascote" />

                <form className="formulario" action="">
                    <div>
                        <Input
                            name="nome"
                            id="nome"
                            label=""
                            placeholder="Nome"
                            type="text"
                            className="input"
                        />
                    </div>
                    <div>
                        <Input
                            name="sobrenome"
                            id="sobrenome"
                            label=""
                            placeholder="Sobrenome"
                            type="text"
                            className="input"
                        />
                    </div>
                    <div>
                        <Input
                            name="nomeusuario"
                            id="nomeusuario"
                            label=""
                            placeholder="Digite seu e-mail aqui"
                            type="email"
                            className="input"
                        />
                    </div>
                    <div>
                        <Input
                            name="senha"
                            id="senha"
                            label=""
                            placeholder="Senha"
                            className="input"
                        />
                    </div>
                    <div>
                        <Input
                            name="confirmarsenha"
                            id="confirmarsenha"
                            label=""
                            placeholder="Confirme sua senha"
                            className="input"
                        />
                    </div>
                    
                    <Botao type="submit" className="botao">
                        {"Cadastra-se "}
                    </Botao>

                    <p className="conta">Já tem uma conta?
                        <Link to="/">
                            <span className='span-entrar'> Entrar</span>
                        </Link>
                    </p>
                </form>
            </div>
        </>      
    )
}

export default Cadastro;