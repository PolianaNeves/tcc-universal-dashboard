import "./App.css";
import { Outlet } from "react-router";
import NavBar from "./components/NavBar";
import './App.css'

function App() {
  return (
    <>
      <div className='header'>
        <h1 className='app-title'>Dashboard - Universal Reviews Analysis</h1>
        <NavBar/>
      </div>
      <Outlet />
    </>
  );
}

export default App;
