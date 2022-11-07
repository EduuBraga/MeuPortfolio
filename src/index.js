import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageMain } from './components/PageMain';
import { ThemesProvider } from "./Provider/ThemesProvider/index";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ThemesProvider>
      <PageMain />
    </ThemesProvider>
  </>
);

