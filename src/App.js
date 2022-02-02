import "./App.css";
import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import GlobalStyle from "./theme/globalStyle";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="header">
        <h1 className="app-title">Análise de Avaliações - Universal Studios</h1>
        <h4 className='app-description'>Selecione os filtros para análise:</h4>
        <NavBar />
      </div>
      <Outlet />
    </>
  );
}

export default App;
