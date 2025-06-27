import Input from "../../components/Input/Input";
import { useState } from "react";
import styleRecuperar from './RecuperarSenha.module.css'
import { imagens } from '../../assets/img';
import Botao from "../../components/Botao/Botao";

const RecuperarSenha = () => {
    const [email, setEmail] = useState('');
    const [erroemail, setErroEmail] = useState('');

    const validarEmail = (email: string) => {
        const validacao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return validacao.test(email); 
    };

    const submit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        if (!email) {
            setErroEmail('Por favor, informe o e-mail.')
        }
        else if (!validarEmail(email)) {
            setErroEmail('Informe um e-mail válido.')
        }
        else {
            setErroEmail('');
            alert('E-mail enviado com sucesso!');
        }
    }


    return (
        <> 
            <div className={styleRecuperar.container}>
                <form className={styleRecuperar.formulario} onSubmit={submit}>
                    <h3> 
                        <span className={styleRecuperar.containerImagem}>
                            Esqueceu a senha?
                            <img src={imagens.esqueceuSenha} alt="Imagem de esqueceu a senha" />
                        </span>    
                    </h3> 
                    
                    <div className={styleRecuperar.containerP}>
                        <p className={styleRecuperar.texto}>Não se preocupe, acontece com todo mundo!</p>

                        <p className={styleRecuperar.texto}>Digite o e-mail cadastrado e enviaremos um link para redefinir sua senha.</p>
                    </div>

                    <Input
                        className={styleRecuperar.inputEmail}
                        id="email"
                        name="email"
                        label=""
                        placeholder="Digite seu e-mail aqui"
                        type="email"
                        value={email}
                        onChange={(email) => setEmail(email.target.value)}
                        />
                        {erroemail && (
                            <p className={styleRecuperar.msgError}>{erroemail}</p>
                        )}


                    <Botao
                        className={styleRecuperar.botaoEnviar}
                    >
                        {'Enviar'}
                    </Botao>
                </form>
                <img src={imagens.mascoteDeEsqueceuSenha} alt="Imagem do mascote de esqueceu senha" />
            </div>
        </>
    )
}

export default RecuperarSenha;