import styles from './CoresDeColeta.module.css';     
import { imagens } from '../../assets/img';

const CoresDeColeta = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>AS CORES DA COLETA SELETIVA:</h1>

      <div className={styles.imageWrapper}>
        <img src={imagens.imagem3} alt="Imagem" className={styles.imagem3} />
      </div>

      <p className={styles.descricao}>
        Cada <span className={styles.spanCor}>cor</span> representa um tipo de resíduo, <br />
        facilitando a separação e a reciclagem do lixo.
        Ajuda o meio ambiente e organiza o descarte correto!
      </p>
    </main>
  );
};

export default CoresDeColeta;
