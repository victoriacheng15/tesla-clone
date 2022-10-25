import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: 1500px;
    --clr-font: rgb(57,60, 65);
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    line-height: 1.5;
    font-family: 'Montserrat', sans-serif;
    color: var(--clr-font);
  }

  img {
    display: block;
    width: 100%;
  }

  li {
    list-style: none;
  }

  a {
    color: inherit;
    font: inherit;
    text-decoration: none;
    text-transform: capitalize;
  }

  button {
    color: inherit;
    font: inherit;
    font-weight: 600;
  }
`;
