import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root{
    --color-main: #141b1f;
    --color-secondary: #00ffbd;
    --color-tertiary: #afafaf;

    --color-main-text: #f4f5f5;
    --color-secondary-text: #020202;
    --color-tertiary-text: #afafaf;
  }

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    color: var(--color-main-text);
  }

  body{
    background-color: var(--color-main);
  }

  a{
    text-decoration: none;

    :hover{
      text-decoration: underline;
      color: var(--color-secondary);
    }
  }
`