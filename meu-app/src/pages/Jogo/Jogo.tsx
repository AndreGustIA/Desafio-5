import style from './Jogo.module.css'; 
import { imagens } from '../../assets/img';
import { useNavigate } from 'react-router-dom'

const Jogo = () => {
     const navegarPagina = useNavigate();

    return (
        
          <main className={style.conteudoPrincipal}>
            <div className={style.imagem}>
            <img src={imagens.imagem5} alt="Imagem" className={style.imagem5} />
              
            </div>
            
            <h1 className={style.titulo}>COMECE AGORA!</h1>
            <p className={style.descricao}>
              Clique em <span className={style.span}>"Começar"</span> e
              embarque<br/> nessa jornada divertida
              de aprendizado sobre o descarte
              correto de resíduos.
            </p>
            <button className={style.botao} onClick={() => navegarPagina('/Login')}>
              <b>COMEÇAR</b>
            </button>
          </main>

      );
    };
    
    export default Jogo;