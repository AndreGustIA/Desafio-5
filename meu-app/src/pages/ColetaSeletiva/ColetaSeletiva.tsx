import { imagens } from '../../assets/img';
import styles from './ColetaSeletiva.module.css';

const ColetaSeletiva = () => {
  return (
    <div className={styles.container}>
      <div className={styles.illustration}>
        <img src={imagens.imagem1} alt="Imagem" className={styles.imagem1} />
      </div>

      <h2 className={styles.titulo}>
        O QUE É COLETA <br /> SELETIVA?
      </h2>

      <p className={styles.texto}>
        A coleta seletiva é o processo de separação e recolhimento dos resíduos
        sólidos recicláveis. Ela facilita o reaproveitamento de materiais que
        podem voltar ao ciclo produtivo, ajudando o meio ambiente e a economia
        local.
      </p>
    </div>
  );
};

export default ColetaSeletiva;
