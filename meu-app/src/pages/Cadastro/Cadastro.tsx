import Botao from "../../components/Botao/Botao";
import Input from "../../components/Input/Input";


const Cadastro = () => {
    return (
        <form action="">
            <div>
                <Input
                    name="nome"
                    id="nome"
                    label="Nome"
                    placeholder="Informe seu nome"
                    type="text"
                />
            </div>
            <div>
                <Input
                    name="email"
                    id="email"
                    label="E-mail"
                    placeholder="Informe seu e-mail"
                    type="email"
                />
            </div>
            <div>
                <Input
                    name="nomeusuario"
                    id="nomeusuario"
                    label="Nome Usuário"
                    placeholder="exe: user123"
                    type="text"
                />
            </div>
            <div>
                <Input
                    name="senha"
                    id="senha"
                    label="Senha"
                    placeholder="Crie uma senha"
                />
            </div>
            <div>
                <Input
                    name="confirmarsenha"
                    id="confirmarsenha"
                    label="Confirmar"
                    placeholder="Confirme sua senha"
                />
            </div>

            <Botao type="submit">
                {"Cadastrar"}
            </Botao>
        </form>
    )
}

export default Cadastro;