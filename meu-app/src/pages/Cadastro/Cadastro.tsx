import { cadastrar } from '../../services/auth';
import { Link, useNavigate } from 'react-router-dom';
import { imagens } from "../../assets/img";
import Botao from "../../components/Botao/Botao";
import Input from "../../components/Input/Input";
import { useState } from 'react';
import styles from './Cadastro.module.css';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errosValidados = validar();

    if (Object.keys(errosValidados).length === 0) {
      const nomeCompleto = `${formData.nome} ${formData.sobrenome}`;

      try {
        await cadastrar({
          nome: nomeCompleto,
          email: formData.email,
          senha: formData.senha,
        });

        alert("Cadastro realizado com sucesso! Clique em OK e faça login.");
        setErros({});
        setTimeout(() => {
          navigate('/login');
        }, 100);

      } catch (error) {
        setErros({ email: "Erro ao cadastrar. Tente novamente." });
      }

    } else {
      setErros(errosValidados);
    }
  };

  return (
    <div className={styles.container}>
      <img src={imagens.mascote2} className={styles.iconeMascote} alt="Mascote" />

      <form className={styles.formulario} onSubmit={handleSubmit}>
        <div>
          <Input
            name="nome"
            id="nome"
            label=""
            placeholder="Nome"
            type="text"
            value={formData.nome}
            onChange={handleChange}
            className={`${styles.input} ${erros.nome ? styles.erro : ''}`}
          />
          {erros.nome && <p className={styles.mensagemErro}>{erros.nome}</p>}
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
            className={`${styles.input} ${erros.sobrenome ? styles.erro : ''}`}
          />
          {erros.sobrenome && <p className={styles.mensagemErro}>{erros.sobrenome}</p>}
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
            className={`${styles.input} ${erros.email ? styles.erro : ''}`}
          />
          {erros.email && <p className={styles.mensagemErro}>{erros.email}</p>}
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
            className={`${styles.input} ${erros.senha ? styles.erro : ''}`}
          />
          {erros.senha && <p className={styles.mensagemErro}>{erros.senha}</p>}
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
            className={`${styles.input} ${erros.confirmarsenha ? styles.erro : ''}`}
          />
          {erros.confirmarsenha && <p className={styles.mensagemErro}>{erros.confirmarsenha}</p>}
        </div>

        <Botao type="submit" className={styles.botao}>
          Cadastre-se
        </Botao>

        <p className={styles.conta}>Já tem uma conta?
          <Link to="/login">
            <span className={styles.spanEntrar}> Entrar</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Cadastro;
