import React from "react";
import {Link} from "react-router-dom";
import './NavBar.css'

export default function NavBar(props) {
  return (
    <>
      <nav className='navbar'>
        <Link to="/branch">Branch</Link>
        <Link to="/ratings">Ratings</Link>
        <Link to="/year">Year</Link>
        <Link to="/timeseries">Time Series</Link>
        <Link to="/frequencies">Frequencies</Link>
        <Link to="/attractions">Attractions</Link>
        <Link to="/wordcloud">Nuvem de palavras</Link>
      </nav>
    </>
  );
}
