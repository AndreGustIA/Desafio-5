
import { imagens } from '../../assets/img';     

const Inicio = () => {
    return (
        <>
         
          <main className="conteudo-principal">
            <div className="imagem-logo">
            <img src={imagens.logoRecicla} alt="Imagem" className="imagem-inst" />
            </div>
            
           
          </main>
        </>
      );
    };
    
    export default Inicio;