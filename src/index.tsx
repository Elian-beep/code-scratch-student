import ReactDOM from 'react-dom/client';
import { AppRouter } from './routes';
import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { CategoryProvider } from 'CategoryProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CategoryProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </CategoryProvider>
  </React.StrictMode>
);
