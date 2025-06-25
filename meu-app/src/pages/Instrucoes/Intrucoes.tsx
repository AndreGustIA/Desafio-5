import './Instrucoes.css'; 
import { imagens } from '../../assets/img';     

const Instrucoes = () => {
    return (
        <>
         
          <main className="conteudo-principal">
            <div className="imagem">
            <img src={imagens.imgInst} alt="Imagem" className="imagem-inst" />
            </div>
            
            <h1 className="titulo">INSTRUÇÕES</h1>
            <p className="descricao">
              Aprenda brincando! Neste jogo<br />
              educativo, você vai enfrentar<br />
              desafios que testam seus <br />
              conhecimentos sobre o descarte <br />
              correto do lixo.
            </p>
          </main>
        </>
      );
    };
    
    export default Instrucoes;