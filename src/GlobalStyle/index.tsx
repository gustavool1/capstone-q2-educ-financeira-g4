import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.minimal.css';
export const GlobalStyle = createGlobalStyle`
.Toastify__toast--success {
   border: 1px solid #1de71d ;
   background: #b1e2b1 ;

   color: black ;
 
}

.Toastify__toast--error {
    border: 1px solid #EB5757;
    background: #FAE1E2 ;
   color: black ;

}

.Toastify__toast--warning {
    border: 1px solid #f7d706;
    background: #ebde8d ;
   color: black ;

}
:root {
    --color-primary: #9B5DE5;
    --color-secondary: #f15bb5;
    --color-tertiary:#fee440;
    --color-quaternary:#00bbf9;
    --color-quiternary:#00f5d4;
    --color-hexaternary:#302F4D;
    --gray-600: #333333;
    --gray-300: #828282;
    --gray-100: #e0e0e0;
    --gray-0: #f5f5f5;
    --negative: #e60000;
    --warning: #ffcd07;
    --sucess: #168821;
    --information: #155bcb;
    --white: #F5F5F5;
  }

  html, body, a, figure, div, input, textarea, p, h1, h2, h3, h4, h5, h6, ul, summary, footer, main, aside, section{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    list-style-type: none;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
}

  
  h1 {
    font-weight: bold;
    font-size: 26px;
    margin: 0;
  }
  
  h2 {
    font-weight: bold;
    font-size: 22px;
    margin: 0;
  }
  
  h3 {
    font-weight: bold;
    font-size: 18px;
    margin: 0;
  }
  
  p {
    margin: 0;
  }
  
  button {
    cursor: pointer;
  }
`;
