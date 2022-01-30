import React from "react";
import {Link} from "react-router-dom";

export default function NavBar(props) {
  return (
    <>
      <nav>
        <Link to="/branch">Branch</Link>
        <Link to="/ratings">Ratings</Link>
        <Link to="/year">Year</Link>
        <Link to="/timeseries">Time Series</Link>
        <Link to="/frequencies">Frequencies</Link>
        <Link to="/attractions">Attractions</Link>
      </nav>
    </>
  );
}
