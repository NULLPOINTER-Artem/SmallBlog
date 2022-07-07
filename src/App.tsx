import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@/scss/app.scss';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div>
        Hello World
      </div>
    </BrowserRouter>
  );
}

export default App;
