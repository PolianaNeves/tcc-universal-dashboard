import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import BranchPage from './pages/BranchPage';
import './index.css';
import RatingsPage from './pages/RatingsPage';
import YearPage from './pages/YearPage';
import FrequenciesPage from './pages/FrequenciesPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="branch" element={<BranchPage/>} index />
        <Route path="ratings" element={<RatingsPage/>}/>
        <Route path="year" element={<YearPage/>}/>
        <Route path="frequencies" element={<FrequenciesPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
