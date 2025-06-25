import React from 'react';
import './NossoApp.css'; 
import { imagens } from '../../assets/img';
const NossoApp = () => {
    return (
        <>
          <header className="cabecalho">
            <nav className="navegacao">
              <ul className="menu">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Instruções</a></li>
                <li><a href="#">Conheça nosso app</a></li>
                <li><a href="#">Jogo</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </nav>
          </header>
    
          <main className="conteudo-principal">
            <div className="imagem">
              <img src={imagens.imgnossoApp} alt="" className="imagem-nossoapp"/>
            </div>
            
            <h1 className="titulo">INSTRUÇÕES</h1>
            <p className="descricao">
              Aprenda brincando! Neste jogo<br />
              educativo, você vai enfrentar<br />
              desafios que testam seus <br />
              conhecimentos sobre o descarte <br />
              correto do lixo.
            </p>
          </main>
        </>
     );
};
    
    export default NossoApp;