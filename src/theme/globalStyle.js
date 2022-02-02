import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  
  .header {
    background-color: #d9d9d9;
    padding-top: 30px;
    padding-bottom: 25px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }
  
  .app-title {
    margin-bottom: 15px;
  }
  
  .filter-btn {
    background-color: #d9d9d9;
    border: none;
    padding: 5px;
    border-radius: 5px;
    color: black;
    margin-bottom: 25px;
  }
  
  
  .filter-btn:hover{
    background-color: #a1a1a1;
  }
  
  .section-filter{
    display: flex;
    flex-flow: row wrap;
    gap: 15px;
    justify-content: center;
  }

  .page-title{
    margin-bottom: 15px;
    text-align: center;
  }
`;

export default GlobalStyle;
