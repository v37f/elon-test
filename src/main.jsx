import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'src/styles/index.scss';
import App from './components/App/App.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
