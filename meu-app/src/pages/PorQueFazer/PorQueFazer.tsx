import './PorQueFazer.css'; 
import { imagens } from '../../assets/img';

const PorQueFazer = () => {
  return (
    <div className="container">
      <div className="illustration">
        <img src={imagens.imagem2} alt="Imagem" className="imagem2" />
      </div>

      <h2>POR QUE FAZER?</h2>

        <div className="beneficios">
          <ul>
            <li>Reduz o volume de lixo nos aterros.</li>
            <li>Gera emprego e renda para cooperativas de <br /> reciclagem.</li>
          </ul>
          <ul>
            <li>Diminui o consumo de recursos naturais.</li>
            <li>Ajuda na preservação ambiental.</li>
          </ul>
        </div>

    </div>
  );
};

export default PorQueFazer;