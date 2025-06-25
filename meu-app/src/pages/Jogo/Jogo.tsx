import React from 'react';
import './Jogo.css'; 
import { imagens } from '../../assets/img';

const Jogo = () => {
    const handleComecarClick = () => {
        console.log('Começar button clicked');   
      };

    return (
        <div className="page-container">
          <header className="cabecalho">
            <nav className="navegacao">
              <ul className="menu">
                <li><a href="#">Inicio</a></li>
                <li><a href="instrucoes.html">Instruções</a></li>
                <li><a href="conhecapp.html">Conheça nosso app</a></li>
                <li><a href="jogo.html">Jogo</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </nav>
          </header>
    
          <main className="conteudo-principal">
            <div className="imagem">
            <img src={imagens.imgJogo} alt="Imagem" className="imagem-jogo" />
              
            </div>
            
            <h1 className="titulo">COMEÇE AGORA!</h1>
            <p className="descricao">
              Clique em <b>"Começar"</b> e<br />
              embarque nessa jornada divertida<br />
              de aprendizado sobre o descarte<br />
              correto de resíduos.
            </p>
            <button className="botao" onClick={handleComecarClick}>
              <b>COMEÇAR</b>
            </button>
          </main>
        </div>
      );
    };
    
    export default Jogo;