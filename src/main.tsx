import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { ThemeProvider } from '@/contexts/ThemeContext';
import App from './App';

import './styles/index.css';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Missing #root element');

createRoot(rootEl).render(
  <ThemeProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>
);
