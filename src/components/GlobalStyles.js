import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;  
  }
  html{
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar{
      width: 0.5rem;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb{
      background-color: darkgray;
    }
  }
  body{
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    overflow: overlay;
  }
  h2{
    font-size: 3rem;
    font-family: 'Poppins', sans-serif;
    font-weight: lighter;
    color: #333;
    @media screen and (max-width: 720px) {
      font-size: 2rem;
      text-align: center;
    }
  }
  h3{
    font-size: 1.3rem;
    padding: 1.5rem 0rem;
    color: #333;
    @media screen and (max-width: 720px) {
      font-size: 1rem;
      text-align: center;
    }
  }
  p{
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969;
    @media screen and (max-width: 720px) {
      font-size: 0.9rem;
    }
  }
  img{
    display: block;
  }
  a{
    text-decoration: none;
    color: #333;
  }
`;

export default GlobalStyles;
