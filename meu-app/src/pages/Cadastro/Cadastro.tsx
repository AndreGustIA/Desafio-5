import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { imagens } from "../../assets/img";
import Botao from "../../components/Botao/Botao";
import Input from "../../components/Input/Input";
import { useState } from 'react';
import './Cadastro.css'

const Cadastro = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        senha: '',
        confirmarsenha: '',
    });

    const [erros, setErros] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validar = () => {
        const novosErros: { [key: string]: string } = {};

        if (!formData.nome.trim()) novosErros.nome = 'Nome é obrigatório';
        if (!formData.sobrenome.trim()) novosErros.sobrenome = 'Sobrenome é obrigatório';

        if (!formData.email.trim()) {
            novosErros.email = 'E-mail é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            novosErros.email = 'E-mail inválido';
        }

        if (!formData.senha) {
            novosErros.senha = 'Senha é obrigatória';
        } else if (formData.senha.length < 6) {
            novosErros.senha = 'A senha deve ter pelo menos 6 caracteres';
        }

        if (formData.confirmarsenha !== formData.senha) {
            novosErros.confirmarsenha = 'As senhas não coincidem';
        }

        return novosErros;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errosValidados = validar();
        if (Object.keys(errosValidados).length === 0) {
            console.log('Formulário válido:', formData);
             alert('Cadastro realizado com sucesso! Clique em OK e faça login.');
             setErros({});

             setTimeout(() => {
                navigate('/');
                }, 100);

        } else {
            setErros(errosValidados);
        }
    };

    return (
        <>
            <div className="container">
                <img src={imagens.mascote2} className="iconeMascote" alt="Mascote" />

                <form className="formulario" onSubmit={handleSubmit}>
                    <div>
                        <Input
                            name="nome"
                            id="nome"
                            label=""
                            placeholder="Nome"
                            type="text"
                            value={formData.nome}
                            onChange={handleChange}
                            className={`input ${erros.nome ? 'erro' : ''}`}
                        />
                         {erros.nome && <p className="mensagem-erro">{erros.nome}</p>}
                    </div>
                    <div>
                        <Input
                            name="sobrenome"
                            id="sobrenome"
                            label=""
                            placeholder="Sobrenome"
                            type="text"
                            value={formData.sobrenome}
                            onChange={handleChange}
                            className={`input ${erros.sobrenome ? 'erro' : ''}`}
                    />
                         {erros.sobrenome && <p className="mensagem-erro">{erros.sobrenome}</p>}
                        
                    </div>
                    <div>
                        <Input
                            name="email"
                            id="email"
                            label=""
                            placeholder="Digite seu e-mail aqui"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`input ${erros.email ? 'erro' : ''}`}
                    />
                         {erros.email && <p className="mensagem-erro">{erros.email}</p>}
                        
                    </div>
                    <div>
                        <Input
                            name="senha"
                            id="senha"
                            label=""
                            placeholder="Senha"
                            type='password'
                            value={formData.senha}
                            onChange={handleChange}
                            className={`input ${erros.senha ? 'erro' : ''}`}
                    />
                          {erros.senha && <p className="mensagem-erro">{erros.senha}</p>}
                        
                    </div>
                    <div>
                        <Input
                            name="confirmarsenha"
                            id="confirmarsenha"
                            label=""
                            placeholder="Confirme sua senha"
                            type='password'
                            value={formData.confirmarsenha}
                            onChange={handleChange}
                            className={`input ${erros.confirmarsenha ? 'erro' : ''}`}
                    />
                         {erros.confirmarsenha && <p className="mensagem-erro">{erros.confirmarsenha}</p>}
                        
                    </div>
                    
                    <Botao type="submit" className="botao">
                        {"Cadastre-se "}
                    </Botao>

                    <p className="conta">Já tem uma conta?
                        <Link to="/login">
                            <span className='span-entrar'> Entrar</span>
                        </Link>
                    </p>
                </form>
            </div>
        </>      
    )
}

export default Cadastro;