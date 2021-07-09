import ReactDOM from 'react-dom';
import React from 'react';
import App from './client/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store.js'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('entry-point')
);
