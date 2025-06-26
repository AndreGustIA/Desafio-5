import './CoresDeColeta.css';     
import { imagens } from '../../assets/img';

const CoresDeColeta = () => {
  return (
    <main className="container">
      <h1 className="title">AS CORES DA COLETA SELETIVA:</h1>

      <div className="image-wrapper">
            <img src={imagens.imagem3} alt="Imagem" className="imagem3" />
      </div>

      <p className="descricao">
        Cada cor representa um tipo de resíduo,<br /> facilitando a separação e a reciclagem do lixo. <br />Ajuda o meio ambiente e organiza o descarte <br />correto!
      </p>
    </main>
  );
};
    export default CoresDeColeta ;