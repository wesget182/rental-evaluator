import ReactDOM from 'react-dom';
import React from 'react';
import App from './client/App.js';
import TestApp from './client/Test_app'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

//const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('entry-point')
);
