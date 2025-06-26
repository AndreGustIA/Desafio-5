import './dashboard.css'; 
import { imagens } from '../../assets/img';

const Dashboard = () => {

    return (
        
          <main className="conteudo-principal">
            <div className="imagem">
            <img src={imagens.dashimg} alt="Imagem" className="imagem5" />
              
            </div>
            
            <h1 className="titulo">Tudo pronto!</h1>
            <p className="descricao">
               Você está a um clique de acessar seu painel principal e explorar todas as funcionalidades. Clique abaixo para começar!
            </p>
           <button className="botao" onClick={() => {
              window.location.href = 'https://chatgpt.com/'; //só por enquanto que não tem link da dash
            }}
>
              <b>IR PARA O DASHBOARD</b>
            </button>
          </main>

      );
    };
    
    export default Dashboard;