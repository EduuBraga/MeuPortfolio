import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root{
    --color-main: #141b1f;
    --color-secondary: #00ffbd;
    --color-tertiary: #afafaf;

    --color-text-main: #f4f5f5;
    --color-secondary-main: #020202;
    --color-tertiary-main: #afafaf;
  }
  
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  outline: none;

  body{
    background-color: var(--color-main);
    color: var(--color-text-main);
  }

`