import { login } from "../../services/auth";
import { Link} from "react-router-dom";
import Botao from "../../components/Botao/Botao";
import Input from "../../components/Input/Input";
import { imagens } from "../../assets/img";
import { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !senha) {
      setError("Preencha todos os campos.");
      return;
    }

    try {
      const resultado = await login({ email, senha });
      console.log("Usuário logado:", resultado);

      setError("");
      alert("Login realizado com sucesso!");
      window.open("https://kaio-andrade-da-silva.itch.io/recicla-maranhao", "_blank");

    } catch (error) {
      setError("Ops! Seu e-mail ou senha estão incorretos.");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <img src={imagens.mascote} alt="Mascote reciclável" className={styles.mascote} />

        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <Input
            name="usuario"
            id="usuario"
            label=""
            placeholder="Digite seu e-mail aqui"
            type="text"
            className={`${styles.inputEmail} ${error ? styles.inputError : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            name="senha"
            id="senha"
            label=""
            placeholder="Senha"
            type="password"
            className={`${styles.inputSenha} ${error ? styles.inputError : ""}`}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          {error && <p className={styles.errorMessage}>{error}</p>}

          <div className={styles.esqueciSenha}>
            <Link to="/recuperarSenha">Esqueceu a senha?</Link>
          </div>

          <Botao type="submit" className={styles.loginButton}>
            Conecte-se
          </Botao>
        </form>

        <div className={styles.divider}>ou</div>
        <Link to="/cadastro" className={styles.registrarLink}>
          Cadastre-se agora
        </Link>
        <div className={styles.divider}>ou</div>

        <div className={styles.socialIcons}>
          <img src={imagens.iconeGoogle} alt="Google" />
          <img src={imagens.iconeFacebook} alt="Facebook" />
          <img src={imagens.iconeInstagram} alt="Instagram" />
        </div>
      </div>
    </div>
  );
};

export default Login;
