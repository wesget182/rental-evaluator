import ReactDOM from 'react-dom';
import React from 'react';
import App from './src/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null} >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('entry-point')
);