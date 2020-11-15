// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CarsProvider from './context/CarsProvider';
import SignalProvider from './context/SignalProvider';

ReactDOM.render(
  <SignalProvider>
  <CarsProvider>
    <App />
  </CarsProvider>
  </SignalProvider>,
  document.getElementById('root'),
);
