import styles from './dashboard.module.css'; 
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
          window.location.href = 'https://app.powerbi.com/view?r=eyJrIjoiNWE4YzY2NTgtOTA2ZS00MjE3LTk1NjktMGIxNGE0YjIyZDQyIiwidCI6IjlkYzI4NTJhLTU0MDItNDcxZC1hMDA5LTk3ZTIyNjYwNzBkOSJ9'

        }}
      >
        <b>IR PARA O DASHBOARD</b>
      </button>
    </main>
  );
};

export default Dashboard;
