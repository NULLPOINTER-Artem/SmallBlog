import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/scss/app.scss';
import ModalComponent from '@/components/ModalComponent';
import App from '@/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <ModalComponent>
      <App />
    </ModalComponent>
  </BrowserRouter>
);

