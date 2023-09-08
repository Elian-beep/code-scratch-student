import ReactDOM from 'react-dom/client';
import { AppRouter } from './routes';
import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { CategoryProvider } from 'CategoryProvider';
import { TokenProvider } from 'TokenProvider';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <TokenProvider>
      {/* <CategoryProvider> */}
        <ThemeProvider>
          <AppRouter />
        </ThemeProvider>
      {/* </CategoryProvider> */}
    </TokenProvider>
  </React.StrictMode>
);
