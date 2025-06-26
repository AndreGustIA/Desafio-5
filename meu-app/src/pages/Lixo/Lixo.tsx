import './Lixo.css'; 
import { imagens } from '../../assets/img';

const SepararLixo = () => {
    return (
        <main className="container">
          <div className="image-wrapper">
            <img src={imagens.imagem4} alt="Imagem" className="imagem4" />
          </div>
    
          <h2 className="title">COMO SEPARAR O LIXO EM CASA?</h2>
    
          <ul className="lista">
            <li>Separe um espaço para cada tipo de resíduo.</li>
            <li>Verifique os dias de coleta seletiva na sua cidade.</li>
            <li>Procure os Ecopontos mais próximos (veja no nosso Mapa de Descarte).</li>
          </ul>
        </main>
      );
    };

export default SepararLixo;