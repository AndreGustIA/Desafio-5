import Botao from "../../components/Botao/Botao";
import Input from "../../components/Input/Input";

// Só um exemplo :) Esperando o design 
const Login = () => {
    return (
        <form action="">
            <div>
                <Input
                    name="usuario"
                    id="usuario"
                    label="Usuário"
                    placeholder="Informe seu usuário"
                    type="text"
                />
            </div>
            <div>
                <Input
                    name="senha"
                    id="senha"
                    label="Senha"
                    placeholder="Informe sua senha"
                    type="password"
                />
            </div>
            <Botao type="submit">
                {"Entrar"}
            </Botao>
        </form>
    )
}

export default Login;
