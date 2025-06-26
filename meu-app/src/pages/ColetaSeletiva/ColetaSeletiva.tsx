import './ColetaSeletiva.css'; 
import { imagens } from '../../assets/img';

const ColetaSeletiva = () => {
    return (
        <div className="container">
          <div className="illustration">
            <img src={imagens.imagem1} alt="Imagem" className="imagem1" />
          </div>
    
          <h2>O QUE É COLETA <br /> SELETIVA?</h2>
    
          <p>
            A coleta seletiva é o processo de separação e recolhimento dos resíduos
            sólidos recicláveis. Ela facilita o reaproveitamento de materiais que
            podem voltar ao ciclo produtivo, ajudando o meio ambiente e a economia
            local.
          </p>
    
        </div>
      );
    };
    
    export default ColetaSeletiva;