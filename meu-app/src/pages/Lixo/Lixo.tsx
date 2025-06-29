import style from './Lixo.module.css'; 
import { imagens } from '../../assets/img';

const SepararLixo = () => {
    return (
        <main className={style.container}>
          <div className={style.imageWrapper}>
            <img src={imagens.imagem4} alt="Imagem" className={style.imagem4} />
          </div>
    
          <h2 className={style.title}>COMO SEPARAR O LIXO EM CASA?</h2>
    
          <ul className={style.lista}>
            <li>Separe um espaço para cada tipo de resíduo.</li>
            <li>Verifique os dias de coleta seletiva na sua<br/> cidade.</li>
            <li>Procure os Ecopontos mais próximos (veja no nosso Mapa de Descarte).</li>
          </ul>
        </main>
      );
    };

export default SepararLixo;