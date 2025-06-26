import './Jogo.css'; 
import { imagens } from '../../assets/img';
import { useNavigate } from 'react-router-dom'

const Jogo = () => {
     const navegarPagina = useNavigate();

    return (
        
          <main className="conteudo-principal">
            <div className="imagem">
            <img src={imagens.imagem5} alt="Imagem" className="imagem5" />
              
            </div>
            
            <h1 className="titulo">COMECE AGORA!</h1>
            <p className="descricao">
              Clique em <b>"Começar"</b> e<br />
              embarque nessa jornada divertida<br />
              de aprendizado sobre o descarte<br />
              correto de resíduos.
            </p>
            <button className="botao" onClick={() => navegarPagina('/Login')}>
              <b>COMEÇAR</b>
            </button>
          </main>

      );
    };
    
    export default Jogo;