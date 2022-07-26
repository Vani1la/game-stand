import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  :focus-visible {
    border: none;
    outline: none;
  }
  
  body {
    background-color: #151515;
    color: #fff;
  }
  `;
