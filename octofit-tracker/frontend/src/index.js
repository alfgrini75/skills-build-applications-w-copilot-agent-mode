
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Make REACT_APP_CODESPACE_NAME available from environment
if (!process.env.REACT_APP_CODESPACE_NAME) {
  process.env.REACT_APP_CODESPACE_NAME = window.location.hostname.split('-')[0];
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals();
