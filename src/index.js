import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './Styles/GlobalStyles/styles';
import { PageMain } from './components/PageMain'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <PageMain />
    <GlobalStyle />
  </>
);

