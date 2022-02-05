import React from "react";
import {Link} from "react-router-dom";
import './NavBar.css'

export default function NavBar(props) {
  return (
    <>
      <nav className='navbar'>
        <Link to="/branch">Filial</Link>
        <Link to="/ratings">Pontuação</Link>
        <Link to="/year">Ano</Link>
        <Link to="/attractions">Atração</Link>
        <Link to="/timeseries">Análise Temporal</Link>
        <Link to="/frequencies">Frequência</Link>
        <Link to="/wordcloud">Nuvem de palavras</Link>
      </nav>
    </>
  );
}
