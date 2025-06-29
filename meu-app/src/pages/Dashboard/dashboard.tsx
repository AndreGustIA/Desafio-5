import styles from './Dashboard.module.css'; 
import { imagens } from '../../assets/img';

const Dashboard = () => {
  return (
    <main className={styles.conteudoPrincipal}>
      <div className={styles.imagem}>
        <img src={imagens.dashimg} alt="Imagem" className={styles.imagem5} />
      </div>

      <h1 className={styles.titulo}>Tudo pronto!</h1>

      <p className={styles.descricao}>
        Você está a um clique de acessar seu painel principal e explorar todas as funcionalidades. Clique abaixo para começar!
      </p>

      <button
        className={styles.botao}
        onClick={() => {
          window.location.href = 'https://chatgpt.com/'; // substitua depois pelo link da dashboard real
        }}
      >
        <b>IR PARA O DASHBOARD</b>
      </button>
    </main>
  );
};

export default Dashboard;
