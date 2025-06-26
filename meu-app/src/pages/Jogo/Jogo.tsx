import './Jogo.css'; 
import { imagens } from '../../assets/img';

const Jogo = () => {
    const handleComecarClick = () => {
        console.log('Começar button clicked');   
      };

    return (
        
          <main className="conteudo-principal">
            <div className="imagem">
            <img src={imagens.imagem6} alt="Imagem" className="imagem6" />
              
            </div>
            
            <h1 className="titulo">COMEÇE AGORA!</h1>
            <p className="descricao">
              Clique em <b>"Começar"</b> e<br />
              embarque nessa jornada divertida<br />
              de aprendizado sobre o descarte<br />
              correto de resíduos.
            </p>
            <button className="botao" onClick={handleComecarClick}>
              <b>COMEÇAR</b>
            </button>
          </main>

      );
    };
    
    export default Jogo;